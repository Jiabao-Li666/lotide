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

module.exports = eqObjects;