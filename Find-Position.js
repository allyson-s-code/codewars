/*
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
*/

function position(letter) {
  //create an array to hold alphabet
  let alphabetArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  //make sure to change letter to lowerCase
  return `Position of alphabet: ${alphabetArray.indexOf(letter) + 1}`;
}

//other solutions

//didn't have to make an array!

function position(letter) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return "Position of alphabet: " + (alphabet.indexOf(letter) + 1);
}

function position(letter) {
  return `Position of alphabet: ${letter.charCodeAt(0) - 96}`;
}
