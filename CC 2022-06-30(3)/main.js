// Sort array by string length
// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/javascript

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

//P. Array of strings
//R. Returns the array sorted, same strings, orderer from shortest to longest.
//E. ["Holas", "holi", "computador"] => ["holi", "Holas", "computador"]
//Pseudo. Function that takes array of strings as parameter, loops through the array 



function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length);
  };

  