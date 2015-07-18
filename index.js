var express = require('express');
  multer = require('multer'),
    send = require('send'),
    uuid = require('node-uuid'),
    fs = requie('fs');
var app = express();
var fileuuid = "";
var done = false;

app.use(multer({ dest: './uploads/',
 rename: function (fieldname, filename) {
 	fileuuid = uuid.v4();
    return fileuuid;
  },
onFileUploadStart: function (file) {
  console.log(file.originalname + ' is starting ...')
},
onFileUploadComplete: function (file) {
  console.log(file.fieldname + ' uploaded to  ' + file.path)
  done=true;
}
}));

app.get('/', function (req, res) {
  res.sendfile("index.html");
});

app.post('/',function(req,res){
  if(done==true){
    console.log(req.files);
    res.end("File uploaded.");
  }
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
