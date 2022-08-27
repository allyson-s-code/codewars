/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
*/

function doubleChar(str) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    newString = newString + str[i] + str[i];
  }
  return newString;
}

//another solution
const doubleChar = (str) =>
  str
    .split("")
    .map((c) => c + c)
    .join("");

function doubleChar(str) {
  return str.replace(/(.)/g, "$1$1");
}
