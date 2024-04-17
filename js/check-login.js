$(document).ready(function () {
    function checkEmail() {
        let email = $("#email").val();
        let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
        if (email == "") {
            $("#errEmail").html("Email không được để rỗng");
            return false;
        } else if(regex.test(email)) {
            $("#errEmail").html("(*)");
            return true;
        } else {
            $("#errEmail").html("Email không đúng định dạng");
            return false;
        }
    };
    $("#email").blur(function(e) {
        checkEmail();
    });

    function checkPass() {
        let pass = $("#password").val();
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[0-9])[a-zA-Z0-9\d]{8,}$/;
        if(pass == "") {
            $("#errPass").html("Password không được để rỗng");
            return false;
        } else if(regex.test(pass)) {
            $("#errPass").html("(*)");
            return true;
        } else {
            $("#errPass").html("Password không đúng định dạng");
            return false;
        }
    };
    $("#password").blur(function(e) {
        checkPass();
    });

    $("#btnLogin").click(function(e) {
        if(checkEmail() && checkPass()) {
            let logEmail = $("#email").val();
            let logPass = $("#password").val();
            // Kiểm tra xem có thông tin người dùng trong localStorage hay không
            let userInfo = localStorage.getItem("userInfo");

            // Kiểm tra nếu có thông tin người dùng
            if (userInfo) {
                // Chuyển chuỗi JSON thành object
                userInfo = JSON.parse(userInfo);

                // Lấy thông tin người dùng từ object
                let email = userInfo.email;
                let password = userInfo.password;

                if(logEmail == email && logPass == password) {
                    let status = localStorage.setItem('status', JSON.stringify(true));
                    window.location.href = "../index.html";
                }
            } else {
                alert("Không có thông tin người dùng");
            }
        } else {
            alert("Thông tin không hợp lệ");
        }
    });
});