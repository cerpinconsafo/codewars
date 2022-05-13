
// 8 kyu
// Define a card suit
// 683893% of 1,2454,515 of 8,786Dmitry Kudla

//     JavaScript
//     Node v14.x

//         VIM
//         EMACS

// Instructions
// Output

// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

// cerpinconsafo
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/solutions/javascript/all/best_practice

// my really ugly solution

function defineSuit(card) {
    //   ('3♣') -> return 'clubs'
    // ('3♦') -> return 'diamonds'
    // ('3♥') -> return 'hearts'
    // ('3♠') -> return 'spades'
      if (card.includes("♣")){ return 'clubs'}
      else if(card.includes("♦")){ return 'diamonds'}
      else if (card.includes("♥")){ return 'hearts'}
      else if (card.includes("♠")){ return 'spades'}
    }
