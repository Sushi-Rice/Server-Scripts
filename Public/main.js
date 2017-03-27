$(function () {
  var socket = io();
  $(document).keypress(function(e){
    if(e.which === 37){
      socket.emit('left');
      $('#main').css("color", "blue");
    }
  });
  $('#button').click(function(){
    socket.emit('submission');
    $('#main').css("color", "red");
    return false;
  });
});
