//

var UserGuess = null;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var GuessesLeft = 8;
var won = 0;
var lost = 0;
var AlreadyGuessed = [];
var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

var UserGuess = event.key;

document.onkeyup = function (event) {




if ((UserGuess === randomLetter))
    won++;

if ((UserGuess != randomLetter))
    lost++;
GuessesLeft--;

if (GuessesLeft === 0) {
    return;
}
}