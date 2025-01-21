var button = document.querySelector(".change-color");
document.querySelector(".get-blue");

var openMenu = function () {
  menu.classList.toggle("is-open");
  button.classList.toggle("is-active");
};

button.addEventListener("click", openMenu);
