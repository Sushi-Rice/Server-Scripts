var app = require('express')();
var express = require('express');
var server = require('http').Server(app);
var io = require('socket.io')(server);
var position = 0;
var counters = [false];

server.listen(8081, function(){
	console.log('listening on *:8081');
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function (socket) {
  console.log('a user connected');
	
  var i = 0; 
  var exitLoop = false;
	
  var myNumber = counters.length;
  //Two or one equal sign?
  while(!exitLoop){
     if(counters[i] === false || i === counters.length){
     	myNumber = i;
	exitLoop = true;
	console.log(i);
     }
     i++;
  }
	
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
     counters[myNumber] = false;
     console.log('a user disconnected');
     io.emit('counterUpdate', counters);
  });
});

app.use(express.static(__dirname + '/public'));


