var express = require('express');
var gameport = process.env.PORT || 8081;
var http = require('http');
var UUID = require('uuid/v4');
var verbose = false;
var app = express();
var server = http.createServer(app);
var io = require('socket.io')(http)/*.listen(server);   (http) not there originally*/

server.listen(gameport);
console.log('\t :: Express :: Listening on port ' + gameport);

app.get( '/', function( req, res ){ 
	res.sendFile( __dirname + '/index.html' );
	console.log(":: Express :: user connected to main site");
});

app.get('/*', function(req, res, next){
	var file = req.params[0];
	if(verbose) console.log('\t :: Express :: file requested : ' + file);
	res.sendFile(__dirname + '/' + file);
});

io.on('connection', function(client){
	/*client.userid = UUID();
	client.emit('onconnected', {id:client.userid});
	console.log('\t socket.io:: player ' + client.userid + 'connected');
	client.on('disconnect', function (){
		console.log('\t socket.io:: client disconnected ' + client.userid);
	});*/
	console.log('socket.io:: player connected');
});