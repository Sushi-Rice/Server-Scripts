$(function () {
  var socket = io();
  $(document).keydown(function(e){
    if (e.keyCode == 37) { 
       //Stuff to be done when "left" is pressed
       //Not sure if any data needs to be passed in the emit
       socket.emit("left");
       return false;
    }
});
  $('#button').click(function(){
    socket.emit('submission');
    $('#main').css("color", "red");
    return false;
  });
});
