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
