
// 8 kyu
// Beginner - Reduce but Grow
// 29311092% of 5,07518,157 of 45,303PG11 Issue Reported

//     JavaScript
//     Node v14.x

//         VIM
//         EMACS

// Instructions
// Output

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// cerpinconsafo
// https://www.codewars.com/kata/57f780909f7e8e3183000078/solutions/javascript/all/best_practices


let grow = arr =>  arr.reduce((a, b) => a * b);