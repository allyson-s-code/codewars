/*
Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
*/

function isTriangle(a, b, c) {
  if (a + b > c && b + c > a && c + a > b) {
    return true;
  } else {
    return false;
  }
}

//another solution using sort
/*The sort method sorts a, b & c in increasing order. a, b & c will make a triangle if the sum of smaller sides is greater than the larger side.*/
function isTriangle(a, b, c) {
  [a, b, c] = [a, b, c].sort((x, y) => x - y);

  return a + b > c;
}
