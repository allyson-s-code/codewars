/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique
*/

function findUniq(arr) {
  //sort array so that the unique number is either at beginning or end
  arr = arr.sort((a, b) => a - b);
  if (arr[0] === arr[1]) {
    return arr[arr.length - 1];
  }
  if (arr[0] !== arr[1]) {
    return arr[0];
  }
}

//slightly simplified
function findUniq(arr) {
  //sort array so that the unique number is either at beginning or end
  arr = arr.sort((a, b) => a - b);
  if (arr[0] === arr[1]) {
    return arr[arr.length - 1];
  } else return arr[0];
}

//another very clever solution
function findUniq(arr) {
  return arr.find((n) => arr.indexOf(n) === arr.lastIndexOf(n));
}

/*
  Bravono (6 kyu) 23 days ago
In case you have a hard time understanding this solution.

What is simply doing is that - take each element in the array, check for the first time it appears and the last time.

If the index of the first it appears equals to the index of the last time it appears, that means there is only one occurrence of that number.
*/
