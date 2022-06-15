// Count the number of divisors of a positive integer n.
//https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

//P. function takes a positive integer as parameter.
//R. return NUMBER of divisors of the integer.
//E. 50 -> 6 (1, 2, 5, 10, 25, 50)
//Pseudo. function takes and integer n, loops through, finds the divisors.

// function getDivisorsCnt(n){
//     for(let i = 0; n%i== 0; i++){
//         console.log(i);
//     }
// }

function getDivisorsCnt(n) {
    for (var d = 0, i = n; i > 0; i--) {
      if (n % i == 0) d++;
    }
    
    return d;
  }