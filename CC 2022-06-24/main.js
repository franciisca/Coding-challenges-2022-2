//https://www.codewars.com/kata/57356c55867b9b7a60000bd7/javascript
//Basic Mathematical Operations

//Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

//P. Takes three arguments (parameters: operation, value1, value2)
//R. returns the result of the chosen operation used between value1 and value2.
//E. ('+', 20, 4) = 24
//Pseudo. write a function that has 3 parameters. 

function takes(operation, value1, value2){
    if (operation == "+"){
        return value1 + value2
    } else if(operation == "-"){
        return value1 - value2
    } else if(operation == "*"){
        return value1 * value2
    } else{
        return value1 / value2
    }
}

takes('+',20,20)

//works!!
