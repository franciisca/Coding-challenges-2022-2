//https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
//Descending Order

//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

//P. Take a non-negative integer as an argument.
//R. return the integer re arranged, from the largest number to the smallest (descending order).
//E. 365 => 653
//Pseudo. write a functiont that takes a non-negative integer.
//transform the integer into an array and use the sort() to re arrange
// return Number( .join(''))

function descendingOrder(n){
    let descOr = n.toString().split('').sort(function(a, b){return b-a})
    return Number(descOr.join(''))
}

descendingOrder(23448)

//Works!