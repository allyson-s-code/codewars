/*
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.
*/

function distinct(a) {
  return [...new Set(a)];
}

//another solution
/*the reason it works is because indexOf finds the first appearance of an item, so if its index doesn't match the current one, the item is filtered out*/

const distinct = (a) => a.filter((item, index) => a.indexOf(item) === index);
