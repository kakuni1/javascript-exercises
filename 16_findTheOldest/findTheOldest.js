const getAge = function (birthYear, deathYear) {
  if (!deathYear) deathYear = new Date().getFullYear();
  return deathYear - birthYear;
};

const findTheOldest = function (people) {
  return people.reduce((oldestPerson, currentPerson) => {
    const oldestAge = getAge(
      oldestPerson.yearOfBirth,
      oldestPerson.yearOfDeath,
    );
    const currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath,
    );
    console.log(oldestAge);
    return oldestAge < currentAge ? currentPerson : oldestPerson;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
