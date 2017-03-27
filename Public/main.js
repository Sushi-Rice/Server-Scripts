$(function () {
  var socket = io();
  $(document).keydown(function(e){
    if (e.keyCode == 37) { 
       alert( "left pressed" );
       return false;
    }
});
  $('#button').click(function(){
    socket.emit('submission');
    $('#main').css("color", "red");
    return false;
  });
});
