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

assertArraysEqual([1, 3, 3], [1, 3, 3]);
assertArraysEqual([1, 3, 2], [1, 3, 3]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);