$(document).ready(function () {
    $("#gioiThieuContent").collapse('show');
    $(".card1").click(function (){
        window.location.href = "../html/card1.html";
    });

    $(".card2").click(function (){
        window.location.href = "../html/card2.html";
    });

    $(".card3").click(function (){
        window.location.href = "../html/card3.html";
    });

    $(".card4").click(function (){
        window.location.href = "../html/card4.html";
    });

    /////////////////////////////////////////////////////////////////////
    // Khi nút "Giới thiệu" được click
    $("#gioiThieuBtn").click(function() {
        // Ẩn nội dung đánh giá
        $("#danhGiaContent").collapse('hide');
        // Hiển thị nội dung giới thiệu
        $("#gioiThieuContent").collapse('show');
    });

    // Khi nút "Đánh giá" được click
    $("#danhGiaBtn").click(function() {
        // Ẩn nội dung giới thiệu
        $("#gioiThieuContent").collapse('hide');
        // Hiển thị nội dung đánh giá
        $("#danhGiaContent").collapse('show');
    });
});