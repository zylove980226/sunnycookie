$(function () {
   $('#signUp').click(function () {
       $('#loginForm').hide();
       $('#registerForm').show();
       $('.footBottom:eq(0)').hide();
       $(this).addClass('bottomColor');
       $('#login').addClass('clearBottom');
   });
   $('#login').click(function () {
       $('#registerForm').hide();
       $('#loginForm').show();
       $('.footBottom:eq(0)').show();
       $(this).addClass('bottomColor');
       $('#signUp').addClass('clearBottom');
   });
   var value = "<%= JSON.stringify(isRegister) %>";
   $('#isRegister').val(value);
   if ($('#isRegister').val(0)){
       $('#registerForm').hide();
       $('#loginForm').show();
       $('.footBottom:eq(0)').show();
       $(this).addClass('bottomColor');
       $('#signUp').addClass('clearBottom');
       $('.wrapper').addClass('wrapper_new');
       $('.formBox').addClass('form_new');
   }
   else if ($('#isRegister').val(1)) {
       $('#loginForm').hide();
       $('#registerForm').show();
       $('.footBottom:eq(0)').hide();
       $(this).addClass('bottomColor');
       $('#login').addClass('clearBottom');
   }

    //账户名字验证
    function zhanghao_yz() {
        var reg = /^[A-Za-z]\w+$/; //正则表达式 必须以字母开头的账号
        if($("#account").val().search(reg) == -1) {
            $("#account").next().removeClass("trueTip");
            $("#account").next().addClass("wrongTip");
            $("#account").next().html("*必须以字母开头,可以包含数字字母下划线");
            return false;
        } else {
            $("#account").next().removeClass("wrongTip");
            $("#account").next().addClass("trueTip");
            $("#account").next().html("√账号格式输入正确");
            return true;
        }
        return true;
    }
    //邮箱验证
    function email_check() {
        var reg = /^\w+@\w+(\.\w+){1,2}$/; //因为邮箱 xxx @ xxx . xxx     xxx 可以是 数字字母下划线 结束 可以 是 .com 或者 .com.cn
        if ($("#emailId").val().search(reg) == -1) {
            $("#emailId").next().removeClass("trueTip");
            $("#emailId").next().addClass("wrongTip");
            $("#emailId").next().html("*邮箱格式不正确 xxx @ xxx . xxx");
            return false;
        } else {
            $("#emailId").next().removeClass("wrongTip");
            $("#emailId").next().addClass("trueTip");
            $("#emailId").next().html("√邮箱验证成功");
            return true;
        }
        return true;
    }
    //密码验证  让其只能是 6位 纯数字的密码
    function password_check() {
        var reg = /^\d{6,9}$/; //正则表达式 必须以数字开头和结尾  6-9位
        if ($("#passwordId").val().search(reg) == -1) {
            $("#passwordId").next().removeClass("trueTip");
            $("#passwordId").next().addClass("wrongTip");
            $("#passwordId").next().html("*密码只能是6-9位数字");
            return false;
        } else {
            $("#passwordId").next().removeClass("wrongTip");
            $("#passwordId").next().addClass("trueTip");
            $("#passwordId").next().html("√密码验证成功");
            return true;
        }
        return true;
    }
    function password_check2() {
        var reg = /^\d{6,9}$/;
        if ($("#passwordId2").val().search(reg) == -1) {
            $("#passwordId2").next().removeClass("trueTip");
            $("#passwordId2").next().addClass("wrongTip");
            $("#passwordId2").next().html("*密码只能是6-9位数字");
            return false;
        } else {
            if ($("#passwordId").val() !== $("#passwordId2").val()) {
                $("#passwordId2").next().removeClass("trueTip");
                $("#passwordId2").next().addClass("wrongTip");
                $("#passwordId2").next().html("*两次输入的密码不相同");
                return false;
            } else {
                $("#passwordId2").next().removeClass("wrongTip");
                $("#passwordId2").next().addClass("trueTip");
                $("#passwordId2").next().html("√密码确认成功");
                return true;
            }
        }
        return true;
    }
    $("#account").blur(zhanghao_yz);
    $("#passwordId").blur(password_check);
    $("#passwordId2").blur(password_check2);
    $("#emailId").blur(email_check);

    function tijiao() {
        if ($("#account").val() == "" || $("#passwordId").val() == "" || $("#name_shengao").val() == "" || $("#emailId").val() == "" || $("#mobile").val() == "" || $("#wangzhan").val() == "") {
            return false;
        }
        if (!(zhanghao_yz() && password_check() && password_check2() && email_check())) { //只要有其中一项 返回值是 false 就会 进入 这个 语句
            return false;
        } else {
            return true;
        }
        return true;
    }
    $("#registerForm").submit(function() {
        return tijiao();
    });
})