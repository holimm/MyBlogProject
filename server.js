var express = require('express');
var path = require('path');
var db = require('./backend/database')

var app = express();
app.listen(8080, function() {
	console.log('started listen port', 8080);
});
var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post('/signin', function (req, res) {
  var username=req.body.username;
  var password=req.body.password;
  db.mydatabase.connect(function(err){
    var sql = `SELECT * FROM authme WHERE username = '${username}' AND password = '${password}' LIMIT 1`;
    db.mydatabase.query(sql, function(err,result,field){
        if(err){
          console.log(err);
        }
        if(!result[0]) {
          return res.send(result);          
        }
        else{         
          return res.send(result);
        }
    });
  });
});

app.get('/getblogs', function (req, res) {
  db.mydatabase.connect(function(err){
    var sql = `SELECT * FROM blog`;
    db.mydatabase.query(sql, function(err,result,field){
        if(err){
          console.log(err);
        }
        if(!result[0]) {
          return res.send(result);          
        }
        else{         
          return res.send(result);
        }
    });
  });
});

app.get('/getblogsdetail', function (req, res) {
  var id = req.query.id;
  db.mydatabase.connect(function(err){
    var sql = `SELECT * FROM blog WHERE id='${id}' LIMIT 1`;
    db.mydatabase.query(sql, function(err,result,field){
        if(err){
          console.log(err);
        }
        if(!result[0]) {
          return res.send(result);          
        }
        else{         
          return res.send(result);
        }
    });
  });
});

app.post('/writeblog', function (req, res) {
  var title = req.body.title;
  var content = req.body.content;
  var category = req.body.category;
  var date = req.body.date;
  db.mydatabase.connect(function(err){
    var sql = `INSERT INTO blog VALUES ('4','${title}','${content}','${category}','${date}','nothing')`;
    db.mydatabase.query(sql, function(err,result,field){
        if(err){
          console.log(err);
        }
        if(!result[0]) {
          return res.send(result);          
        }
        else{         
          return res.send(result);
        }
    });
  });
});