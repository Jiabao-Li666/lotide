const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2b55\u2b55\u2b55 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274c\u274c\u274c Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

// test
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);