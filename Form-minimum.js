/*
Task
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

Notes:
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
Input >> Output Examples
minValue ({1, 3, 1})  ==> return (13)
Explanation:
(13) is the minimum number could be formed from {1, 3, 1} , Without duplications

minValue({5, 7, 5, 9, 7})  ==> return (579)
*/

function minValue(values) {
  //sort from lowest to highest value
  values.sort((a, b) => a - b);
  //create a set with one of each integer
  const mySet = new Set(values);
  //change back to array
  const array = [...mySet];
  //join to combine integers and parseInt to take from string to integer
  return parseInt(array.join(""));
}

//another solution

function minValue(values) {
  let newArr = [];
  for (i = 0; i < values.length; i++) {
    if (newArr.includes(values[i]) === false) {
      newArr.push(values[i]);
    }
  }
  return parseInt(
    newArr
      .sort(function (a, b) {
        return a - b;
      })
      .join("")
  );
}
