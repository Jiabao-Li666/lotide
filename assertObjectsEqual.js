const eqObjects = function(object1, object2) {
  var result = true;
  var keys1 = Object.keys(object1);
  var keys2 = Object.keys(object2);

  if (keys1.length === keys2.length) {
    for (var key of keys1) {
      if (typeof object1[key] === "object") {
        result = eqObjects(object1[key], object2[key]);
      } else {
        if (object1[key] !== object2[key]) {
          result = false;
        }
      }
    }
  } else {
    result = false;
  }

  return result;
};

// actual function
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected) === true) {
    console.log(`\u2b55\u2b55\u2b55 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`\u274c\u274c\u274c Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// test
const o1 = { a: '1', b: 2 };
const o2 = { b: 2, a: '1' };
const o3 = { a: '1', b: 2, c: 3};
const o4 = { a: '1', c: 2 };

assertObjectsEqual(o1, o2);
assertObjectsEqual(o1, o3);
assertObjectsEqual(o1, o4);
assertObjectsEqual(o2, o4);