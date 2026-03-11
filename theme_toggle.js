const btn = document.querySelector(".btn-toggle");
btn.addEventListener("click", function() {
  document.body.classList.toggle("dark-theme");
  let theme = "light";
  if (document.body.classList.contains("dark-theme")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
});
// 1. Chọn phần tử nút bấm có class là "btn-toggle" từ HTML
const btn = document.querySelector(".btn-toggle");
// 2. Lắng nghe sự kiện "click" trên nút bấm đó
btn.addEventListener("click", function() {
// 3. Toggle (bật/tắt) class "dark-theme" trên thẻ <body>
  // Nếu chưa có class này thì nó sẽ thêm vào, nếu có rồi thì nó sẽ xóa đi
  document.body.classList.toggle("dark-theme");
// 4. Mặc định khởi tạo biến theme là "light" (chế độ sáng)
  let theme = "light";
// 5. Kiểm tra xem thẻ <body> hiện tại có chứa class "dark-theme" hay không
  if (document.body.classList.contains("dark-theme")) {
    // Nếu có, nghĩa là người dùng vừa bật chế độ tối, đổi giá trị biến thành "dark"
    theme = "dark";
  }

