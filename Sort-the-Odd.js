/*
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/


function sortArray(array) {
    let evenArray = [];
    let oddArray = [];
    let result = [];
    
    //sort into even and odd arrays
    for (let i = 0; i < array.length; i++) {
      if(array[i] % 2 === 0) {
        evenArray.push(array[i]);
      } else {
        oddArray.push(array[i]);
      }
    }
    //sort the odd array in ascending order
    oddArray.sort((a, b) => a-b);
    
    //loop thru to push even or odd sorted array at index 0
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        result.push(evenArray.shift());
      } else {
        result.push(oddArray.shift());
      }
    }
    return result;
  }

  //another solution
  function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
  }