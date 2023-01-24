/*
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/

function simpleMultiplication(number) {
  //if the number is even return number multiplied by 8, otherwise return number * 9
  return number % 2 == 0 ? number * 8 : number * 9;
}
