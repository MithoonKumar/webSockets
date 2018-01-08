var express = require("express");
var socket = require("socket.io");
var app = express();
app.get('/',function(req,res){
  console.log("got a request");
  res.sendFile(__dirname+'/public/new.html');
});
var server = app.listen(4000);
app.use(express.static('public'));
var io = socket(server);
io.on('connection', function(socket){
    console.log('made socket connection', socket.id);
    socket.on('chat',function(data){
      io.sockets.emit('chat',data);
      console.log("emitted a messge from the server");
    });
    socket.on('typing',function(data){
      socket.broadcast.emit('typing',data);
    });
});
