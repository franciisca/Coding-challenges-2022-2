// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
// Square Every Digit

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

//P. Takes a integer and squares every digit of it.
//R. Returns all the results stuck together, as if it was one integer.
//E. 233 --> 499 (2x2 = 4; 3x3 = 9; 3x3 = 9 --> 499)
//Pseudo. function takes a number. Turn number into string. separated each digit of string into array. Loop through the array and square every digit. Tranform the result into a string and to a Number.

function squareDigits(num){
  let numToArray = num.toString().split('')
  let loopArray = numToArray(number => Math.pow(number,2))
  return Number(loopArray.join(''))
}

squareDigits(233)

//Works! .