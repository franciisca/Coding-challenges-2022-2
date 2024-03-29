//Highest Scoring Word
//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

//P. A function takes a string of words. All letter will be lowercase, all inputs will be valid.
//R. return the highest scoring word as a string. Each letter of a word scores point according to its position in the alphabet.
//E. "hola zorro" return "zorro" 
//Pseudo. We take a string, and loop it. Then reloop with charCodeAt to get a number. if statements to calculate de number of the letter.

function high(x){
    // 1. split x by ' ' to an array.
    const wordList = x.split(' ');
    
    // 2. calculate each word score to another array.
    const getScore = (word) => {
      return word.split('').reduce((prevScore, currWord) => prevScore + currWord.charCodeAt(0) - 96, 0)
    }
    const scoreList = wordList.map(word => getScore(word));
  
    // 3. get the highest score and index
    let highestIndex = 0;
    let highestScore = 0;
    scoreList.forEach((score, i) => {
      if (score > highestScore) {
        highestIndex = i;
        highestScore = score;
      }
    });
    
    // 4. return the string of the highest score index of wordList
    return wordList[highestIndex];
  }

high('take me to semynak') //'semynak'

//Works!