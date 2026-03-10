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
