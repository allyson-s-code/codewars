/*This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
    let sToArray = s.split("");
    let newArray = [];
  
    for (let i=0; i<sToArray.length; i++) {
    newArray.push(sToArray[i].toUpperCase() + sToArray[i].repeat(i).toLowerCase());
    }
    return newArray.join("-");
}

//another solution

function accum (s) {
    return [...s].map((element, index) => {
      return element.toUpperCase() + element.toLowerCase().repeat(index);
    }).join('-');
  }

function accum(s) {
    return s.split('')
    .map((item, index) => item.toUpperCase() + item.toLowerCase().repeat(index))
    .join('-');
}

