//https://www.codewars.com/kata/52c31f8e6605bcc646000082/javascript
//Two Sum

// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

//P. function takes 2 parameters: an array of numbers (integers, always with a length of 2 or greater) and a "target number" (another integer). target will always be the sum of two different items from that array).
//R. select the numbers inside the array that when added together result in the "target number". what you return is not the integers themselves, but the INDEX where those integers are in the array.
//E. [3,6,5], 9  // returns [0,1] (or [1,0]). 0 because 3 is in index0; 1 because 6 is in index1.
//Pseudo. write a function that hasta 2 parameters (the array of integers and the "target number").
// using reduce, check which items of the array sum the target.

function twoSum(numbers, target) {
    let reduceNumArr = numbers.reduce((a,b) => a + b, 0)
    if (reduceNumArr === target){
        return reduceNumArr[i]
    }
  }

twoSum([3,6,5],9)