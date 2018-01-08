var socket = io.connect('http://localhost:4000');
var send = document.getElementById('send');
var handle = document.getElementById('handle');
var message = document.getElementById('message');
var output = document.getElementById('output-message');
var typingMessage = document.getElementById('typing-message');
send.addEventListener("click",function(){
  socket.emit('chat',{
    handle:handle.value,
    message:message.value
  });
  message.value = "";
});
socket.on('chat',function(data){
    output.innerHTML += "<p>"+data.handle + ":" + data.message+"</p>"
    typingMessage.innerHTML = "";
});
socket.on('typing',function(data){
     typingMessage.innerHTML = data.handle + ": is typing a message....";
});
message.addEventListener("input",function(){
  socket.emit('typing',{
    handle:handle.value
  })
});
