// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\u2b55\u2b55\u2b55" + "Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("\u274c\u274c\u274c" + "Assertion Failed: " + actual + " !== " + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);
assertEqual("test", "test");