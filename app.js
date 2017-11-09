const inquirer = require('inquirer');
const Word = require('./word.js');
const Letter = require('./letter.js');
const picked = require('./game-words.js');
const letter = new Letter();
const word = new Word();
let letterArray = [];
let pickedTest = picked.split('');

console.log(pickedTest);
inquirer.prompt({
    type: "input",
    name: "letterGuessed",
    message: "Guess a letter!"
}).then((guessed) => {
    console.log(guessed.letterGuessed);
    for (i = 0; i < pickedTest.length; i++) {
        if (guessed.letterGuessed === pickedTest[i]) {
            console.log("worked");
        }

    }






});




var map = Array.prototype.map;
var a = map.call(`${picked}`, function (x) {
    return x.replace(/[a-z]/gi, "_");
});