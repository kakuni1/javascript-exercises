const contains = (data, input) => {
  if (data === input || (Number.isNaN(input) && Number.isNaN(data)))
    return true;
  if (typeof data === "object" && data !== null)
    for (let key in data) {
      const result = contains(data[key], input);
      if (result) return true;
    }
  return false;
};

// Do not edit below this line
module.exports = contains;
