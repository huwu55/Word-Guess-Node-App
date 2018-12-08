var Letter = require('./letter.js');

function Word(w){
    this.arrChar = [];

    for (var i = 0; i < w.length; i++){
        this.arrChar.push(new Letter(w[i]));
    }

    this.returnWord = function(){
        var word = "";

        for (var i = 0; i < w.length; i++){
            word += this.arrChar[i].returnChar();
        }

        return word;
    };

    this.updateGuessedWord = function(c){
        var bool = false;
        for (var i = 0; i < w.length; i++){
            if (this.arrChar[i].updateGuessedChar(c))
                bool = true;
        }
        return bool;
    };
}

module.exports = Word;