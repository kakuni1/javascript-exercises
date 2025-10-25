const repeatString = function (string, num) {
  let str = "",
    strCopy = "";
  for (let i = 0; i < num; i++) {
    str = strCopy.concat(str, string);
  }
  if (num >= 0) {
    return str;
  } else {
    return (str = "ERROR");
  }
};

// Do not edit below this line
module.exports = repeatString;
