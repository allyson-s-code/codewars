/*
Messi's Goal Total
Use variables to find the sum of the goals Messi scored in 3 competitions

Information
Messi goal scoring statistics:

Competition	Goals
La Liga	43
Champions League	10
Copa del Rey	5
Task
Create these three variables and store the appropriate values using the table above:
laLigaGoals
championsLeagueGoals
copaDelReyGoals
Create a fourth variable named totalGoals that stores the sum of all of Messi's goals for this year.

*/

var laLigaGoals = 43;
var championsLeagueGoals = 10;
var copaDelReyGoals = 5;

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

//other solutions

let [laLigaGoals, championsLeagueGoals, copaDelReyGoals] = [43, 10, 5],
  totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

//reduce
let goals = [43, 10, 5],
  [laLigaGoals, championsLeagueGoals, copaDelReyGoals] = goals,
  totalGoals = goals.reduce((s, v) => s + v);

let array = ([laLigaGoals, championsLeagueGoals, copaDelReyGoals] = [
  43, 10, 5,
]);

var totalGoals = array.reduce((a, b) => a + b);

//how does reduce work?
/*
reduce() is a reducer function for arrays
returns a single value- the function's accumulated result
does not execute the function for empty arrays

Syntax
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
Parameters
Parameter	Description
function()	Required.
A function to be run for each element in the array.
Reducer function parameters:
total	Required.
The initialValue, or the previously returned value of the function.
currentValue	Required.
The value of the current element.
currentIndex	Optional.
The index of the current element.
arr	Optional.
The array the current element belongs to.
initialValue	Optional.
A value to be passed to the function as the initial value.
*/
