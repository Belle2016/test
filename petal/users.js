var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    port      : 3306,
    database : 'petal'
});

connection.connect(function(error,res){
    if(error){
        console.log('Connection error:'+error.message);
        return;
    }
    console.log('Connection sucessfully')
});

exports.login = function(name,pwd,fn){
    //console.log(name,pwd);
    var sql ='select count(*) from users where name="'+name+'" and pwd="'+pwd+'"';
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        if(results.length==0) {
            fn({result:"不存在该用户"});
        }
        else {
            //console.log(results.length);
            fn(
               {result:"true"}
            );}
        return 0;
    });
}
exports.register = function(name,pwd,fn){
 //   console.log(name,pwd);
    var sql ='select count(*) from users where name="'+name+'"';
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        if(results.length>0){
           // console.log("?");
            fn({result:"该用户已被注册"});
        }
        else {
            var sql2 = 'INSERT INTO users(name, pwd) VALUES("'+name+'","'+pwd+'")';
            connection.query(sql2, function (error, results, fields){
                if (error) throw error;
                else {
                    //console.log("true");
                    fn({result:"true"});
                }
            });
        }
    });
}