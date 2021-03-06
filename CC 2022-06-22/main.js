// https://www.codewars.com/kata/57f36495c0bb25ecf50000e7/train/javascript
// Sum of all the multiples of 3 or 5

// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

//P. function takes a number. 
//R. return the sum of all multiples of 3 and 5, including n itself.
//E. findSum(9) returns 23 (3+5+6+9)
//Pseudo.

function findSum(n){
    let sum = 0
    for(let i = 1; i <= n; i++){
        if ((i % 3 == 0) || (i % 5 == 0) || (i % 3 == 0 && i % 5 ==0)){
            sum += i
        }
    }
    return sum
}

findSum(10)