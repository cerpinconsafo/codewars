
// 8 kyu
// Removing Elements
// 30714193% of 3,52416,241 of 27,602MorgzC41

//     JavaScript
//     Node v14.x

//         VIM
//         EMACS

// Instructions
// Output
// Past Solutions

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about th

// cerpinconsafo
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/solutions/javascript/all/best_practices

function removeEveryOther(arr){
    let oddCheck = arr.filter(function(v, i) {
    // check the index is odd
        return i % 2 == 0 });
          return oddCheck};