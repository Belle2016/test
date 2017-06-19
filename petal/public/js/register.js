$(function() {
    $("#btn_register").click(function() {
// 处理表单验证和交给后台处理的逻辑
        var oError = $("#error_box");
        var name = $("#r_name").val();
        var pwd = $("#r_pwd").val();
        var pwd2 = $("#r_pwd2").val();
        var isNotError = true;
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
        if(pwd!=pwd2){
            oError.innerHTML = "密码不一致";
            isNotError = false;
        }
        else {
            $.ajax({
                type: "POST",
                url: "register",
                dataType: "json",
                data: {"name":name,"pwd":pwd},
                success: function(r){
                    //注册成功
                    if(r.result == 'true'){
                        window.location.href ='./login.html';
                    }else{
                        oError.innerHTML = "注册失败 ";
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
        $("#btn_register").trigger("click");
    }
});  