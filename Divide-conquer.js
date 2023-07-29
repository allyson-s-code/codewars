/*
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.
*/
function divCon(x) {
  //filter all string and numbers by type and hold in variable
  //Add the numbers and subtract the strings
  const numberArray = x.filter((el) => typeof el === "number");
  const stringArray = x.filter((el) => typeof el === "string");

  const numSum = numberArray.reduce((accum, next) => {
    return accum + next;
  }, 0);

  const stringToNum = stringArray.map((el) => parseInt(el));
  const stringToNumSum = stringToNum.reduce((accum, next) => {
    return accum + next;
  }, 0);

  return numSum - stringToNumSum;
}
