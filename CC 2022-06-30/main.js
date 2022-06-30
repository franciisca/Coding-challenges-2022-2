// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
// List Filtering

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

//P. Function takes an array of non-negative integers AND strings
//R. Returns a new array only with the integers (filters out strings)
//E. filter_list [(2,3,'jiji', 'a')] => [2,3]
//Pseudo. //Write a function, parameter is an array. Inside the function loop through the array with a filter and take out string.
// Return a string of only integers.

function filter_list (arr){
    let filterArr = arr.filter(item => typeof item == 'number')
      return filterArr
    }  