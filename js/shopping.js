$(document).ready(function() {
    // Thêm sự kiện click cho phần tử có class "thanhtoan"
    $(".thanhtoan").click(function() {
        // Sử dụng modal('hide') để đóng modal
        $("#modalDK").modal('hide');
    });

    $(".thanhtoan").click(function() {
        $("#modalSparta").modal('hide');
    });

    $(".thanhtoan").click(function() {
        $("#modalAima").modal('hide');
    });

    $(".thanhtoan").click(function() {
        $("#modalHonda").modal('hide');
    });

    $(".buy").click(function() {
        // Lấy thông tin của card tương ứng
        let card = $(this).closest('.card');
        let title = card.find('.card-title').text();
        let price = card.find('.text-danger').text();
    
        // Tạo đối tượng chứa thông tin sản phẩm
        let product = {
            title: title,
            price: price
        };
    
        // Lấy danh sách sản phẩm từ LocalStorage (nếu đã có)
        let products = JSON.parse(localStorage.getItem("products")) || [];
    
        // Thêm sản phẩm mới vào danh sách
        products.push(product);
    
        // Lưu danh sách sản phẩm mới vào LocalStorage
        localStorage.setItem("products", JSON.stringify(products));
    
        // Hiển thị thông tin sản phẩm đã được lưu
        console.log("Sản phẩm đã được thêm vào danh sách:");
        console.log(product);
    });
});