//https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
//Count characters in your string

//The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

//P. We have a string. Doesn't consider uppercase/lowcase. If the string is empty it returns {}
//R. returns the number of characters in the string, separating them according to which character it is. Returns the result in an object. If string is empty, returns an empty object,
//E. "abba" returns {'a':2, 'b':2}. "" returns {}
//Pseudo. write a function that takes a string. 
//create a variable that hold and object ({})
//loop. Make the string an array and loop through it. use if statements and indexOf. 
//Then


function letterCount(str){
    let word = str.toLowerCase()
    for(let i = 0; i < word.length; i++){
        if (word.lastIndexOf(word[i]) == word.indexOf(word[i])){
            return {i: i++}

        }
    }
}
