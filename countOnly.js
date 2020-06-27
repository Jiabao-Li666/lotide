// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  var result = {};

  for (var items of allItems) {
    if (itemsToCount[items]) {
      if (result.hasOwnProperty(items)) {
        result[items] = result[items] + 1;
      } else {
        result[items] = 1;
      }
    }
  }

  return result;
}

module.exports = countOnly;