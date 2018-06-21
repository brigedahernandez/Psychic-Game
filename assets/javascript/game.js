//

var UserGuess = null;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var GuessesLeft = 8;
var won = 0;
var lost = 0;
var AlreadyGuessed = [];




document.onkeyup = function (event) {

    var UserGuess = event.key;
    var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

if ((UserGuess === randomLetter))
    won++;
    document.write 

if ((UserGuess != randomLetter))
    lost++;
GuessesLeft--;

if (GuessesLeft === 0) {
    return;
}

document.querySelector("#game").innerHTML = "You chose: " + UserGuess + ". The computer chose: " + randomLetter;
}