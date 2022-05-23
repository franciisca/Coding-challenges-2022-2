//Highest and Lowest
//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

//P. Function takes as a string with numbers. They are all separated by a space. takes positive and negative integers. there will always be at least one number in the input string. 
//R. return the highest and lowest number. In a string, separated by a space. Highest number is the first.
//E. ("3 6 10 39") return "39 3"
//Pseudo. Write a function that takes a string of numbers. Make it an array and then Number (with map). Apply math max and min to get the output.

function highAndLow(numbers){
    let arrToNum = numbers.split(' ').map(Number)
    return `${Math.max.apply(Math, arrToNum)} ${Math.min.apply(Math, arrToNum)}`
  }
  
  highAndLow("2 3 2")


//Works!