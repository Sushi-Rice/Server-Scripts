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
    //clientPosition = position;
    $('#main').text(position);
  });
  
  socket.on('posChanged', function(myPlace, myCount, totLength){
    for(var i = 0; i < totLength; i++){
      $('#' + myPlace.toString()).text(myCount);
    }
  });
  
  socket.on('counterSending', function(counters){
    var iString;
    for(var i = 0; i < 100; i++){
      iString = i.toString();
      $('<p></p>', {id: iString}).appendTo(document.body).text(counters[i]);
    }
  });
  
  socket.on('counterUpdate', function(counters){
    for(var i = 0; i < counters.length; i++){
      $('#' + i.toString()).text(counters[i]);
    }
  });
  
});

