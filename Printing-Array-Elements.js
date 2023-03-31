/*
Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"
*/

function printArray(array) {
  return array.join();
}

//or 

function printArray(array) {
    return array.toString();
}

const printArray = (arr) => arr.join(",");