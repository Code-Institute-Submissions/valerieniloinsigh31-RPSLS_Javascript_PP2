

/**
 * Declare constants for DOM elements 
 * and possible choices
 */
const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");

/**The player-image and computer-image in scope version of game change based on selection of button (e.g. whether rock, paper or scissors was selected) */

const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");

/**Message prompted is different based on whether the player or the computer wins*/
const messages = document.getElementById("messages");
const choices = ["rock", "paper", "scissors", "lizard", "spock"]

/**
 * Ensures function does not start until the DOM has loaded
 * Add event listeners to all of the buttons
 * Using the addEventListener from 'Love Maths' as getElementByTagName allows us to iterate
 * through an array
 */
document.addEventListener("DOMContentLoaded", function()) {
    let buttons = getElementsByTagName("button");

    for (let i=0, i < buttons.length, i++) {
        buttons.addEventListener("click"), function () {
            
        }
    }
}


/**
 * commented out code from scope video
 */
 //document.addEventListener("DOMContentLoaded", function() {

    //for (let button of buttons) {
        //button.addEventListener("click", function() {
            //let playerChoice = this.getAttribute("data-choice");
            //playGame(playerChoice);
        //});}

/**
 * The main game function. Accepts one parameter, which
 * is the data-choice value of the selected button
 * ties the images in with the choices
 */
function playGame(playerChoice) {

    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt= choices[playerchoice];
}

let computerChoice= Math.floor(Math.random()*5);
    computerImage.src = `assets/images/${choices[computerChoice]}.png`;
    computerImage.alt= choices[computerchoice];

    let result= checkWinner(choices[computerChoice], choices[playerChoice]);
}

/**
 * Checks to see who the winners are
 */




/**
 * Message Pop-Ups. Need to define 'isCorrect' to follow along with the rules of the game
 */
 if(isCorrect) {
    alert("Hey! You beat the Lizard Queen who lives in your DOM! :D");
    incrementScore();
} else {
    alert (`Awww...you answered ${userAnswer}. The Lizard Queen of the Dom beat you this time!`);
    incrementWrongAnswer();
}

runGame(calculatedAnswer[1]);
}

/**
 * Scoring system
 */


/**
 * Gets the current score from the DOM and increments it by 1
 */

 function incrementScore () {
    let oldScore= parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText= ++oldScore;
    }
    /**
     * Gets the current tally of times the Lizard won the game of RPSLS from the DOM and increments it by 1
     */
    function incrementWrongAnswer () {
        let oldScore= parseInt(document.getElementById("incorrect").innerText);
        document.getElementById("incorrect").innerText= ++oldScore};
    



//BELOW CODE ALL EXTRACTED FROM LOVE MATHS

// Presents the players choice and the computer's choice and assesses the winner.
//Insert variables and if else for each possible answer

/**
 * Checks the answer against the first element in the 
 * returned calculateCorrectAnswer array
 */

function checkAnswer () {
    let userAnswer= parseInt(document.getElementById("answer-box").value);
    //change calculateAnswer so that it is randomly generated computer answer
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    /** 
     * code needs to be added here that apply the rules of the rpsls game, what beats what. Also, define both the user answer 
     * and the computer answer
     */


    /**
     * code for message pop-ups
     */


    if(isCorrect) {
        alert("Hey! You beat the Lizard Queen who lives in your DOM! :D");
        incrementScore();
    } else {
        alert (`Awww...you answered ${userAnswer}. The Lizard Queen of the DO, beat you this time!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}

/**
 * Scoreboard section
 */

/**
 * Gets the current score from the DOM and increments it by 1
 */

function incrementScore () {
let oldScore= parseInt(document.getElementById("score").innerText);
document.getElementById("score").innerText= ++oldScore;
}
/**
 * Gets the current tally of times the lizard won the game from the DOM and increments it by 1
 */
function incrementWrongAnswer () {
    let oldScore= parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText= ++oldScore};
