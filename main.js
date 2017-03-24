console.log("Up and running!");
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
cardsInPlay.push('cardOne', 'cardTwo');
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







