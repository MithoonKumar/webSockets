var socket = io.connect('http://localhost:4000');
var send = document.getElementById('send');
var handle = document.getElementById('handle');
var message = document.getElementById('message');
var output = document.getElementById('output-message');
send.addEventListener("click",function(){
  socket.emit('chat',{
    handle:handle.value,
    message:message.value
  });
  message.value = "";
});
socket.on('chat',function(data){
    output.innerHTML += "<p>"+data.handle + ":" + data.message+"</p>"
});
