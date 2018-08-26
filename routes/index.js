var express = require('express');
var router = express.Router();
var firstdb = require('../models/find_one');

/* GET home page. */
router.get('/:username', function(req, res, next) {
    firstdb.findAll(function (err, firstdb) {
        var scenetype = [];
        var lifetype = [];
        var weektype = [];
        for (var i of firstdb) {
            if (i.type == "scene") {
                scenetype.push(i);
            }
            if (i.type == "life") {
                lifetype.push(i);
            }
            if (i.type == "week") {
                weektype.push(i);
            }
        }
        res.render('index',{scenetype: scenetype,lifetype: lifetype,weektype:weektype,username:req.params.username})
    });
});

router.post('/',function (req, res) {
    /*firstdb.findPage(req.body.skip,function (err, result) {
        res.json(result);
    })*/
    if(global.isFlag != 1){
        global.isFlag = 1;
        firstdb.findPage(req.body.skip,function(err,result){
            if(err) return result.json(err);
            global.isFlag = 0;
            return res.json(result);
        });
    }else{
        return res.json(null);
    }
});



module.exports = router;
