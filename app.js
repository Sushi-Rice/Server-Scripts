var app = require('express')();
var express = require('express');
var server = require('http').Server(app);
var io = require('socket.io')(server);
var position = 0;
var ids = [];
var counters = [3, 6, 9];

server.listen(8081, function(){
	console.log('listening on *:8081');
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function (socket) {
  console.log('a user connected');
	
  ids.push(socket.id);
  console.log(socket.id);
	
  counters.push(0);
  socket.emit('counterSending', counters);
  console.log(counters);
	
  socket.on('submission', function(){
     console.log('the button has been clicked');
  });
	
  socket.on('left', function(){
     console.log('the left button has been clicked');
     position = position + 1;
     console.log(position);
     io.emit('changePos', position);
  });

  socket.on('disconnect', function(){
     console.log('a user disconnected');
  });
});

app.use(express.static(__dirname + '/public'));


