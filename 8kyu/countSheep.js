// If you can't sleep, just count sheep!!
// Task:

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// cerpinconsafo
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/solutions/javascript/all/best_practice

var countSheep = function (num){
let allSheep = "";
  for ( let i = 1 ; i <= num; i++ ){
    
    allSheep+= `${i} sheep...`;}
    return allSheep;
    
  }
