var settings = require('../settings');
var Db = require('mongodb').Db;
var service = require('mongodb').Server;
//settings.host是IP地址
module.exports = new Db(settings.db, new service(settings.host, "27017", {}));
//上面这句话是连接数据库的