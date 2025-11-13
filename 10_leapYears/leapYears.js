const leapYears = function (year) {
  const divFour = year % 4 === 0;
  const divHundred = year % 100 === 0;
  const divFourHundred = year % 400 === 0;

  if (divFour && divHundred && divFourHundred) return true;
  else if (divFour && divHundred) return false;
  else if (divFour) return true;
  else return false;
};

// Do not edit below this line
module.exports = leapYears;
