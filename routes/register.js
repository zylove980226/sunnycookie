var express = require('express');
var router = express.Router();
var firstdb = require('../models/insert_one')

router.get('/',function (req, res, next) {
    res.render('index',{});
});
router.post('/',function (req, res) {
    firstdb.insertOne({
        "name" : req.body.name,
        "email" : req.body.email,
        "password" : req.body.userpassword
    },function (err, firstdb) {
        if(firstdb == undefined){
            res.render('login',{isRegister:1})
            // res.redirect('/login?isRegister=1');
        }
        res.redirect("/index/"+firstdb.ops[0].name);
    });
});
module.exports = router;