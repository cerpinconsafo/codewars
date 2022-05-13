
// 8 kyu
// Beginner Series #1 School Paperwork
// 2827490% of 5,48024,422 of 53,573Vortus

//     JavaScript
//     Node v14.x

//         VIM
//         EMACS

// Instructions
// Output

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
// Example:

// n= 5, m=5: 25
// n=-5, m=5:  0

// Waiting for translations and Feedback! Thanks!
// // 

// cerpinconsafo
// https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/solutions/javascript/all/best_practices


function paperwork(n, m) {
    if (n <= 0 || m <= 0) {
      return 0;
    }
    else return (n*m);
  }