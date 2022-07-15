// 8 kyu
// Sum without highest and lowest number
// 72916889% of 5,53614,569 of 41,320user5036852
// JavaScript

// Task

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.
// Example

// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// Input validation

// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
// Fundamentals

// This was def harder than a normal 8kyu. Also, the description was pretty shit.Also
// S1 helped me work through it though he gave the code.

// sifirs solution that he helped me pseudo code through

function sumArray(array) {
    if( array != null && array.length > 2){
      let sortedArr = array.sort((a, b) => a - b)
      sortedArr.pop()
      sortedArr.shift()
      return sortedArr.reduce(function(a, b){ return a + b; })
    } return 0
  }