const sumAll = function (a, b) {
  // a=2, b=4
  let add = 0;

  if (Number.isInteger(a) && a > 0 && Number.isInteger(b) && b > 0) {
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
      add += i;
    }
    return add;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
