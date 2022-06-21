//https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/javascript
//Series #4 Cockroach

// DESCRIPTION:
// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

//P. function takes parameter(speed in km/h)
//R. returns the speed in cm per second (rounder down with Math.floor)
// 1 km/h == 27.778 cm/s
//E. 3.2 => 88.8
//pseudo. write a function that takes a number. multiply that by 27.778. //return the result floored.

function cockroachSpeed(kmPerHour){
    return Math.floor(kmPerHour*27.778)
}

cockroachSpeed(2)

//works!