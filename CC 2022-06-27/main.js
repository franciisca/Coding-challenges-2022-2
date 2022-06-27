//Keep Hydrated!
//https://www.codewars.com/kata/582cb0224e56e068d800003c/train/javascript

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

//P. takes the time in hours
//R. returns the number of liters needed. 0.5 liters per hour. Rpuunded to the smallest value. floor()
//E. 4 hours ... 2 liters
//Pseudo. write a function that takes hours as a parameter. make a variable that multiplies hours per 0.5. use floor()

function litres(time) {
    let litersOfWater = time * 0.5
    return Math.floor(litersOfWater)
  }

  litres(20)

//tb podría haber sido:

function litres(time){
    return Math.floor(time * 0.5)
}



  //works!