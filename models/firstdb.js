//引入db.js数据库
var mongodb = require('./db');


//根据数据库字段来写构造函数,函数名称随意首字符大写,参数是Firstdb的传入firstdb对象,相当于var firstdb = new Firstdb();
//开始要想好firstdb的类型，到底是对象还是字符串，如果是字符串就不能添加属性
function Firstdb(firstdb) {
    this.id = firstdb.id;
    this.name = firstdb.name;
    this.email = firstdb.email;
    this.password = firstdb.password;
};
//将Firstdb作为公开的接口
module.exports = Firstdb;



//查找一条数据FindOne函数,findOne函数与下面collection.findOne相同
//firstdb参数到底是对象还是字符串,是对象可以包括很多的属性
Firstdb.findOne = function(firstdb, callback) {
    //打开数据库
    mongodb.open(function (err, db) {
        if(err){
            return callback(err);
        }
        //'mylogindatabase'是数据库需要的集合名称,collection是db提供的一个方法
        db.collection('mylogindatabase', function (err, collection) {
            if(err){
                mongodb.close();//关闭数据库
                return callback(err);//错误，返回 err 信息
            }
            //查找用户名（name键,值为name,一个文档,connection与上面相同,查询名称
            collection.findOne({
                //是上面Firstdb.findOne匿名函数的第一个参数firstdb
                name : firstdb.name,
                password : firstdb.password
            },function (err, aaa) {
                //第二个参数aaa是查询成功返回的数据
                mongodb.close();
                //不需要返回
                if (aaa) {
                    return callback(null, aaa);//成功！返回查询的用户信息
                }
                callback(err);//失败！返回 err 信息
            });
        });
    });

};

//将数据插入数据库
