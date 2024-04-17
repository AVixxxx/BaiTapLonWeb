$(document).ready(function () {
    $("#checkOut").click(function() {
        // Gán giá trị "false" cho key "status" trong localStorage
        localStorage.setItem('status', JSON.stringify(false));
        // Chuyển hướng trình duyệt đến trang "homePage.html"
        window.location.href = "index.html";
        localStorage.setItem('products', JSON.stringify(''));
    });

    // Lấy thông tin người dùng từ localStorage
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));

    // Hiển thị thông tin người dùng trong các phần tử HTML
    $("#username").html(userInfo.name);
    $("#email").html(userInfo.email);
    $("#address").html(userInfo.address);
    $("#phone").html(userInfo.phone);
});