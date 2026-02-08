const fibonacci = function (n) {
  array = [1, 1];

  if (typeof n === "string") n = parseInt(n);

  switch (true) {
    case n === 0:
      return 0;
    case n < 0:
      return "OOPS";
    default:
      for (i = 0; i < n - 2; i++) {
        array.push(array[i] + array[i + 1]);
      }

      return array[n - 1];
  }
};

// Do not edit below this line
module.exports = fibonacci;
