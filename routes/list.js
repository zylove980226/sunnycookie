var express = require('express');
var router = express.Router();
var firstdb = require('../models/search_list');

router.get('/',function (req, res) {
    firstdb.findAll(function (err, firstdb,) {
        var picturetype = [];
        for (var i of firstdb) {
            if(i.type == "sky"){
                picturetype.push(i);
            }
        }
        res.render('list',{picturetype: picturetype})
    });
});

module.exports = router;