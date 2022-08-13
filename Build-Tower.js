/* 
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

*/

function towerBuilder(nFloors) {
  //need an empty array to hold answer
  let tower = [];
  //our temp strings initialized
  let stars = "*";
  let spaces = " ";
  //push to array starting with 1st floor- each floor is 2 more * than last
  //spaces on either side will go increment down by one each floor
  for (let i = 1; i <= nFloors; i++) {
    stars = stars.repeat(i * 2 - 1);
    spaces = spaces.repeat(nFloors - i);
    tower.push(spaces + stars + spaces);
    stars = "*";
    spaces = " ";
  }
  return tower;
}

//another solution- I guess we dont need to make variables for stars and spaces:
function towerBuilder(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(
      " ".repeat(nFloors - i - 1) +
        "*".repeat(i * 2 + 1) +
        " ".repeat(nFloors - i - 1)
    );
  }
  return tower;
}
