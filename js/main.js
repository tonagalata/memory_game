// let cardOne = "queen";
// let cardTwo = "queen";
// let cardThree = "king";
// let cardFour = "king";


// console.log("User flipped " + cardThree);

const cards = ["queen", "queen", "king", "king"];

const cardsInPlay = [];

let cardOne = cards[0];

cardsInPlay.push(cardOne);

let cardTwo = cards[2];

cardsInPlay.push(cardTwo);

// let cardThree = cards[2];

// cardsInPlay.push(cardThree);

// let cardFour = cards[3];

// cardsInPlay.push(cardFour);



if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}