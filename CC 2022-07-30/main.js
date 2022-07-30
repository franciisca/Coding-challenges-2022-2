//https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
//Disemvowel Trolls


//Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

//P. takes a string of words/letters.
//R. return the string with all the vowels removed.
//E. "hola si" returns "hl s"
//Pseudo. Write a function that takes a string. make it an array and take out the vocals. return remaining array turned into a string.

function disemvowel(str){
   return str.split('').map(x=>x.replace(/[aeiou]/ig, "")).join('');
}

disemvowel("hola como estas")

//Works!