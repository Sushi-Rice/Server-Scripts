//Position as seen by the client
var clientPosition = 0;

$(function () {
  var socket = io();
  $(document).keydown(function(e){
    if (e.keyCode == 37) { 
       //Stuff to be done when "left" is pressed
       socket.emit("left");
       return false;
    }
});
  $('#button').click(function(){
    socket.emit('submission');
    $('#main').css("color", "red");
    socket.emit("left");
    socket.emit("clicked");
    return false;
    
  });
  socket.on('changePos', function(position){
    clientPosition = position;
    $('#main').text(clientPosition);
  });
  
  socket.on('counterSending', function(counters){
    for(var i = 0; i < counters.length; i++){
      $('<div></div>').appendTo(document.body).text(counters[i]);
    }
  });
  
});

