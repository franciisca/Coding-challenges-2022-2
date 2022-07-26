//https://www.codewars.com/kata/5208f99aee097e6552000148/javascript
//Break camelCase

const { attributeAll } = require("fidget/lib/components");

//Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//P. function takes a string of letters. camelCase string or just all lowercase.
//R. if camelCase string, return a string with the word separated. If all lowercase, return the same string. If empty string, return ""
//E. "holaQue" return "hola Que"
//Pseudo.
//Function takes a string. 
//turn the string into an array. Loop through the array to find the upperCase. When you find it, push/insert a " ". then return the array joined back together as a string (join).


function solution(string) {
    let result = '';
    
    for (let i = 0; i < string.length; i += 1) {
      string[i].charCodeAt() > 96 ? result += string[i] : result += ` ${string[i]}`
    }
    
    return result;
  }

solution("hoLa")

//Works!