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

var box2 = document.querySelector(".change-color");
console.log;

function ChangeColor() {
  box2.classList.toggle("is-red-orange");
}

box2.addEventListener("click", changeColor);
