$(function () {
    $('div.pinch-zoom').each(function () {
        new RTP.PinchZoom($(this), {});
    });
    var num = 0;
    $('.like').on("click",function () {
        num ++;
        if (num % 2 == 1){
            $(this).css("background","pink");
        }else{
            $(this).css("background","#fff");
        }
    })
})