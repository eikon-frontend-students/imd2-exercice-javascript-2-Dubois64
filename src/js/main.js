// var button = document.toggle(".change-color");
// document.querySelector(".get-blue");

// var openMenu = function () {
//   menu.classList.toggle("is-open");
//   button.classList.toggle("is-active");
// };

// button.addEventListener("click", openMenu);

// yellow.classList.add("is-active");

// //tkt...
// console.log("change-color");

// var price = 35;
// console.log(price);

// var firstname = "Nicolas";
// console.log("Bonjour " + firstname);

// function sayHello(firstname, lastname) {
//   console.log("Hello" + firstname + " " + lastname);
// }

// console.log(window.innerHeight);

// console.log(document.querySelector(".change-color"));
// var button = document.querySelector(".change-color");
// var message = document.querySelector(".change-color");

// console.log(button.innerHTML);
// console.log(button.clientHeight);

// function sayGoodbye() {
//   box.innerHTML = "Goodbye !";
//   box.classList.toggle("is-active");
//   box.classList.add("is-visible");
// }

// change - color.addEventListener("mouseenter", sayGoodbye);

// function changeColor() {
//   console.log("Blue");
// }

// changeColor(blue);

var box1 = document.querySelector(".change-color");

function changeColor() {
  box1.classList.add("is-blue");
  // box1.classList.toggle("is-blue");
}

box1.addEventListener("click", changeColor);

// box 2

var box2 = document.querySelector(".toggle-color");

function toggleColor() {
  box2.classList.toggle("is-red");
}

box2.addEventListener("click", toggleColor);

// box 3 et 4

var box3 = document.querySelector(".trigger");
var box4 = document.querySelector(".target");

function target() {
  box4.classList.toggle("is-disapear");
}

box3.addEventListener("click", target);

// box 5

var box5 = document.querySelector(".trigger-all");
var box1 = document.querySelector(".change-color");
var box2 = document.querySelector(".toggle-color");

function changeColor() {
  box1.classList.add("is-blue");
}
box5.addEventListener("click", changeColor);

function toggleColor() {
  box2.classList.toggle("is-red");
}

box5.addEventListener("click", toggleColor);

// box 6

var box6 = document.querySelector(".trigger-all-self");
var box1 = document.querySelector(".change-color");
var box2 = document.querySelector(".toggle-color");

function changeColor() {
  box1.classList.add("is-blue");
}
box6.addEventListener("click", changeColor);

function toggleColor() {
  box2.classList.toggle("is-red");
}

box6.addEventListener("click", toggleColor);

function changeColorGreen() {
  box6.classList.add("is-green");
}

box6.addEventListener("click", changeColorGreen);
