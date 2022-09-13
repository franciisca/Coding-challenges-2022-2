//https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript
//Backspaces in string

//Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

//P. Take a string that has characters and # symbols. Sometimes it can have just # symbols or be empty.
//R. Each symbol acts like a backspace so you have to return a string with the deleted character by the #.
//E. "a#bb#" => "b"
//('abc#d##c') 'ac';
//'abc####d##c#'), ''
//Pseudo. write a function that takes a string. each # is a backspace and will delete characters from the string. Return a string that contains what is left after deleting the characters.

function cleanString(s){
    let sToArr = s.split('')
    let newStr = ""
    for(let i = 0; i < sToArr.length; i++){
        if (sToArr[i] === "#"){
            return newStr = sToArr[i][i -1]
        }
    }
}

cleanString("a#b")