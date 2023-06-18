"use strict";
let current = document.querySelector(".current");
let previous = document.querySelector(".previous");
let number = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let op = "";
let c = "";
let p = "";
let thing = true;

const clear = function () {
  c = 0;
  p = 0;
  current.textContent = "0";
  previous.textContent = "";
};

document.querySelector(".clear").addEventListener("click", clear);

number.forEach(function (number) {
  number.addEventListener("click", function () {
    current.textContent == "0" ? (current.textContent = "") : null;
    current.textContent += number.textContent;
  });
});

const operate = function () {
  console.log(p, c);
  op = this.textContent;
  thing == true ? (c = Number(current.textContent)) : (thing = true);
  previous.textContent += current.textContent + op;
  p == 0 ? (p = Number(current.textContent)) : calculate();
  current.textContent = "";
};

operators.forEach(function (operators) {
  operators.addEventListener("click", operate);
});

const calculate = function () {
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
};

const equals = function () {
  if (thing == true) {
    c = Number(current.textContent);
    previous.textContent += current.textContent + " =";
  }
  thing = false;
  calculate();
  previous.textContent = `${p} + ${c} =`;
  console.log(p, c);
};

document.querySelector(".equals").addEventListener("click", equals);
