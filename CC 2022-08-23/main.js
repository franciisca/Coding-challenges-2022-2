// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

//P. Takes a list of strings (in array)
//R. sort them alphabetically (case sensitive and according to ASCII). Return the FIRST VALUE. Returned value must be a string and have "***" in between each of its letters.
//E. ["hola", "como", "vamos"] => c***o***m***o
//Pseudo. write a function that takes an array. put arr.sort() inside a variable. return sortedArray[0], split(), join with the ***

function firstValue (arr){
    let sortedArray = arr.sort()
    return sortedArray[0].split('').join("***") 
}

//Works!!
