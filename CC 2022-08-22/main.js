//Credit card mask 
//https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"


//P. a string that could have integers and /or letter.
//R. return the same string, with the characters changed to "#", EXCEPT for the last 4.
//E. "holacanito" -> "######nito"
//Pseudo. write a function that takes a string. slice the string in -4.
//loop through the left string and add # for every character.
//join both strings.

function maskIt(str){
   let strLength =  str.length
   let aAsterisco = strLength - 4
   for (let i = 1; i <= aAsterisco; i++){
        return 
   }

}

maskIt("holacanito")