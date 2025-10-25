const reverseString = function (text) {
  let reverseText = "";
  for (let i = text.length - 1; i >= 0; i--) {
    tempChar = text.charAt(i);
    reverseText += tempChar;
  }
  return reverseText;
};

// Do not edit below this line
module.exports = reverseString;
