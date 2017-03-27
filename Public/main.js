$(function () {
  var socket = io();
  
  $('#button').click(function(){
    socket.emit('submission');
    return false;
  });
});
