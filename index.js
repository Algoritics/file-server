var express = require('express');
  multer = require('multer'),
    send = require('send'),
    uuid = require('node-uuid'),
    fs   = require('fs');
var app = express();
var fileuuid = "";
var done = false;
var originalname = "";

app.use(multer({ dest: './uploads/',
 rename: function (fieldname, filename) {
 	fileuuid = uuid.v4();
    return fileuuid;
  },
onFileUploadStart: function (file) {
  console.log(file.originalname + ' is starting ...')
  originalname = file.originalname;
},
onFileUploadComplete: function (file) {
  console.log(file.fieldname + ' uploaded to  ' + file.path)
  done=true;
}
}));

app.get('/', function (req, res) {
  res.send("UpDow server v1");
});

app.get('/:name', function (req, res) {
  res.sendFile("./uploads/" + req.params.name);
});

app.post('/',function(req,res){
  if(done==true){
    console.log(req.files);
    var JSONdata = {name: originalname,
    				date: Date()};
    var JSONstring = JSON.stringify(JSONdata)
    var fd = fs.openSync('./uploads/' + fileuuid + '.json', 'w');
    fs.writeSync( fd, JSONstring );
    res.end("Upload successful");
  }
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
