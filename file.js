var firstName = prompt("What is your name?");
var permission = prompt("Hello! " + firstName + " Type in 'a' for fun. Type in 'b' for random number generator.");

if (permission === "a" )
{
	alert("Please let Ricky get this domain name, it would be most appreciated c:");
}



else

{
var number = prompt("Give me a number");
number = parseInt(number);
var randomNumberA = number * (Math.random() * 8);
var roundrandom = Math.ceil(randomNumberA);
alert(roundrandom);
}