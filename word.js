const picked = require('./game-words.js');
let Word = function (picked) {
    this.picked = picked;
};

module.exports = Word;