//https://www.codewars.com/kata/55685cd7ad70877c23000102/javascript
//Return Negative

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

//P. Takes any number (positive, negative, float, zero, etc)
//R. return that number NEGATIVE (if it is already negative or zero, then don't do anything)
//E. 10 = -10; 200 = -200; -8 = -8; 0 = 0; -1.3 = -1.3; 4.8 = -4.8
//Pseudo. Write a function that takes a number. if statements with the Math.sign() method. If it returns 1, then multiply that number by -1. return.

function makeNegative(num){
    if (Math.sign(num) === 1){
        return num*-1
    }else{
        return num
    }
}

makeNegative(29)

//Works!