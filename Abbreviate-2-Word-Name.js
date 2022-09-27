/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

function abbrevName(name){
    nameArray = name.split(" ");
    let initialArray=[];
    
    for (name of nameArray) {
       initialArray.push(name[0].toUpperCase());
    }
    return initialArray.join(".");
  }

  //another solution
  function abbrevName(name){

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }

  function abbrevName(name){
    
    return (name[0]+'.'+name[name.indexOf(' ')+1]).toUpperCase();

}