//https://www.codewars.com/kata/56747fd5cb988479af000028/javascript
//Get the Middle Character

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

//P. Takes a string (a word) of length greater than 0, and less than 1000.
//R. Return the middle character of the word. 
//If the word length is odd = return middle character.
//If the word length is even = return the TWO middle characters.
//E. Example of odd word: "try". returns "r"; "miracle" returns "a".
//Example of even word: "vase". returns "as".
// "B" should return "B"
//Pseudo. Write a function that takes a string. then tranforms the string into an array (split('')). if the array is even, then return two middle characters (loop?). If it is odd, return the middle character. 


function getMiddle(word){
    let arrayWord = word.split('')
    if (arrayWord.length % 2 == 0){
        const middle = function(){
        const half = this.length >> 1;
        const offset = 1 - this.length % 2;
        return this.slice(half - offset, half + 1);
        }
         Array.prototype.middle = middle;
            return arrayWord.middle().join('')
            
            } else {
                return arrayWord[Math.floor(arrayWord.length/2)];
                    }
}

getMiddle("hola")

//Works!!