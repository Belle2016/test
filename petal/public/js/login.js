$(function() {
    $("#btn_login").click(function() {

// 处理表单验证和交给后台处理的逻辑
        var oError = document.getElementById("error_box");
        var name = $("#name").val();
        var pwd = $("#pwd").val();

        var isNotError = true;
        var cookie_name;
        if(name==""){
            oError.innerHTML = "用户名为空 ";
            isNotError = false;
            return;
        }
        if(pwd==""){
            oError.innerHTML = "密码为空 ";
            isNotError = false;
            return;
        }
        else{
            $.ajax({
                type: "POST",
                url: "login",
                dataType: "json",
                data: {"name":name,"pwd":pwd},
                success: function(r){
                    //登录成功
                   // alert(r.result);
                    if(r.result =='true'){
                     //   alert("登录成功");
                        $.cookie("name",name);
                        window.location.href ='./index.html';

                    }else{
                        //alert("登录失败");
                        oError.innerHTML = "登录失败 ";
                        isNotError = false;
                        return;
                    }
                }
            });

        }
    });
});

//判断是否敲击了Enter键
$(document).keyup(function(event){
    if(event.keyCode ==13){
        $("#btn_login").trigger("click");
    }
});