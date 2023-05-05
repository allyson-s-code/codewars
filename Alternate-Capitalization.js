/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.
*/

function capitalize(s) {
  //turn s into array
  //capitalize even indexes
  const evenCaps = s
    .split("")
    .map((l, i) => (i % 2 == 0 ? l.toUpperCase() : l))
    .join("");
  //capitalize odd indexes
  const oddCaps = s
    .split("")
    .map((l, i) => (i % 2 !== 0 ? l.toUpperCase() : l))
    .join("");
  //concat into one array
  return [evenCaps, oddCaps];
}
