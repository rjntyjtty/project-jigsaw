const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const bodyParser = require('body-parser');
const path = require('path');
const cookie = require('cookie');
const session = require('express-session');
const MongoClient = require('mongodb').MongoClient;
const crypto = require('crypto');

app.use(bodyParser.json());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'frontend/build')));

const PORT = process.env.PORT || 50001;
var url = "mongodb://localhost:/" + PORT + "/";

io.sockets.on('connection', (socket) => {
    console.log('user connected')

    socket.on('join', (room) => {
        //room name is just the pathname, split and joined to remove forward slash
        console.log(room);
        let fixedRoom = room.split('/').pop()
        socket.join(fixedRoom)
        io.in(fixedRoom).emit('room', fixedRoom)

    });

    socket.on('message', (message) => {
        io.in(message.room).emit('message',{room:message.room, value:message.newValue})
    });

    socket.on('chat message', (msg) => {
        io.in(msg.room).emit('chat message',{room:msg.room, value:msg.value, user:msg.user, color:msg.color})
    })

    // socket.on('toolbar', (settings) => {
    //     console.log('settngs', settings)
    //     io.in(settings.room).emit('toolbar', settings)
    // })

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
})

server.listen(PORT);

console.log('App is listening on port ' + PORT);


// **************************************************************************************
// *************************************** USERS ****************************************
// **************************************************************************************

let isAuthenticated = function (req, res, next) {
    if (!req.email) return res.status(401).end("access denied");
    next();
};

app.use(session({
    secret: 'please change this secret',
    resave: false,
    saveUninitialized: true,
}));

app.use(function (req, res, next) {
    req.email = (req.session.email) ? req.session.email : "";
    console.log("HTTP request", req.email, req.method, req.url, req.body);

    MongoClient.connect(url, function (err, db) {
        if (err) return res.status(500).end(err);  // failed to connect to mongoDB
        let dbo = db.db("mydb");

        dbo.collection("users").find({}).toArray(function (err, users) {
            db.close();
        });
    });
    next();
});

// curl -H "Content-Type: application/json" -X POST -d '{"email":"alice","password":"alice"}' -c cookie.txt localhost:3000/signup/
app.post('/api/signup/', function (req, res, next) {
    MongoClient.connect(url, function (err, db) {
        if (err) return res.status(500).end(err);  // failed to connect to mongoDB
        let dbo = db.db("mydb");
        let email = req.body.email;
        let password = req.body.password;
        let firstName = req.body.firstname;
        let lastName = req.body.lastname;

        dbo.collection("users").find({ _id: email }).toArray(function (err, users) {
            if (err) return res.status(500).end(err);
            let user = users[0];
            if (user) return res.status(409).end("An account already exists with email: " + email);

            // save password as salted hash
            let salt = crypto.randomBytes(16).toString('base64');
            let hash = crypto.createHmac('sha512', salt);
            hash.update(password);
            let saltedHash = hash.digest('base64');

            let new_user = { _id: email, salt: salt, saltedHash: saltedHash, firstName: firstName, lastName: lastName };
            dbo.collection("users").insertOne(new_user, function (err, res2) {
                if (err) return res2.status(500).end(err);

                req.session.email = email;
                // initialize cookie
                res.setHeader('Set-Cookie', cookie.serialize('email', email, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 7
                }));

                db.close();
                return res.json("user " + email + " signed up");
            });
        });
    });
});

// curl -H "Content-Type: application/json" -X POST -d '{"email":"alice","password":"alice"}' -c cookie.txt localhost:3000/signin/
app.post('/api/signin/', function (req, res, next) {
    MongoClient.connect(url, function (err, db) {
        if (err) return res.status(500).end(err);  // failed to connect to mongoDB
        let dbo = db.db("mydb");
        let email = req.body.email;
        let password = req.body.password;

        dbo.collection("users").find({ _id: email }).toArray(function (err, users) {
            if (err) return res.status(500).end(err);
            let user = users[0];
            if (!user) return res.status(401).end("access denied");

            // check pw against the saved salted hash
            let hash = crypto.createHmac('sha512', user.salt);
            hash.update(password);
            let saltedHash = hash.digest('base64');

            if (user.saltedHash !== saltedHash) return res.status(401).end("access denied");
            req.session.email = email;
            // initialize cookie
            res.setHeader('Set-Cookie', cookie.serialize('email', email, {
                path: '/',
                maxAge: 60 * 60 * 24 * 7
            }));

            db.close();
            return res.json("user " + email + " signed in");
        });
    });
});

// curl -b cookie.txt -c cookie.txt localhost:3000/signout/
app.get('/api/signout/', function (req, res, next) {
    req.session.destroy();
    res.setHeader('Set-Cookie', cookie.serialize('email', '', {
        path: '/',
        maxAge: 60 * 60 * 24 * 7 // 1 week in number of seconds
    }));
    res.redirect('/');
});

app.get('/api/users/', function (req, res, next) {  // get all users
    MongoClient.connect(url, function (err, db) {
        if (err) return res.status(500).end(err);  // failed to connect to mongoDB
        let dbo = db.db("mydb");

        dbo.collection("users").find({}).toArray(function (err, users) {
            if (err) return res.status(500).end(err);
            db.close();
            return res.json(users);
        });        
    });
});

