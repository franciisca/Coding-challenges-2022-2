//https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript
//You're a square!

// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

//P. takes an integer (positive or negative).
//R. return true if the number is a perfect square. If not, return false.
//E. 25 => true
//81 => true
//2 => false
//Pseudo. Write a function that takes an integer. write a variable that holds the square root of the integer. return (true) => intRoot % == 0.
//More simplified: just return => square root of the integer % 1 == 0.

function isItSquarePerfect(int){
    return Math.sqrt(int) % 1 === 0
}

isItSquarePerfect(81)

//Works!