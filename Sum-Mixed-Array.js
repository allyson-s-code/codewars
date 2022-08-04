/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

function sumMix(arr) {
  //first convert any strings to numbers
  let arrOfNums = arr.map((str) => {
    return Number(str);
  });
  //get sum of numbers
  let sum = arrOfNums.reduce(function (a, b) {
    return a + b;
  }, 0);
  return sum;
}

//Another solution:

function sumMix(arr) {
  //first convert any strings to numbers
  let arrOfNums = arr.map((str) => {
    return Number(str);
  });
  //get sum of numbers
  let sum = 0;
  for (let i = 0; i < arrOfNums.length; i++) {
    sum += arrOfNums[i];
  }
  return sum;
}

//a more concise solution:

function sumMix(x) {
  return x.reduce((s, n) => s + Number(n), 0);
}

//And I learned a new thing, the unary plus operator converts operand to number

function sumMix(x) {
  return x.map((a) => +a).reduce((a, b) => a + b);
}
