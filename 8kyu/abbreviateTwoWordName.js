// 8 kyu
// Abbreviate a Two Word Name

// JavaScript


// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F
// Fundamentals
// Strings
// Arrays

// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/solutions/javascript/all/best_practices

// split the string at the space into array
//map the 0 index (first letter) of each word to a new array
//join each index with a . inbetween
//change all characters to Upper Case



let abbrevName = fullName => fullName.split(' ').map(name => name[0]).join('.').toUpperCase();
