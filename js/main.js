$(document).ready(function () {
    $("#shopping").click(function() {
        // Chuyển hướng trình duyệt đến trang "shopping.html"
        window.location.href = "../html/shopping.html";
    });
    $("#login").click(function() {
        window.location.href = "../html/login.html";
    }) ;

    // Lấy dữ liệu từ localStorage
    let status = localStorage.getItem("status");
    let userInfo = localStorage.getItem("userInfo");

    // Kiểm tra xem dữ liệu đã tồn tại trong localStorage hay chưa
    if(status == 'true' && userInfo) {
        // Chuyển chuỗi JSON thành object
        userInfo = JSON.parse(userInfo);
        
        // Lấy thông tin người dùng từ object
        let name = userInfo.name;

        // Hiển thị tên người dùng trong phần tử có id là "textView"
        $("#textView").html(name);

        $("#login").click(function() {
            window.location.href = "profile.html";
        });
    } 
});