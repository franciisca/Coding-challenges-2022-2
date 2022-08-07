//is it a palindrome?
//

// Write a function that checks if a given string (case insensitive) is a palindrome.

  //P. takes a string. case insensitive
  //R. return true if the string is the same when turned backwards. If not, return false.
  //E. "level" => true
  // "hello" => false
  //Pseudo. Write a function that takes a string. set it to lower case. check if it the string equals the same string backwards (reverse and join methods). Return true if it is.


  function isPalindrome(x) {
    let xLowerCase = x.toLowerCase()
    if (xLowerCase == xLowerCase.reverse().join("")){
        return true
    }else{
        return false
    }
  }

  isPalindrome("level")