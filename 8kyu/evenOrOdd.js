// 8 kyu
// Even or Odd


// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//my solution
// use a ternary operator and es6 to make a clean and quick function
let evenOrOdd = number => (number % 2 == 0) ? "Even":"Odd"
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
//old formatting
function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
  }

//long formatting 
  function even_or_odd(number) {
    if (number%2 == 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
