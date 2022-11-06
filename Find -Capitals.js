/* Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] ); */

var capitals = function (word) {
  //find capitals using regex
  //loop through word
  //push indexOf to array

  let indexArray = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i].match(/[A-Z]/g)) {
      indexArray.push(i);
    }
  }
  return indexArray;
};

//other solutions
const capitals = (word) => {
  return word.match(/[A-Z]/g).map((x) => {
    return word.indexOf(x);
  });
};

var capitals = function (word) {
  var caps = [];
  for (var i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() == word[i]) caps.push(i);
  }
  return caps;
};
