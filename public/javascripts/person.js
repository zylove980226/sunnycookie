function handleFiles(obj,id) {
    file = document.getElementById("icon");
    var files = obj.files;
    img = new Image();
    if(window.URL){
        //File API 用以提供用户上传文件的信息，并允许网页中的 JavaScript 访问其内容
        img.src = window.URL.createObjectURL(files[0]); //创建一个object URL
        //一旦已经访问到了,这个对象URL就不再需要了,就被释放掉,被释放掉以后,这个对象URL就不再指向指定的文件了
            img.onload = function(e) {
            window.URL.revokeObjectURL(this.src); //图片加载后，释放object URL
        }
    }
    file.src=img.src;
    //上传文件
    var fd = new FormData(),//实例化一个表单
        //XMLHttpRequest 对象用于在后台与服务器交换数据
        //XMLHttpRequest 可以在不重新加载整个网页的情况下，对网页的某部分进行更新
        xhr = new XMLHttpRequest();
    //FormData：form中所有表单元素的name与value组装成一个queryString,异步上传二进制文件
    fd.append('headimg', files[0]);//追加图片元素
    xhr.open('post', 'user.php?act=act_edit_img');//请求方式，请求地址
    xhr.send(fd);
}