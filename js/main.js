// let cardOne = "queen";
// let cardTwo = "queen";
// let cardThree = "king";
// let cardFour = "king";


// console.log("User flipped " + cardThree);

const cards = ["queen", "queen", "king", "king"];

const cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} 	else {
		alert("Sorry, try again.");
	}
}

function flipCard(cardID) {

	console.log("User flipped " + cards[cardID]);
	
	checkForMatch();

	cardsInPlay.push(cards[cardID]);

}

flipCard(0);
flipCard(2);


