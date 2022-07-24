//https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript
// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

//P. takes a positive integer (number of floors).
//R. returns a tower made from asteriks (it's an array with strings) It starts with one and keeps going up until number of floors integers is met. It adds 2 asteriks each floor.
//E. 4 floors.
// [
    // "     *     "
    // "    ***    "
    // "   *****   "
    // "  *******  "
//]

//Pseudo.
//write a function that takes a (positive) integer.
//loop through the number and return an asterik for each

function pyramid(numFloors){
    let result = []
    let maxLength = 2*numFloors-1;

    for (let i = numFloors; 0 < i; i--){
        let ele = '*'.repeat(2*i-1)
        ele = ele.length < maxLength ? ' '.repeat((maxLength-ele.length)/2) + ele + ' '.repeat((maxLength-ele.length)/2) : ele;
        result.unshift(ele)
    }
    return result
}

pyramid(3)

//Works!