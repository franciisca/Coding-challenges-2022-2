//https://www.codewars.com/kata/54ff3102c1bad923760001f3/javascript
//Vowel Count

//Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//P. Takes a STRING of letters (only lower case letters and/or spaces). 
//R. Return number(count) of vowels (a,e,i,o,u).
//E. "a b m o" returns 2 (a, o)
//Pseudo. write a function that takes a string.
//transform it into array, loop through the array.
// make a counter that starts at 0 and ++ everytime there is a vowel.

function getCount(str){
    let strToArr = str.split('')
    let count = 0;
    strToArr.map(index => {
        if(index == "a" || index == "e" ||index == "i" ||index == "o" ||index == "u"){
            count++
        }})
        return count
}

getCount("a b c")