var express = require('express');
var path = require('path');

var app = express();
app.listen(8080, function() {
	console.log('started listen port', 8080);
});

var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/",(req,res) => res.send("Response from the GET request"));

app.post('/signin', function (req, res) {
  var username=req.body.username;
  var password=req.body.password;
  if(username=='admin' && password=='admin'){
  	res.send('success');
  }
  else{
  	res.send('Failure');
  }
})