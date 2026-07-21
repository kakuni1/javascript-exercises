const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (array) => array.reduce((total, current) => total + current, 0);

const multiply = (array) =>
  array.reduce((product, current) => product * current);

const power = (a, b) => a ** b;

const factorial = (n) => {
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
