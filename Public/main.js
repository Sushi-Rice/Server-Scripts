$(function () {
  var socket = io();
  
  $('form').submit(function(){
    socket.emit('submission');
    return false;
  });
});
