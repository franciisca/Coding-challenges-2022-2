// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
// Reverse words

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//P. A string as a parameter.
//R. Returns each of the string words reversed, retaining the spaces in the string.
//E. "Hola como estas" -> "aloH omoc satse"
//Pseudo. function that takes a string as a parameter. loop through the string and reverse each word (with space added).

function reverseString(str){
    let newString =  str.split('').reverse().join('').split(' ').reverse().join(' ')
    return newString
  }


reverseString("hola como")

//works!