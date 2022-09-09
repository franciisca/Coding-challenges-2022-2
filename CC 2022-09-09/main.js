//https://www.codewars.com/kata/57cc981a58da9e302a000214
//Small enough?

//You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

//P. takes an array and a limit value 
//R. return true if all the values in the array are below OR equal to the limit value. else, return false.
//E. ([7, 9, 10], 100) returns true
//Pseudo. write a function that takes two parameters: an array of values (integers?) and a limit (integer?). Check if the values inside the array are below or equal to the limit. Return true if it is.

function smallEnough(arr, limit){
    for(let i = 0; i < arr.length; i++){
        return arr[i] <= limit
    }
}

smallEnough([3,4,5], 10)

//Works!