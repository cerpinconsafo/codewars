// 8 kyu
// Convert a Number to a String!

// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?
// Examples (input --> output):

// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// Strings
// Fundamentals


//my solution, using es6 for a cleaner to the point syntax
let numberToString = num => num.toString();
  // Return a string of the number here!


  //longer declaration?
  function numberToString(num){
    return num.toString()
  }