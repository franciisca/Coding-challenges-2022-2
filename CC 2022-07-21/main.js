//Who likes it?
//https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

//P. Takes an array containing names of people.
//R. If no one liked it = return "no one likes this"
// If one person liked it = return "(nameof theperson) likes this"
// if 2 peoeple liked it = return "(person1) and (person2) like this"
//if 3 peoeple liked it = return "(person1), (person2) and (person3) like this"
// if 4 people liked it = return "(person1), (person2) and 2 others like this"
// if more than 4 people liked it = return the same as before but increasing the "2 others"
//E. "francisca" liked. "Francisca likes this"
//Pseudo.
//Write a function that takes an array of names. it can be empty, or have one or more names.
// Take the string and transform it into an array (split('')).
//Count the elements in the array. 
//If one element, return "(element) likes this"
//if 2 elements, return "element 1 and 2 like this"
//etc---

function likes(names) {
        if (names.length == 2){
            return `${names[0]} and ${names[1]} like this`
        }else if(names.length == 1){
            return `${names[0]} likes this`
        }
        else if(names.length == 3){
            return `${names[0]}, ${names[1]} and ${names[2]} like this`
        }else if(names.length == 4){
            return `${names[0]}, ${names[1]} and 2 others like this`
        }else if(names.length == 0){
            return `no one likes this`
        }else{
            return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
        }
  }

  likes(["Francisca"])

//Works!