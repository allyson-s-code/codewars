/* 
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

function arrayDiff(a, b) {
  //array to hold all values in a which are not contained in b
  let diffArray = [];
  //loop over a array
  for (let i = 0; i < a.length; i++) {
    let bContainsValue = false;
    //loop over b array
    for (let y = 0; y < b.length; y++) {
      //check if b matches a values
      if (a[i] === b[y]) {
        bContainsValue = true;
      }
    }
    //only if b does not contain value- push to array
    if (!bContainsValue) {
      diffArray.push(a[i]);
    }
  }
  return diffArray;
}

//simpler solution using array methods

function arrayDiff(a, b) {
  // Filter entire a array, only keep the value if b does not contain that value
  return a.filter((val) => !b.includes(val));
}
