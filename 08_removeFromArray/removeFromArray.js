const removeFromArray = function (array, ...num) {
  for (let i = 0; i < num.length; i++) {
    tempArray = array.filter((number) => number !== num[i]);
    array = tempArray;
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
