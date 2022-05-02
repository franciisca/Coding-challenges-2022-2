//https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript
//Testing 1-2-3

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

//P. function takes an array that contains a list of strings.
//R. returns the strings numbered, starting from 1. Empty array should return empty array.
//E. ["hola", "no", "a"] => ["1: hola", "2: no", "3: a"]
//Pseudo. write a function that takes an array. loop though the array. 

let number = function(array){
    const resultArr = [];
    
    for (let i = 0, j = 1; i < array.length; i++) {
      if (array.length === 0) {
        return `Empty array should return empty array`;
      } else {
        resultArr.push(`${j}: ${array[i]}`);
        j += 1;
      }
    }
    
    return resultArr;
  }

number(["a", "b", "c"])

  //works!

  //Another solution:

  let number = function(array) {
    return array.map(function (line, index) {
      return (index + 1) + ": " + line;
    });
  }

  number(["a", "b", "c"])

