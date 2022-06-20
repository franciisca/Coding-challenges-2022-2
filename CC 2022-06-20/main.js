//
//

// //The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// Usage Examples:
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

//P. function takes 3 parameters: cap (amount of people the bus can hold), 
//on (number of people on the bus, excluding the driver),
//wait (number of people waiting to get on the bus, excluding the driver).

//R. IF there is enough space return 0. 
//IF there isn't enough space, return the number of passengers he can't take
//E. cap = 20, on = 5, wait = 20 --> 5 (cant fit 5 of the 20 waiting)
//E. cap = 30, on = 2, wait = 28 --< 0 (he can fit them all)
//pseudo. write a function that takes 3 parameters (cap,on,wait)
// if cap minus on is greater or equal to wait, return 0
//else return wait minus cap

function passengerBus(cap,on,wait){
    if (cap - on >= wait){
        return 0
    }else {
        return (cap-on-wait)*-1
    }
}

passengerBus(30,2,28)

//works!
