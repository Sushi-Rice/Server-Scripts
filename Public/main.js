//Position as seen by the client
var clientPosition = 0;

$(function () {
  var socket = io();
  $(document).keydown(function(e){
    if (e.keyCode == 37 && e.keyCode == 38) { 
       socket.emit("clicked");   
       return false;
    } else if(e.keyCode == 39 && e.keyCode == 40) {
       socket.emit("unClicked");
       return false;
    }
});
  
  $('#button').click(function(){
    socket.emit("clicked");
    return false; 
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
      if(counters[i] === false){
        $('#' + i.toString()).css("display", "none");
      }
    }
  });
  
});

