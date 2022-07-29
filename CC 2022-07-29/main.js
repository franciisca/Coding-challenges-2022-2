// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5

//P. takes an array of integers. There will not be empty arrays.
//R. returns the max value and in another function it return the min value. 
//E. [2,4,5,6] max: 6, min: 2
//Pseudo. Write a function that takes an array. use the math.min and max methods to get the numbers.

var min = function(list){
   return Math.min(...list)
}

var max = function(list){
    return Math.max(...list)
}

//Works!