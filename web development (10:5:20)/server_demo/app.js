var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
app.use(express.static(__dirname + '/client'));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
    next();
});
var port = process.env.PORT || 2000;

io.on('connection', function(socket) {
    console.log('someone connected');

    socket.on('sendDataTest', function(data) {
        console.log(data);
        socket.emit('name', data.name);
    })
})

http.listen(port, function() {
    console.log('listening on port ' + port.toString());
});