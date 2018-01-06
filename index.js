var express = require("express");
//var socket = require("socket");
var app = express();
app.get('/',function(req,res){
  console.log("got a request");
  res.sendFile(__dirname+'/public/new.html');
});
app.listen(4000);
app.use(express.static('public'));
