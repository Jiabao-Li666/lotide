const eqArrays = function(arr1, arr2) {
  var result = true;

  if (arr1.length === arr2.length) {
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        result = false;
      }
    }
  } else {
    result = false;
  }

  return result;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`\u2b55\u2b55\u2b55 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274c\u274c\u274c Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ACTUAL FUNCTION
const middle = function(array) {
  var result = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      result[0] = array[array.length/2 - 1];
      result[1] = array[array.length/2];
    } else {
      result[0] = array[Math.floor(array.length/2)];
    }
  }

  return result;
}

// TEST CODE
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
