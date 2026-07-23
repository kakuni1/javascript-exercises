const totalIntegers = (data, result = []) => {
  if (typeof data !== "object" || data === null) return undefined;

  const array = Array.isArray(data)
    ? Object.values(
        data.flat(Infinity).filter((a) => a !== undefined && a !== null),
      )
    : Object.values(data);

  for (let key in array) {
    if (typeof array[key] === "object" && array[key] !== null) {
      console.log(array[key]);
      totalIntegers(array[key], result);
    }
    if (typeof array[key] !== "string" && Number.isInteger(array[key]) === true)
      result.push(array[key]);
  }
  return result.length;
};

// Do not edit below this line
module.exports = totalIntegers;
