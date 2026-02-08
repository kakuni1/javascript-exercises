const palindromes = function (inputString) {
  let reverseString = "";
  cleanString = inputString.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  for (n = cleanString.length - 1; n >= 0; n--)
    reverseString = reverseString.concat(cleanString[n]);
  return cleanString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
