
// 7 kyu
// Reverse words
// 109226190% of 5,97526,394 of 61,461jnicol
// JavaScript
// Train AgainNext Kata

//     Details
//     Solutions
//     Forks (14)
//     Discourse (419)
//     Translations

// Fork|Collect|

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"



// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/solutions/javascript/all/best_practices

let reverseWords = str =>  str.split("").reverse().join("").split(" ").reverse().join(" ");