//https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript
//Friend or Foe

//Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

//P. takes an array of strings (names)
//R. return an array only with names that have 4 letters exactly (keeping the original order of the names in the output)
//E. ["Mimi", "Jason", "pipi"] , returns ["Mimi", "pipi"]
//P. write a function that takes an array (of strings). 
//use the filter method, setting the .length equal to 4. Return that.

function friend(friends){
   return friends.filter(unicorn => unicorn.length == 4)
}

friend(["Ryan", "Kieran", "Mark"] )

//Works!