const inquirer = require('inquirer');
const Word = require('./word.js');
const Letter = require('./letter.js');
const picked = require('./game-words.js');
const letter = new Letter();
const word = new Word();
let letterArray = [];
let pickedLower = picked.toLowerCase();
let pickedTest = pickedLower.split('');

var guessesLeft = 10;
var map = Array.prototype.map;
var a = map.call(`${picked}`, function (x) {
    return x.replace(/[a-z]/gi, "_");
});

for (i = 0; i < pickedTest.length; i++) {
    letterArray.push("_");
}

console.log(pickedTest);



let replaceLetter = function () {
    inquirer.prompt({
        type: "input",
        name: "letterGuessed",
        message: "Guess a letter!"
    }).then((guessed) => {
        console.log(guessed.letterGuessed);
        var correctBool = false;
        for (i = 0; i < pickedTest.length; i++) {
            if (guessed.letterGuessed === pickedTest[i]) {
                letterArray[i] = guessed.letterGuessed;
                correctBool = true;
            }
        }
        if ((correctBool) === false) {
            guessesLeft--;
            console.log("Nope, guess again!");
            console.log(`Only ${guessesLeft} guesses left!`);
            console.log(letterArray);
            if (guessesLeft > 0) {
                replaceLetter();
            }


        }
        if ((correctBool) === true) {
            console.log("Nice one, keep going!");
            console.log(letterArray);
            if (guessesLeft > 0) {
                replaceLetter();
            }
        }

        if (guessesLeft === 0) {
            console.log("You lose");
        }
    });
    if (letterArray.includes("_") != 1) {
        return console.log("Nailed it, awesome job!");

    }
};

replaceLetter();

// replaceLetter();