// 8 kyu
// Count by X

// JavaScript

// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

// Examples:

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

// Fundamentals
// Arrays
// Numbers

// https://www.codewars.com/kata/5513795bd3fafb56c200049e/solutions/javascript/all/best_practices

// cerpinconsafo

function countBy(num, x) {
    //initialize array
  let arr = [];
    //use for loop to iterate x num of times
  for ( let i=1; i <= x; i++ ){
        //create the array with simple equation
    arr.push(num * i)
    }
    //return the completed array as output
  return arr;
}