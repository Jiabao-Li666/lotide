const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2b55\u2b55\u2b55 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274c\u274c\u274c Assertion Failed: ${actual} !== ${expected}`);
  }
};

// actual function
const countLetters = function(ourString) {
  var result = {};

  for (character of ourString) {
    if (result[character]) {
      result[character] += 1;
    } else {
      result[character] = 1;
    }
  }

  return result;
};

// test
var test1 = countLetters('LHL');
assertEqual(test1['L'], 2);
assertEqual(test1['H'], 1);

var test2 = countLetters("lighthouse in the house");
assertEqual(test2['l'], 1);
assertEqual(test2['i'], 2);
assertEqual(test2['g'], 1);
assertEqual(test2['h'], 4);
assertEqual(test2['t'], 2);
assertEqual(test2['o'], 2);
assertEqual(test2['u'], 2);
assertEqual(test2['s'], 2);
assertEqual(test2['e'], 3);
assertEqual(test2['n'], 1);

module.exports = countLetters;