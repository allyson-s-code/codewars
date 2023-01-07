/*
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
Rules
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
*/

function wave(str) {
  if (str.length === 0) {
    return [];
  }

  //array to hold result
  let waveArray = [];

  //loop thru string
  for (let i = 0; i < str.length; i++) {
    //check if string is empty at current index
    if (str[i] === " ") {
      continue;
    } else {
      //first make sure str has correct index capitalized
      let waveStr =
        str.slice(0, i) + str.charAt(i).toUpperCase() + str.slice(i + 1);
      waveArray.push(waveStr);
    }
  }
  return waveArray;
}
console.log(wave(" yada yada "));
