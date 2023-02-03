/*
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

function twoSort(s) {
  //first sort
  let sorted = s.sort();
  let firstString = sorted[0];

  let resultArray = [];
  for (el of firstString) {
    //pushes each character into new array
    resultArray.push(el);
  }
  //join with *** in between each character
  return resultArray.join("***");
}

//duh I got turned around, much simpler
function twoSort(s) {
  return s.sort()[0].split("").join("***");
}
