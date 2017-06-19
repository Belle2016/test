
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var users = require('./users.js');
var cookieParser = require('cookie-parser')
//var url = require('url');
//var path = require('path');

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser())
app.get('/index.html', function (req, res) {
    res.sendFile( "index.html" );

})
app.post( '/login',function (req, res) {
        users.login(req.body.name,req.body.pwd,function (msg) {
            res.send(msg);
        });
    }
);
app.post('/register',function (req, res) {
        users.register(req.body.name,req.body.pwd,function (msg){
            res.send(msg);
        });
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})