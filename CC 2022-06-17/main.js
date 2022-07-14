//Series #3 Sum of Numbers
//https://www.codewars.com/kata/55f2b110f61eb01779000053/javascript

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

//P. takes two 
//R.
//E.
//Pseudo. 

function getSum(a,b) {
    let max
    let min 
    if (a>b){
        max = a
    }else{
       min = b
    }
    if (max === undefined && min !== undefined) {
      	let arr1 = [...Array(min+1).keys()];
        return arr1.reduce((partialSum, a) => partialSum + a, 0);
    } else if (min !== undefined) {
    	let arr2 =[...Array(max-min+1).keys()].map(elm => elm+min);
        return arr2.reduce((partialSum, a) => partialSum + a, 0);
    } else {
        let arr3
    	return arr3.reduce((partialSum, a) => partialSum + a, 0);
    }
}

getSum(1,3)

//Works!
