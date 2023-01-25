/*
Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

Some cases:
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]
*/

function multipleOfIndex(array) {
  //create a new array to store result
  let multiples = [];
  //loop thru and check each element in array to see if they are a multiple of their index
  for (let i = 0; i < array.length; i++) {
    if (array[i] % i === 0) {
      //if so push to new array
      multiples.push(array[i]);
    }
  }
  return multiples;
}

//another one
//using filter
function multipleOfIndex(array) {
  return array.filter((num, i) => num % i === 0);
}
