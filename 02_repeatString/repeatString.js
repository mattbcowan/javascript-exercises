const repeatString = function (string, num) {
  // If num = 0 return ''
  if (num === 0) return "";
  // If num < 0 return ERROR
  if (num < 0) return "ERROR";
  // Make a variable called result and set it to ''
  let result = "";
  // Make a for loop and loop for the duration of num
  for (let i = 0; i < num; i++) {
    // Inside the for loop add string to result
    result = result + string;
  }
  // Once the loop is done return the result
  return result;
};

// Do not edit below this line
module.exports = repeatString;
