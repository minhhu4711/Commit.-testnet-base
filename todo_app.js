function addTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("Đã thêm nhiệm vụ: " + task);
}

function showTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    console.log("Danh sách công việc:", tasks);
}
// addTask("Học GitHub");
// showTasks();
// Hàm dùng để thêm một nhiệm vụ mới vào danh sách
function addTask(task) {
    // 1. Lấy danh sách nhiệm vụ cũ từ LocalStorage. 
    // Vì LocalStorage chỉ lưu chuỗi (string), nên dùng JSON.parse để chuyển nó lại thành mảng (array).
    // Nếu chưa có dữ liệu (lần đầu chạy), sẽ mặc định lấy một mảng rỗng [].
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
// 2. Thêm nhiệm vụ mới (biến task) vào cuối mảng tasks
    tasks.push(task);

    // 3. Lưu mảng tasks đã cập nhật ngược lại vào LocalStorage.
    // Dùng JSON.stringify để chuyển mảng thành chuỗi văn bản thì LocalStorage mới lưu được.
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // 4. Thông báo ra console để kiểm tra
    console.log("Đã thêm nhiệm vụ: " + task);
}
// Hàm dùng để hiển thị danh sách nhiệm vụ đã lưu
function showTasks() {
    // 1. Lấy dữ liệu từ LocalStorage và chuyển về dạng mảng
    let tasks = JSON.parse(localStorage.getItem("tasks"));

    // 2. In danh sách nhiệm vụ ra màn hình console của trình duyệt
    console.log("Danh sách công việc:", tasks);
}

