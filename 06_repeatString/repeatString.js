const repeatString = function (string, num) {
  if (num < 0) return "ERROR";
  let str = "",
    strCopy = "";
  for (let i = 0; i < num; i++) {
    str = strCopy.concat(str, string);
  }
  return str;
};

// Do not edit below this line
module.exports = repeatString;
