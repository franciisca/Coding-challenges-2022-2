// https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript
// Is this a triangle?

// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

//P. Takes three parameters which refer to each side of a triangle. If you take any of the two sides of a triangle, their sum must be greater than the side that is left.
//R. returns true (if the triangle is possible) or false if it's not possible.
//E. triangle 20,20,10 = true; triangle 10,3,1 = false;
//Pseudo. function that takes three parameters (each side of a triangle). if statement: if the sum of 2 sides is greater than the left side = return true. use && to include all the possible sides combinations. else, return false.


function isTriangle(a,b,c){
    if (a+b > c && a+c > b && c+b > a){
      return true
    }else {
      return false
    }
  }

  //works!