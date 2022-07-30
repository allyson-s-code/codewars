/*Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"*/

function longest(s1, s2) {
    //create a new set of:
    //the two strings combined into one
    //that is split into array 
    //sort new set array to get in order
    //join into string
    
    return [...new Set((s1 + s2).split(""))].sort().join("");
  }

  