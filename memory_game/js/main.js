console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
//var cards = [cardOne = "queen", cardTwo = "queen", cardThree = "king", cardFour = "king"];

var cardsInPlay = [];

var cardOne = cards[0];
//var cardOne = [];

console.log("User flipped " + cardOne);

cardsInPlay.push(cardOne);

console.log();

var cardTwo = cards[2];

console.log("User flipped " + cardTwo);

cardsInPlay.push(cardTwo);

console.log();

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1])
		alert("You found a match!");
	else 
		alert("Sorry, no match!");
}
