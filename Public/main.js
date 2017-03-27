$(function () {
  var socket = io();
  
  $('#button').click(function(){
    socket.emit('submission');
    $('#main').css("color", "red");
    return false;
  });
});
