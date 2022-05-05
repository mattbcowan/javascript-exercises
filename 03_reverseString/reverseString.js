const reverseString = function (str) {
  // Split str into individual letters
  str = str.split("");

  // Initialize a variable called newStr
  let newStr = [];

  // For each letter in str starting from
  // the end and moving to the beginning
  // add the individual letters to newStr
  for (let i = str.length - 1; i >= 0; i--) {
    newStr.push(str[i]);
  }

  // Join the letters of newStr together
  newStr = newStr.join("");
  // Return newStr
  return newStr;
};

// Do not edit below this line
module.exports = reverseString;
