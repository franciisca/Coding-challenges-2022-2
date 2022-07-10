// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
// Regex validate PIN code

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

//P. Takes a string, that can be numbers or letters or mixed. 
//R. return true or false. TRUE= if the string is made of 4 or 6 numbers (exactly). FALSE = if it's anything else.
//E. "2345" true, "123456" true, "233" false, "jas9" false.
//Pseudo. Write a function that takes a string as a parameter. if the string is a 'number' and if it's length (pin.length) && length is 4 or 6 characters return TRUE. else return false.


function validatePIN(pin){
    let pinLengthCheck = pin.length == 4 || pin.length == 6
    let hasOnlyNumbers = pin.match(/^\d+$/)

    if (pinLengthCheck && hasOnlyNumbers){
        return true
    }
    return false
}

validatePIN("12345678")

//Works!