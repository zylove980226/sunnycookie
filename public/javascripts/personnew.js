$(document).ready(function($) {
    'use strict';
    // cropper初始化
    var $image = $('#image');
    //调整cropper参数，在这里调整
    $image.cropper({
        aspectRatio: '1',
        autoCropArea: 0.8,
        viewMode: 2,
        preview: '.up-after',

    });


    // 图片文件变化
    var $inputImage = $('#inputImage');
    var URL = window.URL || window.webkitURL;
    var blobURL;

    if (URL) {
        $inputImage.change(function() {
            var files = this.files;
            var file;

            if (files && files.length) {
                file = files[0];

                if (/^image\/\w+$/.test(file.type)) {
                    blobURL = URL.createObjectURL(file);
                    $image.one('built.cropper', function() {
                        // Revoke when load complete
                        URL.revokeObjectURL(blobURL);
                    }).cropper('reset').cropper('replace', blobURL);
                    $inputImage.val('');
                } else {
                    window.alert('Please choose an image file.');
                }
            }

        });
    } else {
        $inputImage.prop('disabled', true).parent().addClass('disabled');
    }

    //绑定上传事件
    $('#upImgBtn').on('click', function() {
        var imgSrc = $image.attr("src");
        if (imgSrc == "") {
            alert("没有选择上传的图片");
            return false;
        }
        var url = $(this).attr("url");
        var canvas = $("#image").cropper('getCroppedCanvas');
        var data = canvas.toDataURL();
        $.ajax({
            url: 'up.php',
            dataType: 'json',
            type: "POST",
            data: {
                "image": data.toString()
            },
            success: function(data, textStatus) {
                alert('上传成功')
            },
            error: function() {
                alert('上传失败')
            },
            complete: function(xhr, stat) {}
        });

    });

});

function rotateImg(d) {
    $("#image").cropper('rotate', d);
}