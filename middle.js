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

module.exports = middle;