// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript
// Growth of a Population

// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note:
// Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

//P. takes 4 parameters: p0 (initial population), percent(population growth percent), aug(habitants coming in to live each year), p(population to equal or surpass)
//R. returns "n", which is how many years will it take for the population to be equal or greater than "p"
//E. (1000, %2 (0.02), 10, 1080)
//first year: 1030,
//second year: 1060
//third year: 1091
//it will take 3 years (n) to equal or surpass "p"(1080)
//Pseudo. function takes in the 4 parameters. make a variable that makes and store the calculation (p0 + p0*percent + aug)
//loop though the variable until the value is equal or greater than "p"
//the i will be the "n" probably..

function nbYear(p0, percent, aug, p) {
    
    for (var years = 0; p0 < p; years++) {
      p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    }
    return years
  }

  //works!