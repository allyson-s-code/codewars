/* 
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function solution(string) {
  return string.split(/(?=[A-Z])/).join(" ");
}

//another solution- I have to look up what the regex means
/* I think it means replace the capitals in string with a space and then $1 references the capital letters.  
"camelCase" would become "camel Case"
So " $1" returns " C"
*/

function solution(string) {
  return string.replace(/([A-Z])/g, " $1");
}
