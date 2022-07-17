//https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
//Fake Binary
//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

//P. there is a string of digits. will never be an empty string.
//R. replace any digit below 5 with 0; any digit 5 and above with 1. Return a STRING.
//E. "4566" => "0111"
//Pseudo. write a function that takes a string. pass that string to an array with split(''). Map through the array: 
//if index is under 5 return 0; if index is 5 or more return 1.
//transform to string/return,

function fakeBin(x){
    let strToArr = x.split('')
    mapArr = strToArr.map(index=>{
        if (index < 5){
            return 0
        }if (index >= 5){
            return 1
        }
    })
        return mapArr.join("")
  }

  fakeBin("1234")


