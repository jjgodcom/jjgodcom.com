// header search animation
const searchEl = document.querySelector(".search");
const serchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  serchInputEl.focus();
});
// 서치에 포커스 되었을때
serchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  serchInputEl.setAttribute("placeholder", "통합검색");
});
// 서치에 포커스가 끝날때
serchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  serchInputEl.setAttribute("placeholder", "");
});