//https://www.codewars.com/kata/554e4a2f232cdd87d9000038/javascript
//Complementary DNA

//DESCRIPTION:
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

//P. takes a string that could be "A" "T" "C" "G"
//R. return the other complementary side of the DNA.
//E. "AAA" returns "TTT"
//"GCG" "CGC"
//Pseudo. write a function that takes a string. make the string into array. Loop array and if statements (if A return T, it T return A, if C return G, if G return C)


function DNAStrand (string){
    let arrStr = string.split('')
    let compl = arrStr.map(index =>  {
        if (index == "A"){
        return "T"
    } else if(index == "T"){
        return "A"
    }else if (index == "C"){
        return "G"
    }else{
        return "C"
    }
    })
    return compl.toString().replace(/,/g, '')
}

DNAStrand("TAACT")

//Works!!