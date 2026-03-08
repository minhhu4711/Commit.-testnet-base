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
