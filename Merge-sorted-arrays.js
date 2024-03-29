/*
You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

Examples (input -> output)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
*/

function mergeArrays(arr1, arr2) {
  const mySet = new Set([...arr1, ...arr2]);
  //must create an array from the set
  const newArray = Array.from(mySet);
  //and sort it in ascending order
  return newArray.sort((a, b) => a - b);
}

//lets do it a few more ways

//just more concise
function mergeArrays(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
}

function mergeArrays(arr1, arr2) {
  let mergedArray = [...arr1, ...arr2];
  return (
    mergedArray
      //filter method is checking to see if each item is the first occurance of that item and therefore unique
      .filter((item, index) => mergedArray.indexOf(item) == index)
      .sort((a, b) => a - b)
  );
}
