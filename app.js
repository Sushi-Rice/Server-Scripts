var app = require('express')();
var express = require('express');
var server = require('http').Server(app);
var io = require('socket.io')(server);
var position = 0;
var ids = [];
var counters = [0];

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
	
  var myNumber = counters.length;
  counters[myNumber] = 0;
  
  socket.on('clicked', function(){
     counters[myNumber] -= 1;
     io.emit('posChanged', myNumber, counters[myNumber], counters.length);
  });
	
  socket.on('unClicked', function(){
     counters[myNumber] += 1;
     io.emit('posChanged', myNumber, counters[myNumber], counters.length);
  });
	
  socket.emit('counterSending', counters);
  io.emit('counterUpdate', counters);
  console.log(counters);

  socket.on('disconnect', function(){
     console.log('a user disconnected');
  });
});

app.use(express.static(__dirname + '/public'));


