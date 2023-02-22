/*
Description:
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi"

*/

function remove(string) {
  if (string.charAt(string.length - 1) === "!") {
    return string.slice(0, -1);
  } else {
    return string;
  }
}

//regex
//$ matches end of input - /!$/ means ! at end- sp replace with nothing
const remove = (s) => s.replace(/!$/, "");

//more concise
function remove(s) {
  return s[s.length - 1] == "!" ? s.slice(0, -1) : s;
}

//substr method
function remove(s) {
  return s.charAt(s.length - 1) == "!" ? s.substr(0, s.length - 1) : s;
}
