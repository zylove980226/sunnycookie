var express = require('express');
var router = express.Router();
var firstdb = require('../models/detail_pic');

router.get('/',function (req, res) {
    var i = req.query.img;

    console.log(i);
    firstdb.findAll(i,function (err, firstdb,i) {
        var detailArray = [];
        for (var o of firstdb) {
            if (o.picture == i) {
                detailArray.push(o);
            }
        }
        //循环其他数组
        var othertype = [];
        var majortype = [];
        var smalltype = [];
        var tagArr = [];
        for (var i of firstdb) {
            if(i.type == "other"){
                othertype.push(i);
            }
            if (i.type == "major") {
                majortype.push(i);
            }
            if (i.type == "small"){
                smalltype.push(i);
            }
            if (i.picture == i){
                detailArray.push(i);
            }
        }
        //数组对象去重
        function arrayUnique2(arr, name) {
            var hash = {};
            return arr.reduce(function (item, next) {
                hash[next[name]] ? '' : hash[next[name]] = true && item.push(next);
                return item;
            }, []);
        }
        var tagArr = arrayUnique2(firstdb, "type")
        res.render('detail',{othertype: othertype,majortype: majortype,smalltype: smalltype,tagArr: tagArr,detailArray: detailArray})
    });
});

module.exports = router;