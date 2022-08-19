/*
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
*/

function twiceAsOld(dadYearsOld, sonYearsOld) {
  let difference = sonYearsOld * 2 - dadYearsOld;
  if (difference < 0) {
    return -difference;
  }
  return difference;
}

//another solution
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}
/* Math.abs returns absolute value of a number- positive if it's pos or 0 and the opp of a negative value-*/
