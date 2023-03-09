/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s) {
  //sort by words length
  //return the length of shortest word
  const sArray = s.split(" ");
  sArray.sort((a, b) => a.length - b.length);
  return sArray[0].length;
}
