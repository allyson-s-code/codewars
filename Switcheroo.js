/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.
*/

function switcheroo(x){
    const newArray = [];
    
    for (let i = 0; i < x.length; i ++) {
      if (x[i] === "a") {
        newArray.push("b");
      } else if (x[i] === "b") {
        newArray.push("a");
        } else {
          newArray.push(x[i])}
    } 
    return newArray.join("");
  }

  /* Mapping over */

  function switcheroo(x){
  
    return x.split("").map(letter => {
      return letter == "a" ? "b" : letter == "b" ? "a" : letter;
    }).join("");
  }

