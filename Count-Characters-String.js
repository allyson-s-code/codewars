/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function count(string) {
  // create an empty object
  let tally = {};
  //loop thru string to tally characters
  for (let i = 0; i < string.length; i++) {
    let x = string[i];
    if (tally[x] === undefined || 0) {
      tally[x] = 1;
    } else {
      tally[x] += 1;
    }
  }
  return tally;
}
