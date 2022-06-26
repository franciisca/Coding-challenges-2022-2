//Reduce but Grow
//https://www.codewars.com/kata/57f780909f7e8e3183000078/javascript

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//P. takes a non-empty array of integers 
//R. returns the result of multiplying the values together.
//E. [3,4,5] => 60
//pseudo. write a function that takes an array of integers. loops through the array and mutiply each value together. Return

function grow(x){
    return x.reduce((a, b)=> a * b,1);
  }

grow([2,3,4])

//works!