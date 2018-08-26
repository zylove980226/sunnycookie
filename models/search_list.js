var mongodb = require('./db');

function Firstdb(firstdb) {
    this.picture = firstdb.picture;
    this.name = firstdb.name;
    this.type = firstdb.type;
    this.discription= firstdb.discription;
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
                if(err) return callback(err);
                return callback(null, result);
            })
        })
    })
};