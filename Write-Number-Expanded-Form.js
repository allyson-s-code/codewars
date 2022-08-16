/* 
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {
  //could stringify and then count length?
  let numArray = num.toString().split("");
  //loop through numArray
  for (let i = 0; i < numArray.length; i++) {
    if (numArray != 0) {
      //for each place value add zero (descending place values)
      for (let y = numArray.length - i; y > 1; y--) {
        numArray[i] += "0";
      }
    }
  }
  //filter out all the values starting with 0
  numArray = numArray.filter((value) => !value.startsWith(0));
  return numArray.join(" + ");
}
