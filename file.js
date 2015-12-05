var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt("I am thinking of a number betwen 1 and 6. What is it?")
if (parseInt(guess) === randomNumber) {
correctGuess = true;
}
if (correctGuess) {
	document.write("<p>You guessed the correct number!</p>");
}
else {
	document.write("<p>Sorry you're wrong dude, the correct answer was " + randomNumber + "</p>")
}