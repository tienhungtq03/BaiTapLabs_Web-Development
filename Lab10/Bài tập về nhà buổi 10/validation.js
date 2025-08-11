/* write functions that defines the action for each event */

function validateForm() {
    var message = document.getElementById("message").value;
    var sid = document.getElementById("sid").value;

    var errMsg = ""; // Biến để lưu trữ thông báo lỗi
    var result = true; // Giả định không có lỗi

    /* Quy tắc 1: Kiểm tra tất cả các trường nhập liệu không được để trống */
    if (message == "") {
        errMsg += "Message cannot be empty.\n";
    }
    if (sid == "") {
        errMsg += "Student ID cannot be empty.\n";
    }

    /* Quy tắc 2: Kiểm tra Student ID phải bắt đầu bằng chữ 's' */
    if (sid != "" && sid.charAt(0) !== 's') { // Chỉ kiểm tra nếu Student ID không rỗng
        errMsg += "Student ID must start with 's'.\n";
    }

    /* Hiển thị thông báo lỗi nếu có bất kỳ lỗi nào được phát hiện */
    if (errMsg != "") {
        // Thay vì alert(), chúng ta sẽ dùng một modal đơn giản hoặc hiển thị trên trang.
        // Tuy nhiên, theo yêu cầu của lab, bạn có thể sử dụng alert() nếu chưa học modal.
        // Nếu bạn muốn nâng cao, hãy sử dụng một div hiển thị lỗi trên trang.
        alert(errMsg); // Sử dụng alert theo hướng dẫn lab
        result = false; // Đặt kết quả xác thực là false nếu có lỗi
    }

    return result; // Trả về kết quả xác thực
}

/* link HTML elements to corresponding event function */
function init() {
    /* link the variables to the HTML elements */
    var msgForm = document.getElementById("msgform");

    /* assigns functions to corresponding events */
    // Gắn hàm validateForm vào sự kiện onsubmit của form
    msgForm.onsubmit = validateForm;
}

/* execute the initialisation function once the window*/
window.onload = init;