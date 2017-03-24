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
var flipCard = function(cardId) {
	this.getAttribute('data-id');
	console.log("User flipped " + cards[cardID].rank);
	cardsInPlay.push(cards[cardID].rank);
	this.setAttribute('src', cards[cardsID].cardImage)
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);
}
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
	}
 var cardElement = document.createElement("img");
  cardElement.setAttribute("img", "images/back.png");
  cardElement.setAttribute('data-card', i);
  cardElement.addEventListener('click', flipcard);
  document.getElementById('game-board').appendChild(cardElement);
  document.getElementById('img').className='space-fix;'
}
createBoard ();
flipCard(0);
flipCard(2);
