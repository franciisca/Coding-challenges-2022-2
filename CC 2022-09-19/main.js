// Don't give me five!
//https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript

// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

//P. function takes two arguments (two integers, positive or negative). The first one will always be smaller than the second one.
//R. return the sum of the integers between the arguments (including the arguments) but excluding from the sum any integer containing "5". 
//E.2,9 -> 2,3,4,6,7,8,9 -> returns 39
//pseudo.function has two parameters (negative or positive integers). add the numbers in between them (including the arguments) except for integers containing 5.

function sumWithoutFive(start,end){
    let arr = [start,end]
    let sum = arr.map(index => {

    })
}

function sumWithoutFive(start,end){
    let arr = [start,end]
    arr.filter((n) => {

    })
    return arr.reduce((a, b) => a + b, 0)
}

sumWithoutFive(2,9)