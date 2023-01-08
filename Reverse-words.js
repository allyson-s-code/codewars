/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

function reverseWords(str) {
  //first split string into array
  array = str.split(" ");
  //create an array to hole reversed words
  let result = [];

  //loop thru each word in array
  for (let i = 0; i < array.length; i++) {
    //split the word to create an array so we can use array function reverse()
    let splitWord = array[i].split("");
    //reverse and rejoin splitWord into reverse word
    let reverseWord = splitWord.reverse().join("");

    result.push(reverseWord);
  }
  // return the array joined into string
  return result.join(" ");
}

//another solution:
function reverseWords(str) {
  return str
    .split(" ")
    .map(function (word) {
      return word.split("").reverse().join("");
    })
    .join(" ");
}
