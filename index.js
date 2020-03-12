const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const bodyParser = require('body-parser');
const path = require('path');

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

    socket.on('chat message', (msg) => {
        io.in(msg.room).emit('chat message',{room:msg.room, value:msg.chat})
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
