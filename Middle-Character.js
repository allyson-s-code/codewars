function getMiddle(str) {
  let middle = Math.floor(str.length / 2);
  let length = str.length;

  if (length % 2 === 0) {
    //if even
    return str[middle - 1] + str[middle];
  } else {
    //if odd
    return str[middle];
  }
}

//High ranked solution
function getMiddle(s) {
  var middle = s.length / 2;
  return s.length % 2
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}
