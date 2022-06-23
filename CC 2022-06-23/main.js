//Calculate IBM
//https://www.codewars.com/kata/57a429e253ba3381850000fb/javascript

//Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

//P. function has two parameters: weight, height. Height in m. 
//R. depending on the result of the operation (bmi) [weight divided by height2], returns:
//"Underweight" bmi <= 18.5
//"Normal" bmi <= 25.0
//"Overweight" <= 30.0
//"Obese" > 30.1
//E. weight 57, height 1.52
//bmi = 57/1.52^1.52  24.7 
//Pseudo. write a function that has two parameters (weight and height)
//variable called bmi that is an operation on the two (weight/height2)
//then if statements if the bmi is in certain ranges.

function ibmCalc(weight,height){
    const bmi = weight / Math.pow(height,2)
    
    if(bmi <= 18.5){
        return "Underweight"
    } else if(bmi <= 25){
        return "Normal"
    }else if (bmi > 25.1 && bmi <= 30){
        return "Overweight"
    } else{
        return "Obese"
    }
}

//Works!