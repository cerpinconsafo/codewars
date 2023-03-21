// 8 kyu
// Convert boolean values to strings 'Yes' or 'No'.


// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// Fundamentals
// https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript

// ES6 nice version, my solution
let boolToWord = bool =>  (bool == true)? "Yes" : "No"
    //  if bool is truthy, return string 'Yes', otherwise return string 'No'



// wordy readable solution
function boolToWord( bool ){
    if (bool) {
      return 'Yes';
    } else {
      return 'No';
    }
  }