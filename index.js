var Word = require('./word.js');
var inquirer = require("inquirer");

var guessesRemain = 10;

var words = [
    "Gellert Grindelwald",
    "Newt Scamander",
    "Porpentina Goldstein",
    "Credence Barebone",
    "Queenie Goldstein",
    "Percival Graves",
    "Jacob Kowalski",
    "Seraphina Picquery",
    "Modesty",
    "Albus Dumbledore",
    "Nagini",
    "Leta Lestrange",
    "Theseus Scamander",
    "Yusuf Kama"
];

var currentWord = "";

function onGuess(){
    inquirer.prompt({
        type: "input",
        message: "Guess a letter!",
        name: "letter"
    }).then(function(response){
        var updated = currentWord.updateGuessedWord(response.letter[0]);
        var returnedWord = currentWord.returnWord();
        console.log(returnedWord);
        if(!updated){
            console.log("INCORRECT!!!\n");
            guessesRemain--;
            console.log("Guesses remain: "+guessesRemain);
            if (guessesRemain === 0)    {
                console.log("\nNo more guesses, new round begins!!")
                reset();
            }
            else onGuess();
        }
        else{
            console.log("CORRECT!\n");
            if (returnedWord.includes("_"))
                onGuess();
            else{
                console.log("You got it right! Next word!\n");
                reset();
            }
        }
    });
}

function reset(){
    var rand = words[Math.floor(Math.random() * words.length)];
    currentWord = new Word(rand);
    //console.log(rand);
    guessesRemain = 10;
    console.log(currentWord.returnWord());
    onGuess();
}

reset();