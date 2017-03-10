/**
 * Created by ly on 2016/11/30.
 */
var express = require('express');
var app = express();

//连接数据库
//var mysql = require('mysql');
//var mongodb = require('mongodb');

// 主页输出 "Hello GET"
//app.get('/', function (req, res) {
//    //res.send("hello get")
//    res.sendfile("./public/index.htmlContent")
//})
//
////  POST请求
//app.post('/', function (req, res) {
//    console.log("POST");
//    res.send('Hello POST');
//})

//静态文件访问路径(将文件夹public暴露出去供客户端访问 eg：http://localhost:8081/index.htmlContent 而不是http://localhost:8081/public/index.htmlContent)
app.use(express.static('node_modules/public'));

//app.get('/success', function (req, res) {
//    //console.log(req.query.username);
//    if(req.query.username == "luoliang"){
//        res.sendfile("public/htmlContent/main.htmlContent");
//    }
//})

//mongodb数据库连接
//console.log(mongodb);

//mysql数据库连接
//var connection = mysql.createConnection({
//    host: 'localhost',
//    user: 'root',
//    password: '',
//    database:'mydb'
//});

//connection.connect();
////查询
//connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//    if (err) throw err;
//    console.log('The solution is: ', rows[0].solution);
//});
////关闭连接
//connection.end();

var server = app.listen(8082, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("app start");
})