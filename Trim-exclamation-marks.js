/*
Description:
Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/

function remove(string) {
  while (string[string.length - 1] === "!") {
    string = string.slice(0, -1);
  }

  return string;
}

//regex

function remove(string) {
  // replace one or more exclamation marks (!+) from the end ($) with an empty string ("")
  return string.replace(/!+$/, "");
}
