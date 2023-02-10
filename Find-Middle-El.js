/*
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
*/

function gimme(triplet) {
  //one way is to sort into a new array
  //first copy array so we don't change it
  //find index of el in first array that matches middle el in second array
  sortedTriplet = [...triplet].sort((a, b) => a - b);
  let middleNum = sortedTriplet[1];
  return triplet.indexOf(middleNum);
}

//can also skip middle and just do:

function gimme(triplet) {
  return triplet.indexOf([...triplet].sort((a, b) => a - b)[1]);
}