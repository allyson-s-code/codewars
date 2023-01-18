/*
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.
*/

function smallEnough(a, limit) {
  //create new array with elements from a that do not meet limit
  const filtered = a.filter(withinLimit);

  function withinLimit(element) {
    return element > limit;
  }

  //if there are any elements that are greater than limit return false
  if (filtered.length >= 1) {
    return false;
  } else {
    return true;
  }
}

//this is a good one! Just check the highest number
function smallEnough(a, limit) {
  return Math.max(...a) <= limit;
}

//simply put
function smallEnough(array, limit) {
  return array.filter((value) => value > limit).length > 0 ? false : true;
}
