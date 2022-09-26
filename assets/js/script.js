/**
 * Setting up singular functions with one main task-single responsibility principle.
 * As per 'Love Math', I sketch out a page in my Balsamiq wireframes outlining the singular JS
 * functions that I believed that I would need to have in my design
 */


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
 * 
 * Tailoring the pop-up messages to the button selected by user, based on data choice.
 * Setting the gametype based on the button selected by user
 */
 document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
        if(this.getAttribute("data-choice") === "0") {
            alert("You chose Rock!");
        } else if (this.getAttribute("data-choice") === "1") {
            alert("You chose Paper!");
        } else if (this.getAttribute("data-choice") === "2") {
            alert("You chose Scissors!");
        } else if (this.getAttribute("data-choice") === "3") {
                alert("You chose Lizard!");
        } else if (this.getAttribute("data-choice") === "4") {
                alert("You chose Spock!");
            }
        });
    }
});
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
 * define playerWinner and computerWinner
 */

let playerWinner=

let computerWinner=

/**
 * Message Pop-Ups. Need to define 'playerWinner' to follow along with the rules of the game. There are a number of
 * situations in which the player could beat the computer. List all these. Use 'else if' then and all other situations
 * will prompt the second alert about the Lizard winning
 */
 if(playerWinner) {
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
 * Gets the current score from the DOM and increments it by 1-need to define 'incrementScore at some point
 */

 function incrementScore () {
    let oldScore= parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText= ++oldScore;
    }
    /**
     * Gets the current tally of times the Lizard won the game of RPSLS from the DOM and increments it by 1. Need to define 
     * incrementWrongChoice at some point
     */
    function incrementWrongChoice () {
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
    let userAnswer= document.getElementById("answer-box").value;
    //change calculateAnswer so that it is randomly generated computer answer
    //let calculateWinningAnser = ();
    //let isCorrect = userAnswer === calculateWinningAnswer[0];

    /** 
     * code needs to be added here that apply the rules of the rpsls game, what beats what. Also, define both the user answer 
     * and the computer answer
     */


/**
 * Empty functions that I think I need
 */

 //runGame();
 //checkAnswer();
 //calculateWinningAnswer;
 //(how many variations
 //5 choices for user, 5 choices for computer...1-5=25choices)
 //incrementScore(); (if user wins)
 //incrementWrongChoice(); (if lizard wins)
 
function runGame () {

};

function CheckAnswer () {

}

function calculateWinningAnswer () {

}

function incrementScore () {

}

function incrementWrongAnswer () {

}

function displayComputerRock () {

}

function displayComputerPaper () {
    
}

function displayComputerScissors () {
    
}

function displayComputerLizard () {
    
}
function displayComputerSpock () {
    
}
