const inquirer = require('inquirer');
const Word = require('./word.js');
const Letter = require('./letter.js');
const letter = new Letter;
const word = new Word;
const prompt = inquirer.prompt({
    type: "input",
    name: "letterGuess",
    message: "Guess a letter!"
});