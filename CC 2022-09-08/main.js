//https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript
//To square(root) or not to square(root)

// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.

//P. take an array of integers.
//R. return a new array. if the integers has a square root return it, if not square the number.
//E. [10,8,4] -> [100, 64, 2]
//Pseudo. wirte a function that takes an array of integers. Check each of the integer. If the integer has a square root, return it. If it doesn't, return the interger squared. This all will be a new array.

function squareRootOrSquare(arr){
    let num
    arr.map(item => {
        if (num = Math.sqrt(item) == Number.isInteger(num) ){
            console.log(Math.sqrt(item))
        } else{
            return item*item
        }
    })
}

squareRootOrSquare([4,3,9,7,2,1])