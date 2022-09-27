/**
 * Setting up singular functions with one main task-single responsibility principle.
 * As per 'Love Math', I sketch out a page in my Balsamiq wireframes outlining the singular JS
 * functions that I believed that I would need to have in my design. This was informed by the tutorials, slack and the 
 * scope video.
 */


/**
 * Declaration of constants with global scope for DOM elements 
 * and possible choices. Because these are global scope,
 * will apply to the full page of Javascript
 */
const buttons= document.getElementById("controls");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");

/**The player-image and computer-image in scope version of game change based on selection of button (e.g. whether rock, paper, scissors, lizard or spock was selected) */

const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");

/**Message prompted is different based on whether the player or the computer wins*/
const messages = document.getElementById("messages");
/**
 * The different choices available to the user to select and, one of which, the computer will randomly 
 * generate simultaneously:
 */
const choices = ["rock", "paper", "scissors", "lizard", "spock"]

/**
 * Ensures function does not start until the DOM has loaded
 * Add event listeners to all of the buttons
 * 
 * Defining playerChoice by the option selected by the user
 */

 document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
                let playerChoice = this.getAttribute("data-choice");
                playGame(playerChoice);
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
/**
 * How do I link the computerChoice in with an array? do I use parseint to make the strings numbers? How do I
 * tie the rnadomly generated number in with the choice array?
 */
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
 *  When logic is defined/written for what destroys what, ensure to put incrementScore/incrementWrongChoice
 * functions into the correct places so that they are called once needed
 */


/**
 * Gets the current score from the DOM and increments it by 1-need to define 'incrementScore at some point
 */

 function incrementScore () {
    let oldScore= parseInt(document.getElementById("player_score").innerText);
    document.getElementById("player_score").innerText= ++oldScore;
    }
    /**
     * Gets the current tally of times the Lizard won the game of RPSLS from the DOM and increments it by 1. Need to define 
     * incrementWrongChoice at some point. Need to call these functions at appropriate times, e.g. if user has selected an options
     * that destroys computer/Lizard's option, incrementScore will be updated. If computer/Lizard's option destorys user's
     * option, incrementWrongChoice will be called
     */
    function incrementWrongChoice () {
        let oldScore= parseInt(document.getElementById("computer_score").innerText);
        document.getElementById("computer_score").innerText= ++oldScore};
    
    /** 
     * code needs to be added here that apply the rules of the rpsls game, what beats what. Also, define both the user answer 
     * and the computer answer
     */


/**
 * Empty functions that I think I need
 */
 //runGame();
 //displayUserAnswer();-turn selection into corresponding image saved in images folder
 //displayLizardAnswer();-generate random selection from computer and turn into correspdoning image saved in images folder
 //compareAnswers();
 //incrementScore(); (if user wins)
 //incrementWrongChoice(); (if lizard wins)
 //bestofThree-put a limit or cap/ceiling of three wins per player so a definite winner can be chosen and then it resets
 
function runGame () {
let playerChoice=clickedButton;
let computerChoice=Math.floor(Math.random()*5);
};

function displayUserAnswer () {

}

function displayLizardAnswer () {

}

function compareAnswers () {

}

function incrementScore () {

}

function incrementWrongChoice () {

}

function bestOfThree () {

}