var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8081, function(){
	console.log('listening on *:8081');
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function (socket) {
  console.log('a user connected');
  socket.on('disconnect', function(){
     console.log('a user disconnected');
  });
});

io.on('submission', function(){
  console.log('the button has been clicked');
});