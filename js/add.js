$(document).ready(function() {
    // Lấy danh sách sản phẩm từ LocalStorage
    let products = JSON.parse(localStorage.getItem("products")) || [];

    // Lặp qua từng sản phẩm trong danh sách
    products.forEach(function(product, index) {
        // Tạo một hàng mới trong bảng
        let newRow = "<tr>" +
                        "<td>" + product.title + "</td>" +
                        "<td>" + product.price + "</td>" +
                    "</tr>";

        // Thêm hàng mới vào bảng
        $("#tableDS").append(newRow);
    });
});
