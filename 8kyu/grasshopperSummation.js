
// 8 kyu
// Grasshopper - Summation

//     JavaScript
//     Node v8.1.3

// Instructions
// Output

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8


// cerpinconsafo
// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/solutions/javascript/all/best_practices


//plan of attack is simple for loop
var summation = function (num) {
    let sum = 0;
    for (i = 1; i <= num; i++){
      
      sum += i;    
      
    }
    return sum}