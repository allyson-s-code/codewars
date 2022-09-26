/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

//first use of typeof!

function filter_list(l) {
    // Return a new array with the strings filtered out
    let newArray=[];
    for (let i=0; i<l.length; i++) {
      if(typeof l[i] !== "string") {
         newArray.push(l[i]);
         }
    }
    return newArray;
  }

  //other solutions
  const filter_list = l => l.filter(c => typeof c === 'number');

  function filter_list(l) {
    return l.filter(Number.isInteger);
  }