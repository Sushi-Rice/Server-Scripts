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
  //Not sure if this should be inside or outside the $ selector
  socket.on('changePos', function(position){
    //We need to do something with this; just a debugging placeholder
    alert(position);
  });
});

