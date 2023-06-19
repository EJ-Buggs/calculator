"use strict";
let current = document.querySelector(".current");
let previous = document.querySelector(".previous");
let number = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let del = document.querySelector(".delete");
let op = "";
let op2 = "";
let c = "";
let p = "";
let thing = true;

const backspace = function () {
  current.textContent = current.textContent.slice(0, -1);
};

del.addEventListener("click", backspace);

const clear = function () {
  c = 0;
  p = 0;
  thing = true;
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
  op = this.textContent;
  previous.textContent == "" ? (op2 = op) : null;
  if (op2 !== op) {
    c = Number(current.textContent);
    calculate();
    previous.textContent = `${p}${op}`;
    current.textContent = "";
    op2 = op;
    return;
  }
  if (thing == true) {
    c = Number(current.textContent);
    p == 0 ? (p = Number(current.textContent)) : calculate();
  } else {
    previous.textContent = current.textContent + `${op}`;
    current.textContent = "";
    thing = true;
    return;
  }
  previous.textContent = `${p} ${op}`;
  current.textContent = "";
};

operators.forEach(function (operators) {
  operators.addEventListener("click", operate);
});

const calculate = function () {
  if (op2 == "+") {
    p += c;
  } else if (op2 == "-") {
    p -= c;
  } else if (op2 == "x") {
    p *= c;
  } else if (op2 == "/") {
    p /= c;
  }
  current.textContent = p;
};

const equals = function () {
  if (thing == true) {
    c = Number(current.textContent);
    thing = false;
  }
  previous.textContent = `${p} ${op} ${c} =`;
  calculate();
};

document.querySelector(".equals").addEventListener("click", equals);
