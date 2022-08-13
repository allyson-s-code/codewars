/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

function duplicateEncode(word) {
  //object to hold letter tally
  let letterCount = {};
  //split into array of lowercase letters
  let letters = word.toLowerCase().split("");
  //loop over array to tally letter count
  for (i = 0; i < letters.length; i++) {
    let x = letters[i];
    if (letterCount[x] === undefined || 0) {
      letterCount[x] = 1;
    } else {
      letterCount[x] += 1;
    }
  }
  //map over letters array and for each letter in object check tally- if 1 return "(" - otherwise return ")";
  return letters
    .map(function (letters) {
      return letterCount[letters] === 1 ? "(" : ")";
    })
    .join("");
}
