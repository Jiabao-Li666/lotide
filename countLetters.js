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

module.exports = countLetters;