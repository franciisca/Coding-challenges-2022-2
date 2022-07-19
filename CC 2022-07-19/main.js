//Find the odd int
//https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

//P. Takes an array that contains only integers (positive?)
//R. return the number that appears an odd number of times.
//E. [3,3,1] => returns 1 because appears one time (odd).
// [2,4,6,4,2,2,6] => returns 2, because appears 3 times (odd)
//pseudo. write a function that takes an array as a parameter.
//map?

function findOdd(arr){
    let count = 0
   for (let i = 0; i<arr.length; i++){
    for(let j = 0; j<arr.length; j++){
        if(arr[i] == arr[j]){
            count++
        }
    }
        if (count % 2 != 0){
            return arr[i]
        }
   }
   return arr[i]
}

findOdd([2,4,6,4,2,2,6])

//Works!!