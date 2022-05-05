const removeFromArray = function (arr) {
  // Initialize a new array named response
  let response = [];

  // Initialize a new array called options
  // Add all additional arguments to options
  let options = Object.values(arguments).slice(1);

  // Loop over original array and check each
  // value against the values in options.
  for (let i = 0; i < arr.length; i++) {
    // If the current value is not in options
    // add it to response
    if (!options.includes(arr[i])) {
      response.push(arr[i]);
    }
  }

  // return response
  return response;
};

// Do not edit below this line
module.exports = removeFromArray;
