// codewars daily push - 8kyu convert num to rev arr of digits

// 8 kyu
// Convert number to reversed array of digits
// 95822091% of 7,53534,641 of 78,720emporio
// JavaScript
// Train AgainNext Kata

//     Details
//     Solutions
//     Forks (14)
//     Discourse (313)
//     Translations

// Fork|Collect|
// Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example:

// 348597 => [7,9,5,8,4,3]
// 0 => [0]


// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/solutions/javascript/all/best_practices


function digitize(n) {
    //code here
    //need to convert the integer to a string to use array functions
    
    n = n + "";  //could also do let str = num.toString()
    
    //split tthe string into indivudual chars, turn them into an array  
    let reverse = n.split("")
    //reverse that array
      .reverse()
  //   map creates a new array calling the Number function on each index, thus converting them to an integer
      .map(Number)
    
  
   return reverse
  
  }