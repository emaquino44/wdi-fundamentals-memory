console.log("User flipped " + "queen");
console.log("User flipped " + "king");
var cards = [
	{	
		rack: 'queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png',
	},
	{
		rack: 'queen',
		suit: 'diamonds',
		cardImage: 'images/queen-of-diamonds.png',
	},
	{
		rack: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rack: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	},
];
var cardsInPlay = [];
cardsInPlay.push('queen', 'king');
var cardOne = cardsInPlay[0];
var cardTwo = cardsInPlay[2];
console.log("User flipped king" + cardTwo);
if(cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[2]) {
		alert("You've found a match") 
	} else {
		alert("Sorry, try again.");
	}
}
var flipCard = function() {
	console.log("User flipped " + cards[cardID].rank);
	cardsInPlay.push(cards[cardID].rank);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);
}



