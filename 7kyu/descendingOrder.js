// 7 kyu
// Descending Order

// JavaScript

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:

// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321
// Fundamentals
// Functions
// Control Flow
// Basic Language Features

// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/solutions/javascript/all/best_practices




//
//********************
// this is the best way to solve localStorage

function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }

//   this is my ass backwards way (through pseudocoding, creating variables, and checking logs)
//***********************
//


function descendingOrder(n){ 
  
    //check if non negative number
      if ( n >= 0  ){
        //convert num to string
         n = n + ""
      
          //turn string into individual chars with split, and then 
          let arrOfNums = n.split("")
          //use map to create a new array with Number function to convert each string to an integer
          .map(Number);
          console.log("This is arrOfNums", arrOfNums);
      
          //sort the array from highest to lowest
          let highToLow = arrOfNums.sort((a, b) => b-a)
          console.log("This is highToLow", highToLow);
        //use join to combine the all indexes as one string, empty quotes "" insure not spaces or commas when joining
          let joined = highToLow.join("")
          console.log("This is joined", joined)
        
        //parseInt to convert the joined string into an integer
          let newNum = parseInt(joined)
          console.log("This is newNum", newNum)
        
        
          return newNum
             }   
    }


    