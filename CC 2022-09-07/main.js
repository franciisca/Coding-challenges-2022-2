//https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0
//Sort by last char

//Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

//P. takes a string of words.
//R. return that string of words into an array, having the words sorted alphabetically by the final character in each. If two or more words have the same last character, just return them in the order they appear on the string.
//E. "cuco hola" --> [hola cuco]
//P. write a function that takes a string (of words). Transform it into an array. Loop through the array applying charAt(arr.length -1) and check the order.


function last(x){
    return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
  }

last("hola cuco")

//Works!