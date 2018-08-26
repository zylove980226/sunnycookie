//表单
function $(elementId) {
    return document.getElementById(elementId).value;
}
function divId(elementId) {
    return document.getElementById(elementId);
}
//用户名验证
function checkUser() {
    var user = $("user");
    var userId = divId("user_prompt");
    userId.innerHTML = "";
    var reg = /^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
    if (!reg.test(user)) {
        userId.innerHTML = "用户名是4-16位由字母开头，数字及下划线的组合";
        return false;
    }
    return true;
}
//密码验证
function checkPwd() {
    var pwd = $("pwd");
    var pwdId = divId("pwd_prompt");
    pwdId.innerHTML = "";
    var reg = /^[a-zA-Z0-9]{4,10}$/;
    if (!reg.test(pwd)) {
        pwdId.innerHTML = "密码不能含有非法字符，长度在4-10之间";
        return false;
    }
    return true;
}

function checkRepwd() {
    var repwd = $("repwd");
    var pwd = $("pwd");
    var repwdId = divId("repwd_prompt");
    repwdId.innerHTML = "";
    if (pwd != repwd) {
        repwdId.innerHTML = "两次输入的密码不一致";
        return false;
    }
    return true;
}

//邮箱验证
function checkEmail() {
    var email = $("email");
    var email_prompt = divId("email_prompt");
    email_prompt.innerHTML = "";
    var reg = /^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;
    if (!reg.test(email)) {
        email_prompt.innerHTML = "Email格式不正确，例如web@sohu.com";
        return false;
    }
    return true;
}