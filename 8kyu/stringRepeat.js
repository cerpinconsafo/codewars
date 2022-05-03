// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"


// cerpinconsafo
// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/javascript

function repeatStr (n, s) {
    let newString = '';
    for (let i = 0; i < n; i++)
    {
      newString += s;
    }
      return newString;
    }