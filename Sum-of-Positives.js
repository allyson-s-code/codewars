/* 
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr) {
  //start with empty array
  let posArr = [];
  //loop thru given array to check for positives and push to posArr
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      posArr.push(arr[i]);
    }
  }
  //sum of all positive numbers
  return posArr.reduce((a, b) => a + b, 0);
}
