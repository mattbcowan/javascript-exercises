const sumAll = function (start, end) {
  // Check if start and end are positive ints
  if (
    typeof start !== "number" ||
    typeof end !== "number" ||
    start < 0 ||
    end < 0
  ) {
    return "ERROR";
  }
  // Initialize a variable named sum
  let sum = 0;
  // Loop from start to end and add to sum
  if (start < end) {
    for (let i = start; i <= end; i++) {
      sum += i;
    }
  } else {
    for (let i = end; i <= start; i++) {
      sum += i;
    }
  }
  // return sum
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
