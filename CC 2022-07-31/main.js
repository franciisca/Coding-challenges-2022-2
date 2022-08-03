//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
//Duplicate Encoder

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

//P. takes a string. checks each character to see if it is repeated.
//R. returns a string. if the character appears only once the character appears as "(". If it appears more than once in the original string, then the character returns as ")". Ignore caps when comparing.
//E. "holo" returns "()()"
//Pseudo. 


function duplicateEncode(str){
  let word = str.toLowerCase()
  let newString = ""

  for (let i = 0; i < word.length; i++){
    if (word.lastIndexOf(word[i]) === word.indexOf(word[i])){
      newString += "(";
    }else{
      newString += ")"
    }
  }   
    return newString
}

duplicateEncode("holo")

