function meeting(s) {
  // change to uppercase and array
  arrayS = s.toUpperCase().split(";");

  //sort alphabetically by last name

  let arrayNames = arrayS
    .map((name) => name.split(":").reverse().join(", "))
    .sort();
  return arrayNames.map((name) => "(" + name + ")").join("");
}
