var UserGuess = "null" ;
var  alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var GuessNumber = "0" ;
var won = "0" ;
var lost = "0" ;
var AlreadyGuessed = "[]" ;
var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

document.onkeyup = function(event) {}

var UserGuess = event.key;

if ((UserGuess === randomLetter))
won++;

if ((UserGuess != randomLetter))
lost++;



