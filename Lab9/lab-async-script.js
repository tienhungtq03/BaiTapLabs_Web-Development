// Dữ liệu giả định
const mockData = ['Alice', 'Bob', 'Charlie'];

// 1. Hàm Callback
function fetchDataWithCallback(callback) {
    setTimeout(() => {
        console.log("Dữ liệu đã được lấy (sử dụng callback)");
        callback(mockData);
    }, 2000); // Giả lập độ trễ 2 giây
}

// 2. Chuyển đổi sang Promises
function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Dữ liệu đã được lấy (sử dụng promise)");
            resolve(mockData);
            // Để mô phỏng lỗi, bạn có thể dùng reject
            // reject(new Error("Không thể lấy dữ liệu!"));
        }, 2000);
    });
}

// 3. và 4. Async/Await và Xử lý lỗi
document.getElementById('fetch-data').addEventListener('click', async () => {
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = 'Đang tải dữ liệu...';

    try {
        const data = await fetchDataWithPromise();
        console.log("Dữ liệu đã được xử lý (sử dụng async/await)");

        let html = '<ul>';
        data.forEach(item => {
            html += `<li>${item}</li>`;
        });
        html += '</ul>';

        dataContainer.innerHTML = html;
    } catch (error) {
        console.error("Đã xảy ra lỗi:", error);
        dataContainer.innerHTML = 'Không thể tải dữ liệu.';
    }
});