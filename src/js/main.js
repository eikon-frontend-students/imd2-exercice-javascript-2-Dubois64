var button = document.toggle(".change-color");
document.querySelector(".get-blue");

var openMenu = function () {
  menu.classList.toggle("is-open");
  button.classList.toggle("is-active");
};

button.addEventListener("click", openMenu);

yellow.classList.add("is-active");

//tkt...
console.log("change-color");

var price = 35;
console.log(price);

var firstname = "Nicolas";
console.log("Bonjour " + firstname);

function sayHello(firstname, lastname) {
  console.log("Hello" + firstname + " " + lastname);
}

console.log(window.innerHeight);

console.log(document.querySelector(".change-color"));
var button = document.querySelector(".change-color");
var message = document.querySelector(".change-color");

console.log(button.innerHTML);
console.log(button.clientHeight);

function sayGoodbye() {
  box.innerHTML = "Goodbye !";
  box.classList.toggle("is-active");
  box.classList.add("is-visible");
}

change - color.addEventListener("mouseenter", sayGoodbye);

function changeColor() {
  console.log("Blue");
}

changeColor(blue);
