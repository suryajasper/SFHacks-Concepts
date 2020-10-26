var socket = io();

// socket.emit ==> send information
// socket.on ==> callback upon getting information

socket.emit('sendDataTest', {
    name: 'Surya',
    age: 16
});

socket.on('name', function(name) {
    console.log(name);
})