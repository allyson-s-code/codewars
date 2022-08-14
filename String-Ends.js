/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

function solution(str, ending) {
  //first slice first string to same length to compare
  let endingLength = ending.length;
  let strEnd = str.slice(-endingLength);
  if (ending === "" || strEnd === ending) {
    return true;
  } else return false;
}

//cleaner:

function solution(str, ending) {
  return ending === "" || str.substr(-ending.length) === ending;
}
