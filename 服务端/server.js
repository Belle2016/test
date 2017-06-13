
var express = require('express');
var app = express();
 
var fs = require("fs");
 
var bodyParser = require('body-parser');
var multer  = require('multer');

 
// ���� application/x-www-form-urlencoded �������
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('image'));
 
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})
 
app.get('/process_get', function (req, res) {
 
   // ��� JSON ��ʽ
   var response = {
       "first_name":req.query.first_name,
       "last_name":req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
 

 app.post('/process_post', urlencodedParser, function (req, res) {
 
   // ��� JSON ��ʽ
   var response = {
       "first_name":req.body.first_name,
       "last_name":req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
 
app.post('/file_upload', function (req, res) {
 
   console.log(req.files[0]);  // �ϴ����ļ���Ϣ
 
   var des_file = __dirname + "/" + req.files[0].originalname;
   fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
         if( err ){
              console.log( err );
         }else{
               response = {
                   message:'File uploaded successfully', 
                   filename:req.files[0].originalname
              };
          }
          console.log( response );
          res.end( JSON.stringify( response ) );
       });
   });
})

var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("Ӧ��ʵ�������ʵ�ַΪ http://%s:%s", host, port)
 
})
