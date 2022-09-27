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

/**The player-image and computer-image in scope version of game change based on selection of button (e.g. whether rock, paper, scissors, lizard or spock was selected)
 * For each of the images, what needs to be done is the image will update based on what playerChoice and computerChoices were
 * selected. To do this, five images need to be saved to the images folder and code written so that the selection of a certain
 * choice pronpts this image to appear as opposed to any of the others. 'Src...used for this.'. The user image is 'player-image'
 * and the computer image is 'computer-image'...is the code written in JS or CSS for which image to prompt? Try writing this code
 * in CSS using an 'if else' formular...prompting the different images based on the data choice in the case of both the
 * playerChoice and computerChoice
 */

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
 * Defining playerChoice by the option selected by the user-
 * inspired by the scope video
 * Pay attention to the 'playGame' parameter, where is this 
 * defined
 */

 document.addEventListener("DOMContentLoaded", function() {

    for (let button of buttons) {
        button.addEventListener("click", function() {
                let playerChoice = this.getAttribute("data-choice");
                playGame(playerChoice);
            }
        });
    
/**
 * The main game function, which is a parameter used in the above playerChoice function.
 * . Accepts one parameter, which
 * in the button function
 * is the data-choice value of the selected button
 * ties the images in with the choices
 * look at the naming of the code, choices[playerChoice], how do we define this
 * alt automatically updates
 * image naming needs to match this format choices[playerChoice]= per the 'const choices array'= "rock", "paper", 
 * "scissors", "lizard", "spock"
 * the idea here is the '$choices[playerChoice]' will change based on what player chose and then match filepath, e.g.
 * rock, paper, scissors, lizard or spock
 */
function playGame(playerChoice) {

    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt= choices[playerchoice];
}
/**
 * Defining the computer choice to be randomly generated-5 choices to choose form in the array (0,1,2,3,4)
 * Additionally, as per player choice, the correct corresponding inage should be triggered once selection is made
 */
let computerChoice= Math.floor(Math.random()*5);
    computerImage.src = `assets/images/${choices[computerChoice]}.png`;
    computerImage.alt= choices[computerchoice];

    let result= checkWinner(choices[computerChoice], choices[playerChoice]);
}

/**
 * Checks to see who the winners are
 * define playerWinner and computerWinner
 * how do we write this compare function
 * how we display the parameters
 * 
 * This is a very important compare function that dictates who is defined as the winne from the player/computer
 * based on selected user chocie versus randomyl generated computer choice
 * can an 'if else' be used to define logic in both of these cases?
 * probably only need to define one...playerWinner
 * also need to define checkWinner function
 */

function checkWinner () {

}

let playerWinner=

let computerWinner=

/**
 * Message Pop-Ups. Need to define 'playerWinner' to follow along with the rules of the game. There are a number of
 * situations in which the player could beat the computer. List all these. Use 'else if' then and all other situations
 * will prompt the second alert about the Lizard winning
 * The below 'if else' formula will dictate what message appears and whether the incrementScore function is triggered or
 * the incrementWrongChoice function is triggered
 */
 if(playerWinner) {
    alert("Hey! You beat the Lizard Queen who lives in your DOM! :D");
    incrementScore();
} else {
    alert (`Awww...you answered ${userAnswer}. The Lizard Queen of the Dom beat you this time!`);
    incrementWrongChoice();
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
 //1. runGame();
 //2. displayUserAnswer();-turn selection into corresponding image saved in images folder
 //3. displayLizardAnswer();-generate random selection from computer and turn into correspdoning image saved in images folder
 //4. checkWinner();= a compare function that compares playerChoice to computerChoice and determines a winner
 //5. incrementScore(); (if user wins)
 //6. incrementWrongChoice(); (if lizard wins)
 //7. bestofThree&reset-put a limit or cap/ceiling of three wins per player so a definite winner can be chosen and then it resets
 
 //1.
function runGame () {
let playerChoice=clickedButton;
let computerChoice=Math.floor(Math.random()*5);
};

//2.
function displayUserAnswer () {

}

//3.
function displayLizardAnswer () {

}

//4.
function checkWinner () {

}

//5.
function incrementScore () {
    let oldScore= parseInt(document.getElementById("player_score").innerText);
    document.getElementById("player_score").innerText= ++oldScore;
    }

//6.
function incrementWrongChoice () {
    let oldScore= parseInt(document.getElementById("computer_score").innerText);
    document.getElementById("computer_score").innerText= ++oldScore};

//7.
function bestOfThree () {

}


//Code taken from slack to draw inspiration from:

/**
 * Takes userInput from event activation and assigns a value to it.
 * Computer answer is generated from a random number and an assigned value.
 */
 function runGame (userInput){
    
    console.log(userInput)

    let compInput = Math.floor(Math.random()*5)+1;
    switch(compInput){
        case 1: compInput = "rock";
        break;
        case 2 : compInput = "paper";
        break;
        case 3 : compInput = "scissors";
        break;
        case 4 : compInput = "lizard";
        break;
        case 5 : compInput = "spock";
        break;
    }
    console.log(compInput)
}

/**
 * Takes the values of the user input and computer choice and compares them.
 * Decides who has won the round.
 */
 function compare(userInput, compInput){
    if (userInput === compInput){
        console.log('tie')
    }

}
