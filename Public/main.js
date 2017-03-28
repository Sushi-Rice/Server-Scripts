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
    return false;
  });
  socket.on('changePos', function(position){
    clientPosition = position;
    $('#main').text(clientPosition);
  });
});

