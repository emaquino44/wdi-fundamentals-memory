
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
console.log("User flipped " + "queen");
console.log("User flipped " + "king");


var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You've found a match") 
	} else {
		alert("Sorry, try again.");
	}
}
var flipCard = function(cardId) {
	this.getAttribute('data-id');
	console.log(cardId);
	cardsInPlay.push(cards[cardID].rank);
	this.setAttribute(src, cards[cardsID].cardImage)
	if(cardsInPlay.length === 2) {
	checkForMatch();
	cardsInPlay = [];
	}
};

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
	}
 var cardElement = document.createElement('img');
  cardElement.setAttribute('src', 'images/back.png');
  cardElement.setAttribute('data-id', i);
  cardElement.addEventListener('click', 'flipCard');
  document.getElementById('game-board').appendChild(cardElement);
}
createBoard();

