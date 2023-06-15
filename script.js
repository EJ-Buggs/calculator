"use strict";
let current = document.querySelector(".current");
let number = document.querySelectorAll(".number");

number.forEach(function (number) {
  number.addEventListener("click", function () {
    current.textContent += number.textContent;
  });
});
