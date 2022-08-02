/*
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
*/

function repeatStr(n, s) {
  let newString = "";
  for (let i = 0; i < n; i++) {
    newString += s;
  }
  return newString;
}

//another solution:

function repeatStr(n, s) {
  return s.repeat(n);
}
