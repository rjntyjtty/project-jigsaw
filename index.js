const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const bodyParser = require('body-parser');
const path = require('path');
const cookie = require('cookie');
const session = require('express-session');

app.use(bodyParser.json());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

io.sockets.on('connection', (socket) => {
    console.log('user connected')

    socket.on('join', (room) => {
        //room name is just the pathname, split and joined to remove forward slash
        console.log(room);
        let fixedRoom = room.split('/').pop()
        socket.join(fixedRoom)
        io.in(fixedRoom).emit('room', fixedRoom)

    })

    socket.on('message', (message) => {
        io.in(message.room).emit('message',{room:message.room, value:message.newValue})
    })

    // socket.on('toolbar', (settings) => {
    //     console.log('settngs', settings)
    //     io.in(settings.room).emit('toolbar', settings)
    // })

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
})

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

server.listen(5000);

console.log('App is listening on port ' + 5000);


// **************************************************************************************
// *************************************** USERS ****************************************
// **************************************************************************************

const crypto = require('crypto');
let isAuthenticated = function (req, res, next) {
    if (!req.email) return res.status(401).end("access denied");
    next();
};

app.use(express.static('static'));

let Datastore = require('nedb');
let users = new Datastore({ filename: 'db/users.db', autoload: true, timestampData: true });
let projects = new Datastore({ filename: 'db/projects.db', autoload: true, timestampData: true });

app.use(session({
    secret: 'please change this secret',
    resave: false,
    saveUninitialized: true,
}));

app.use(function (req, res, next) {
    req.email = (req.session.email) ? req.session.email : "";
    console.log("HTTP request", req.email, req.method, req.url, req.body);
    next();
});

// curl -H "Content-Type: application/json" -X POST -d '{"email":"alice","password":"alice"}' -c cookie.txt localhost:3000/signup/
app.post('/api/signup/', function (req, res, next) {
    let email = req.body.email;
    let password = req.body.password;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;

    users.findOne({ _id: email }, function (err, user) {
        if (err) return res.status(500).end(err);
        if (user) return res.status(409).end("An account already exists with email: " + email);

        // save password as salted hash
        let salt = crypto.randomBytes(16).toString('base64');
        let hash = crypto.createHmac('sha512', salt);
        hash.update(password);
        let saltedHash = hash.digest('base64');

        users.update({ _id: email }, { _id: email, salt: salt, saltedHash: saltedHash, firstName: firstName, lastName: lastName }, { upsert: true }, function (err) {
            if (err) return res.status(500).end(err);

            req.session.email = email;
            // initialize cookie
            res.setHeader('Set-Cookie', cookie.serialize('email', email, {
                path: '/',
                maxAge: 60 * 60 * 24 * 7
            }));
            return res.json("user " + email + " signed up");
        });
    });
});

// curl -H "Content-Type: application/json" -X POST -d '{"email":"alice","password":"alice"}' -c cookie.txt localhost:3000/signin/
app.post('/api/signin/', function (req, res, next) {
    let email = req.body.email;
    let password = req.body.password;
    // retrieve user from the database
    users.findOne({ _id: email }, function (err, user) {
        if (err) return res.status(500).end(err);
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
        return res.json("user " + email + " signed in");
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