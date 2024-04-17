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

    function checkAddress() {
        let address = $("#address").val();
        if(address == "") {
            $("#errAddress").html("Địa chỉ không được để rỗng");
            return false;
        } else {
            $("#errAddress").html("(*)");
            return true;
        }
    };
    $("#address").blur(function(e) {
        checkAddress();
    });

    function checkPhone() {
        let phone = $("#phone").val();
        if(phone == "") {
            $("#errPhone").html("Số điện thoại không được để rỗng");
            return false;
        } else {
            $("#errPhone").html("(*)");
            return true;
        }
    };
    $("#phone").blur(function(e) {
        checkPhone();
    });

    function checkName() {
        let name = $("#hoTen").val();
        if(name == "") {
            $("#errHoTen").html("Họ và tên thoại không được để rỗng");
            return false;
        } else {
            $("#errHoten").html("(*)");
            return true;
        }
    };
    $("#hoTen").blur(function(e) {
        checkName();
    });

    $("#btnLogin").click(function(e) {
        if(checkEmail() && checkPass() && checkName() && checkAddress() && checkPhone()) {
            let name = $("#hoTen").val();
            let email = $("#email").val();
            let pass = $("#password").val();
            let address = $("#address").val();
            let phone = $("#phone").val();
            //thực hiện tạo user để lưu vào localStorage
            let user = {
                name: name,
                email: email,
                password: pass,
                address: address,
                phone: phone
            }
            //Lưu vào localStorage
            localStorage.setItem("userInfo", JSON.stringify(user));
            //Chuyển hướng đến trang home
            window.location.href = "login.html";
        } else {
            alert("Thông tin không hợp lệ");
        }
    });
});