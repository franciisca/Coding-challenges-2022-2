//
//


//P.
//R.
//E.
//Pseudo.



function multiTable(number){
    let numArray = []
    for (let i = 1; i <= 10; i++){
      numArray.push(`${i * number} = ${i * number}`)
    }
    return numArray.join("/n")
  }
  
  multiTable(2)