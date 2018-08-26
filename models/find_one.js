var mongodb = require('./db');

function Firstdb(firstdb) {
    this.picture = firstdb.picture;
    this.name = firstdb.name;
    this.type = firstdb.type;
    this.discription= firstdb.discription;
    this.title = firstdb.title;
}

module.exports = Firstdb;
Firstdb.findAll = function(callback){
    mongodb.open(function (err, db) {
        if(err) return callback(err);
        db.collection('mypicture', function (err, collection) {
            if(err){
                mongodb.close();
                return callback(err);
            }
            collection.find({}).toArray(function (err, result) {
                mongodb.close();
                if(err){
                    return callback(err);
                }
                return callback(null, result);
            })
        })
    })
};


Firstdb.findPage = function (skip,callback) {
    mongodb.open(function (err, db) {
        if(err) return callback(err);
        db.collection('mypicture', function (err, collection) {
            if(err){
                mongodb.close();
                return callback(err);
            }
            collection.find({title : "ON PHOTOBOOKS"}).skip(parseInt(skip)).limit(2).toArray(function (err, result){
                console.log(skip);
                mongodb.close();
                if(err){
                    return callback(err);
                }
                return callback(null, result);


            })
        })
    })
};