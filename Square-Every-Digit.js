/* Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

*/

function squareDigits(num) {
  let strNum = num.toString();
  let newString = "";
  for (let i = 0; i < strNum.length; i++) {
    //add the square of each digit to the new string;
    newString += strNum[i] * strNum[i];
  }
  //return the string coverted to number
  return newString * 1;
}
