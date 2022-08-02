/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

function removeChar(str) {
  //first change to array
  //remove first and last index
  //join into string
  //return
  let array = str.split("");
  return array.slice(1, str.length - 1).join("");
}

//Oh man! slice() method can be used on strings-
//better solution:

function removeChar(str) {
  return str.slice(1, -1); // argument -1 is the same as 'str.length -1'
}
