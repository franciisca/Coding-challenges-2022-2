//https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
//Array.diff

//Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]


//P. takes two parameter. "a" is an array of integers (two or more), "b" is one integer.
//R. returns "a" without the "b" integer.
//E. [2,3,4,3,4],[4] -> [2,3,3]
//Pseudo. write a function that takes two arrays (one of 2 or more integers, and one of one integer). compares them and returns array "a" without the "b" integers.

function arrayDiff(a,b){
   return a.filter(val => !b.includes(val));
  }
  
arrayDiff([1,2,2,2,3],[2])

//Works!