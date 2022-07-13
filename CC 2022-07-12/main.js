// https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
// Counting sheep...

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

//P. takes an array of sheep, which could contain true,false, null, undefined
//R. returns the count of true statements.
//E. [true, false, false, null, true] , returns 2
//Pseudo. write a function that takes an array. loop through the array and add ++ if there are true statements

function countSheeps(arrayOfSheep) {
    let numberTrue = 0
    for(let i = 0; i< arrayOfSheep.length; i++){
        if(arrayOfSheep[i]) {
            numberTrue += 1
          }
        }
        return numberTrue
    }

  countSheeps([true, false, true])

