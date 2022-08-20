//https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript
//Powers of 2

// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

//P.Takes a non-negative integer as input.
//R. returns a list of all the powers of 2 with the exponent going from 0 to n (inclusive)
//E. 
//Pseudo. Mak a function that takes an integer. Create an empty variable [] to receive the list. 


function powersOfTwo(n){
    let arr = [];
    for(let i=0; i<=n; i++)
      arr[i] = 2**i;
    return arr;
  }

powersOfTwo(2)