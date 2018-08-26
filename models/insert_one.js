//引入db.js数据库
var mongodb = require('./db');


//根据数据库字段来写构造函数,函数名称随意首字符大写,参数是Firstdb的传入firstdb对象,相当于var firstdb = new Firstdb();
//开始要想好firstdb的类型，到底是对象还是字符串，如果是字符串就不能添加属性
function Firstdb(firstdb) {
    this.name = firstdb.name;
    this.email = firstdb.email;
    this.password = firstdb.password;
};
//将Firstdb作为公开的接口
module.exports = Firstdb;

/*Firstdb.insertMany = function(firstArr, callback){
    mongodb.open(function (err, db) {
        if (err){
            return callback(err);
        }
        db.collection('mylogindatabase', function (err, collection) {
            if (err){
                return callback(err);
            }
            var insertArray = new Array();
            for (var i in firstArr){
                insertArray.push({
                    name : firstArr[i].name,
                    email : firstArr[i].email,
                    age : firstArr[i].age
                });
            }
            collection.insertMany(insertArray, function (err, insertNumber) {

            })
        })
    })
}*/

Firstdb.insertOne = function (firstdb, callback) {
    //打开数据库
    mongodb.open(function (err, db) {
        if(err){
            return callback(err);
        }
        db.collection('mylogindatabase', function (err, collection) {
            if(err){
                return callback(err);
            }
            collection.insertOne({
                name : firstdb.name,
                password : firstdb.password,
                email : firstdb.email
            }, function (err, result) {
                mongodb.close();
                if (err){
                    return result.callback(err);
                }
                callback(err,result);
            })
        })
    })
};
