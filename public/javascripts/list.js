$(function () {
    $(".list_item").click(function () {
        var i = $(this).find("img").attr("src");
        var url = "/detail?img=" + i;
        window.open(url,"_self");
    })

    var num = 0;
    $(".right").on("click",function () {
        num ++;
        if (num % 2 == 1){
            $(this).css("color","red");
        } else{
            $(this).css("color","#fff");
        }
    })
})
