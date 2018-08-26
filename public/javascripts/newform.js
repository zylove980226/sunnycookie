!function(){
    var checkAccountExist = false;
    function submit(){
        console.log("表单验证成功，准备提交");
    }
    newFormCheck($(".sign-up")[0], checkAccountExist, submit);
}();

function checkAccountExist(failCallback, successCallback){
    var input = this;
    util.ajax("/register/hasUser", {account: this.value}, function(data){
        if(data.isUser === true){
            failCallback();
        }
        else{
            successCallback();
        }
    });
}

function checkPwdIdentity(){
    if(this.form["password"].value !== this.form["confirm-pwd"].value){
        return false;
    }
    return true;
}

function newFormCheck(form, checkAccountExist, submitHandler){
    var checkRule = {
        "confirm-pwd": {
            check: checkPwdIdentity,
            msg: "两次密码输入不一致"
        }
    };
    if(checkAccountExist){
        checkRule.account = {
            check: checkAccountExist,
            msg: "账户已存在!",
            async: true
        };
    }
    if(checkAccountExist){
        checkRule.account = {
            check: checkAccountExist,
            msg: "账号已存在",
            async: true
        };
    }
    return new Form(form, {
        errorMsgClass: "error",         //错误提示框的类，用于自定义样式
        errorInputClass: "invalid",     //input无效的类名，用于自定义样式
        rule: checkRule,
        lang: "cn",
        disableBrowserMsg: !(navigator.language || navigator.userLanguage).match(/cn/i)
    }, submitHandler);
}