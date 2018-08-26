var express = require('express')
var router = express.Router()
var firstdb = require('../models/firstdb')

router.get('/', function (req, res, next) {
    res.render('login');
})
router.post('/', function (req, res, next) {
    //通过findOne方法拿到你想要的数据
    firstdb.findOne({
        "name": req.body.userName,
        "password": req.body.passWord
    }, function (err, firstdb) {
        if (firstdb == undefined) {
            req.flash('error', '用户名或者密码不正确')
            res.render('login',{isRegister: 0})
        }else{
            res.redirect("/index/"+firstdb.name);
        }
    })
})

module.exports = router;