app.get('/api/users/:id/', function (req, res, next) {  // get user with given email
    MongoClient.connect(url, function (err, db) {
        if (err) return res.status(500).end(err);  // failed to connect to mongoDB
        let dbo = db.db("mydb");

        dbo.collection("users").find({_id: req.params.id}).toArray(function (err, users) {
            if (err) return res.status(500).end(err);
            let user = users[0];
            if (!user) return res.status(409).end("An account does not exist with email: " + req.params.id);
            db.close();
            return res.json(user);
        });
    });
});

app.get('/api/current_user/', function (req, res, next) {  // get currently logged in user
    MongoClient.connect(url, function (err, db) {
        if (err) return res.status(500).end(err);  // failed to connect to mongoDB
        let dbo = db.db("mydb");

        dbo.collection("users").find({ _id: req.session.email }).toArray(function (err, users) {
            if (err) return res.status(500).end(err);
            let curr_user = users[0];
            if (!curr_user) return res.status(404).end("currently signed out");

            db.close();
            return res.json(curr_user);
        });
    });
});

// **************************************************************************************
// ************************************* PROJECTS ***************************************
// **************************************************************************************

app.post('/api/projects/', function (req, res, next) {  // create new project
    let permalink = red.body.permalink;
    let user_email = req.body.user;
    let title = req.body.title;
    let code = req.body.code;

    MongoClient.connect(url, function (err, db) {
        if (err) return res.status(500).end(err);  // failed to connect to mongoDB
        let dbo = db.db("mydb");

        dbo.collection("projects").find({ _id: permalink }).toArray(function (err, projects) {
            if (err) return res.status(500).end(err);
            let project = projects[0];
            if (project) return res.status(409).end("A project already exists at: " + permalink);

            // note we are given only a singular user who started the project, but put it in a list in anticipation for future users
            let new_project = { _id: permalink, users: [user], title: title, code: code, anons: [] };
            dbo.collection("projects").insertOne(new_project, function (err, res) {
                if (err) return res.status(500).end(err);

                dbo.collection("users").find({ _id: user_email }).toArray(function (err, users) {  // check that it's a real user account; rn, anons can't start projects
                    if (err) return res.status(500).end(err);
                    let user = users[0];
                    if (!user) return res.status(409).end("An account does not exist with email: " + user_email);
                });

                db.close();
                return res.json("New project " + title + " created at " + permalink);
            });
        });       
    });
});

app.get('/api/projects/', function (req, res, next) {  // get all projects
    MongoClient.connect(url, function (err, db) {
        if (err) return res.status(500).end(err);  // failed to connect to mongoDB
        let dbo = db.db("mydb");

        dbo.collection("projects").find({}).toArray(function (err, projects) {
            if (err) return res.status(500).end(err);
            db.close();
            return res.json(projects);
        });
    });
});

app.get('/api/projects/:id/', function (req, res, next) {  // get project with given permalink
    MongoClient.connect(url, function (err, db) {
        if (err) return res.status(500).end(err);  // failed to connect to mongoDB
        let dbo = db.db("mydb");

        dbo.collection("projects").find({_id: req.params.id}).toArray(function (err, projects) {
            if (err) return res.status(500).end(err);
            let project = projects[0];
            if (!project) return res.status(404).end("Comment id: " + req.params.id + " does not exist");
            db.close();
            return res.json(projects);
        });
    });
});

app.get('/api/projects/:user_email/', function (req, res, next) {  // get projects of a given user
    MongoClient.connect(url, function (err, db) {
        if (err) return res.status(500).end(err);  // failed to connect to mongoDB
        let dbo = db.db("mydb");

        dbo.collection("users").find({ _id: req.params.id }).toArray(function (err, users) {
            if (err) return res.status(500).end(err);
            let user = users[0];
            if (!user) return res.status(409).end("An account does not exist with email: " + req.params.id);

            dbo.collection("projects").find({ users: req.params.user_email }).toArray(function (err, projects) {
                if (err) return res.status(500).end(err);
                db.close();
                return res.json(projects);
            });
        });
    });
});

// add a new user as a collaborator to update code - considering separating user and code, since code will happen much more frequently?
// also thinking about refactoring so that we only pass in new users, and this function will append them to an existing list
app.patch('/api/projects/', function (req, res, next) {
    let permalink = red.body.permalink;
    let users = req.body.users;   // do we need to check if each user is actually a real account?
    let code = req.body.code;
    let anons = req.body.anons;

    MongoClient.connect(url, function (err, db) {
        if (err) return res.status(500).end(err);  // failed to connect to mongoDB
        let dbo = db.db("mydb");

        dbo.collection("projects").find({ _id: permalink }).toArray(function (err, projects) {
            if (err) return res.status(500).end(err);
            let project = projects[0];
            if (!project) return res.status(409).end("No project exists at: " + permalink);

            let updated_project = { $set: { users: users, anons: anons, code: code } };
            dbo.collection("projects").updateOne({ _id: permalink }, updated_project, function (err, res) {
                if (err) return res.status(500).end(err);

                db.close();
                return res.json("Project " + title + " at " + permalink + " updated");
            });
        });
    });
});

// Handles any requests that don't match the ones above
/*app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
});*/
