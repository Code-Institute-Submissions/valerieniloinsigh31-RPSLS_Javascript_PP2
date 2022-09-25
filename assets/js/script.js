

/**
 * Declare constants for DOM elements 
 * and possible choices
 */
const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const messages = document.getElementById("messages");
const choices = ["rock", "paper", "scissors", "lizard", "spock"]

/**
 * Add event listeners to all of the buttons
 */
 document.addEventListener("DOMContentLoaded", function() {

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let playerChoice = this.getAttribute("data-choice");
            playGame(playerChoice);
        });}

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





//BELOW CODE ALL EXTRACTED FROM LOVE MATHS
//Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them



/**
 * The main game "loop" called when the script is first loaded
 * and after the user's answer has been processed
 */
,function runGame (gameType) {
document.getElementById ("answer-box").value= "";
document.getElementById ("answer-box").focus();

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
 * Gets the current score from the DOM and increments it by 1
 */

function incrementScore () {
let oldScore= parseInt(document.getElementById("score").innerText);
document.getElementById("score").innerText= ++oldScore;
}
/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer () {
    let oldScore= parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText= ++oldScore};
