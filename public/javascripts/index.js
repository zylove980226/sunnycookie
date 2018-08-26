$(function() {
    var bgCounter = 0;
    var backgrounds = ['2.jpg','3.jpg','5.jpg','4.jpg'];
    var i = 0;
    setTimeout(changeBackground, 6000);
    function changeBackground() {
        if (i == 0) {
            //将第二个img淡出至透明
            $("#imgbox img").eq(1).fadeTo(7000, 0,
                function() {
                    //第二个img透明后将图片切换至下一组，由于透明度为0，切换时前端无察觉
                    //采用三目运算，判断是否为最后一张图片，如果是最后一张图片则从0开始
                    $("#imgbox img").eq(1).attr('src', "../images/" + backgrounds[bgCounter == backgrounds.length - 1 ? 0 : bgCounter + 1]);
                    i = 1;
                });

        } else {
            //第二个img淡入
            $("#imgbox img").eq(1).fadeTo(7000, 1,
                function() {
                    $("#imgbox img").eq(0).attr('src', "../images/" + backgrounds[bgCounter == backgrounds.length - 1 ? 0 : bgCounter + 1]);
                    i = 0
                });
        }
        //采用三目运算，判断是否为最后一张图片，如果是最后一张图片则从0开始
        bgCounter = bgCounter == backgrounds.length - 1 ? 0 : bgCounter + 1;
        //延时15秒后重新调用本方法
        setTimeout(changeBackground, 6000);
    }

    var range = 50;             //距下边界长度/单位px
    var elemt = 500;           //插入元素高度/单位px
    var maxnum = 10;            //设置加载最多次数
    var num = 1;
    var totalheight = 0;
    var skip = 0;
    var main = $(".pic_content");//主体元素
    $(window).scroll(function(){
        var srollPos = $(window).scrollTop();    //滚动条距顶部距离(页面超出窗口的高度)
        totalheight = parseFloat($(window).height()) + parseFloat(srollPos);
        if(($(document).height()-range) <= totalheight  && num != maxnum) {
            var showHtml = "";
            $.ajax({
                type : "post",//http的请求类型
                url : "/index", //请求地址
                data : {
                    skip : skip
                },//传输给服务端的数据,是一个对象
                success : function (data) {
                    // console.log(data);
                    if(data != null){
                        for(var o of data){
                            showHtml += "<div class='pic_content'><div class='content_inner'><h2 class='title'><strong>"
                                + o['title'] + "</strong></h2></div><div class='pic_outer'><div class='outer_box'><a href='/list' class='pic_a'><img src='"
                                + o['picture'] + "'class='pic_inner' width='220' height='147'></a><span> I like it!</span></div><div class='pic_dsc'><p>"
                                + o['discription'] + "</p></div></div></div>"
                        }
                        $('#unique').append(showHtml);
                        num++;
                        skip += 2;
                    }
                },
                error : function (error) {
                    console.log(error);
                }
            });
        }
    });


});