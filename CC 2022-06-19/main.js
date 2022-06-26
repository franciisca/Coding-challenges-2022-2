//https://www.codewars.com/kata/55d1d6d5955ec6365400006d/javascript
//Round up to the next multiple of 5

// Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

//P. takes an integer (positive, negative and also 0)
//R. returns the closest "next" integer multiple of 5.
//E. 18 => 20 ; -5 => -5; 21 => 25
//Pseudo. write a function that takes an integer. 
// if it is 0, return 5
//else if, num %5 === 0, return the same number
//else Math.ceil(num/5)*5

function roundUp5 (num){
    if(num === 0){
        return 0
    }else if (num%5=== 0){
        return num
    }else{
        return Math.ceil(num/5)*5
    }
}

roundUp5(20)

//Works!