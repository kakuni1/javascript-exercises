const add = function (a, b) {
  return (n = a + b);
};

const subtract = function (a, b) {
  return (n = a - b);
};

const sum = function (n) {
  return n.reduce((a, b) => a + b, 0);
};

const multiply = function (n) {
  return n.reduce((a, b) => a * b, 1);
};

const power = function (a, b) {
  return (n = a ** b);
};

const factorial = function (n) {
  if (n === 0 || n === 1) return 1;
  for (let i = n - 1; i >= 1; i--) {
    n *= i;
  }
  return n;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
