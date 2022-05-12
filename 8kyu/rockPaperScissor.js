
// 8 kyu
// Rock Paper Scissors!
// 63818392% of 4,30212,840 of 37,124brunolm1 Issue Reported

//     JavaScript
//     Node v10.x

//         VIM
//         EMACS

// Instructions
// Output
// Rock Paper Scissors

// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

// rockpaperscissors
// Fundamentals




// cerpinconsafo
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/solutions/javascript/all/best_practices

const rps = (p1, p2) => {
    p1 = p1.toLowerCase();
    p2 = p2.toLowerCase();
    if ((p1 === 'scissors' && p2 === 'paper') || (p1 === 'paper' && p2 === 'rock') || (p1 == 'rock' && p2 === 'scissors')){
           return 'Player 1 won!'
      }
    else if (p1 === p2) {
      return 'Draw!'
    }
    else return 'Player 2 won!'
  };