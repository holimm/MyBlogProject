var express = require('express');
var path = require('path');
var multer = require('multer');
var db = require('./database')
const bcrypt = require('bcrypt');
const PORT = 3301;

var app = express();
app.listen(process.env.PORT || PORT, function() {
	console.log(`started listen port ${PORT}`);
});
var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post('/signin', function (req, res) {
  var username=req.body.username;
  var password=req.body.password;
  db.mydatabase.connect(function(err){
    var sql = `SELECT * FROM authme WHERE username = '${username}' LIMIT 1`;
    db.mydatabase.query(sql, function(err,result,field){
        if(err){
          res.send({status: 'error',content: 'Không tìm thấy tài khoản!'})
        }
        if(result[0]){         
          var account = result;
          var passwordHashed = result[0].password;
          bcrypt.compare(password, passwordHashed).then(function(result) {
              if(result){
                res.send(account);
              }
              else{
                res.send({status: 'error',content: 'Sai mật khẩu!'})
              }             
          });
        }
        else if(!result[0]){
          res.send({status: 'error',content: 'Không tìm thấy tài khoản!'})
        }
    });
  });
});

app.post('/deleteblog',function(req,res){
  var id = req.body.id;
  db.mydatabase.connect(function(err){
    var sql = `UPDATE blog SET state = 0 WHERE id = '${id}'`;
    db.mydatabase.query(sql,function(err,result){
      if(err){
        return res.send({status: 'error',content: 'Có lỗi khi xóa bài viết'});
      }
      else{
        return res.send({status: 'success',content: 'Đã xóa bài viết thành công'});
      }
    })
  })
})
app.post('/restoreblog',function(req,res){
  var id = req.body.id;
  db.mydatabase.connect(function(err){
    var sql = `UPDATE blog SET state = 1 WHERE id = '${id}'`;
    db.mydatabase.query(sql,function(err,result){
      if(err){
        return res.send({status: 'error',content: 'Có lỗi khi phục hồi bài viết'});
      }
      else{
        return res.send({status: 'success',content: 'Đã phục hồi bài viết thành công'});
      }
    })
  })
})

app.get('/getblogs', function (req, res) {
  db.mydatabase.connect(function(err){
    var sql = `SELECT * FROM blog ORDER BY date DESC`;
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

//Write Blog
//Upload Img File

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, "public/img/blog")
  },
  filename: function (req, file, cb) {
    var fileName = file.fieldname + "-" + Date.now()+".jpg";
    cb(null, fileName)
  }
})

const maxSize = 10 * 1000 * 1000;

var upload = multer({ 
  storage: storage,
  limits: { fileSize: maxSize },
  fileFilter: function (req, file, cb){
      var filetypes = /jpeg|jpg|png/;
      var mimetype = filetypes.test(file.mimetype);
      var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
      if (mimetype && extname) {
        return cb(null,true); 
      }
      cb("Error: File upload only supports the " + "following filetypes - " + filetypes);
    } 
}).single("image");       

app.post('/uploadImage', function (req, res, next) {
  upload(req,res,function(err) {
      if(err) {
        res.send({status: 'error', content: 'Lỗi khi đăng hình ảnh'})
      }
      else {
        res.send({status: 'valid', content: req.file.filename})
      }
  })
});
//Upload Img File
app.post('/writeblog', function (req, res, next) {
  var idTitle = req.body.idTitle;
  var title = req.body.title;
  var content = req.body.content;
  var category = req.body.category;
  var date = req.body.date;
  var author = req.body.author;
  var imageName = req.body.imageName;

  title.length<10 ? res.send({status: 'error', content: 'Tiêu đề phải lớn hơn 10 chữ'}) :
  content.length<255 ? res.send({status: 'error', content: 'Nội dung phải lớn hơn 255 chữ'}) :
  category.length == 0 ? res.send({status: 'error', content: 'Hãy chọn thể loại'}) :
      db.mydatabase.connect(function(err){
        var sql = `INSERT INTO blog VALUES ('${idTitle}','${title}','${content}','${category}','${author}','${date}','${imageName}',1)`;
        db.mydatabase.query(sql, function(err){
            if(err){
              res.send({status: 'error', content: 'Lỗi khi đăng blog'})
            }
            else{
              res.send({status: 'valid', content: 'Đăng blog thành công'})
            }
        });
      });
});
//Write Blog
app.post('/editblog', function (req, res, next) {
  var idTitle = req.body.idTitle;
  var idOld = req.body.idOld;
  var title = req.body.title;
  var content = req.body.content;
  var category = req.body.category;

  title.length<10 ? res.send({status: 'error', content: 'Tiêu đề phải lớn hơn 10 chữ'}) :
  content.length<255 ? res.send({status: 'error', content: 'Nội dung phải lớn hơn 255 chữ'}) :
  category.length == 0 ? res.send({status: 'error', content: 'Hãy chọn thể loại'}) :
      db.mydatabase.connect(function(err){
        var sql = `UPDATE blog SET id='${idTitle}',title='${title}',content='${content}',category='${category}' WHERE id='${idOld}'`;
        db.mydatabase.query(sql, function(err){
            if(err){
              res.send({status: 'error', content: 'Lỗi khi sửa blog'})
            }
            else{
              res.send({status: 'valid', content: 'Sửa blog thành công'})
            }
        });
      });
});