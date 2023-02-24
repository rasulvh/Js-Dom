"use strict";

// Task 2

// let input = document.querySelector("input");
// let button = document.querySelector("button");
// let list = document.querySelector("ul");

// button.addEventListener("click", function () {
//   let value = input.value;

//   if (!!value) {
//     let liValue = document.querySelectorAll("li");

//     let isSame = false;

//     for (const item of liValue) {
//       if (item.innerText == value) {
//         isSame = true;
//         break;
//       }
//     }

//     if (isSame) {
//       alert("This item already exist");
//       input.value = "";
//       return;
//     }

//     let li = document.createElement("li");
//     li.className = "list-group-item my-2";
//     li.innerText = value;
//     li.innerHTML = `${li.innerText} <i class="fa-solid fa-ban float-end"></i>`;
//     list.append(li);
//     input.value = "";

//     let delBtn = document.querySelectorAll(".fa-solid");

//     for (const btn of delBtn) {
//         btn.addEventListener("click", function () {
//         list.removeChild(btn.parentElement);
//       });
//     }
//   } else {
//     alert("Input cannot be empty");
//   }
// });

//Task 3

// let number1 = document.querySelector(".number-1");
// let number2 = document.querySelector(".number-2");

// let addition = document.querySelector(".addition");
// let substraction = document.querySelector(".substraction");
// let multiplication = document.querySelector(".multiplication");
// let division = document.querySelector(".division");

// let result = document.querySelector(".result");
// let deleteResult = document.querySelector(".delete");

// addition.addEventListener("click", function () {
//   result.value = parseInt(number1.value) + parseInt(number2.value);
// });

// substraction.addEventListener("click", function () {
//   result.value = parseInt(number1.value) - parseInt(number2.value);
// });

// multiplication.addEventListener("click", function () {
//   result.value = parseInt(number1.value) * parseInt(number2.value);
// });

// division.addEventListener("click", function () {
//   result.value = parseInt(number1.value) / parseInt(number2.value);
// });

// deleteResult.addEventListener("click", function () {
//   result.value = "";
// });

// Practice

// let c = console.log.bind(console);
// c("Salam aleykum")

// let elems = document.getElementsByTagName("h1")
// for (const elem of elems) {
//     console.log(elem);
// }

// let elem =  document.getElementsByClassName("header")
// console.log(elem[0]);

// let elem =document.querySelector("#product span")

// let text = document.querySelector("#product .item span")

// let thirdSpan = document.querySelector("#product .item span:nth-child(3)")

// let spans = document.querySelectorAll("#product .item span");
// console.log(spans);
// for (const span of spans) {
//     if (span.innerText == "Bye2") {
//         span.style.color = "red";
//     }
// }

// let elem = document.querySelector("h2");

// console.log(elem.innerText);
// elem.innerText = "Hello"
// elem.innerHTML = "<span>Resul</span>"

// elem.style.backgroundColor = "red"

// elem.style.cssText = `
// background-color: red;
// color: blue;
// `;

// let elem = document.querySelector("h1")

// elem.className = "test"

// elem.classList.add("test")
// elem.classList.remove("header")
// console.log(elem.classList.contains("header"));

// let button = document.querySelector("button");
// let h1  = document.querySelector("h1");
// let btnOn = document.querySelector(".on")
// let btnOff = document.querySelector(".off")

// button.onclick = function(){
//     alert("Salam1")
// }

// button.onclick = function(){
//     alert("Salam2")
// }

// button.addEventListener("click", function () {
//     h1.classList.add("h1-design")
// });

// btnOn.addEventListener("click", function () {
//     h1.classList.add("active")
//     if (h1.classList.contains("in-active")) {
//         h1.classList.remove("in-active")
//     }
// })

// btnOff.addEventListener("click", function () {
//     h1.classList.add("in-active")
//     if (h1.classList.contains("active")) {
//         h1.classList.remove("active")
//     }
// })

// let change = document.querySelector("#products .container-edit .change")
// let lamp = document.querySelector("#products .icon i")
// let body = document.querySelector("body")

// change.addEventListener("click", function(){
//     lamp.classList.add("lamp-on")
//     body.classList.add("active-body")
// })

// change.addEventListener("click", function(){
//     if (lamp.classList.contains("lamp-on") && body.classList.contains("active-body")) {
//         lamp.classList.remove("lamp-on")
//         body.classList.remove("active-body")
//     } else {
//         lamp.classList.add("lamp-on")
//         body.classList.add("active-body")
//     }
// })

// lamp.addEventListener("mouseover", function(){
//     if (lamp.classList.contains("lamp-on") && body.classList.contains("active-body")) {
//         lamp.classList.remove("lamp-on")
//         body.classList.remove("active-body")
//     } else {
//         lamp.classList.add("lamp-on")
//         body.classList.add("active-body")
//     }
// })

// lamp.addEventListener("mouseout", function(){
//     if (lamp.classList.contains("lamp-on") && body.classList.contains("active-body")) {
//         lamp.classList.remove("lamp-on")
//         body.classList.remove("active-body")
//     } else {
//         lamp.classList.add("lamp-on")
//         body.classList.add("active-body")
//     }
// })

let input = document.querySelector("input");
let button = document.querySelector("button");
let list = document.querySelector("ul");

button.addEventListener("click", function () {
  let value = input.value;

  if (!!value) {
    let liValue = document.querySelectorAll("li");

    let isSame = false;

    for (const item of liValue) {
      if (item.innerText == value) {
        isSame = true;
        break;
      }
    }

    if (isSame) {
      alert("This item already exist");
      input.value = "";
      return;
    }

    let li = document.createElement("li");
    li.className = "list-group-item my-2";
    li.innerText = value;
    list.append(li);
    input.value = "";
  } else {
    alert("Input cannot be empty");
  }
});