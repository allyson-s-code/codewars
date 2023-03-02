/*
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
*/

function nameShuffler(str) {
  //first split into array
  //then reverse
  //put back into string
  return str.split(" ").reverse().join(" ");
}
