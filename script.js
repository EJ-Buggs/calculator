"use strict";
let current = document.querySelector(".current");
let previous = document.querySelector(".previous");
let number = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let op = "";
let c = "";
let p = "";

const clear = function () {
  c = 0;
  p = 0;
  current.textContent = "";
  previous.textContent = "";
};

document.querySelector(".clear").addEventListener("click", clear);

number.forEach(function (number) {
  number.addEventListener("click", function () {
    current.textContent += number.textContent;
  });
});

const operate = function () {
  previous.textContent = current.textContent;
  current.textContent = "";
  op = this.textContent;
};

operators.forEach(function (operators) {
  operators.addEventListener("click", operate);
});

const equals = function () {
  c = Number(current.textContent);
  p = Number(previous.textContent);
  if (op == "+") {
    p += c;
  } else if (op == "-") {
    p -= c;
  } else if (op == "x") {
    p *= c;
  } else if (op == "/") {
    p /= c;
  }

  current.textContent = p;
  previous.textContent = "";
};

document.querySelector(".equals").addEventListener("click", equals);
