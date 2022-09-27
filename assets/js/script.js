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
const buttons= document.getElementById("controls");//buttons activated and used to retrieve data-choice
const playerScore = document.getElementById("player-score");//variable used in scoring system at end
const computerScore = document.getElementById("computer-score");//variable used in scoring system at end
playerScore=0;//this will be increment 
computerScore=0;//this will be incremeted

/**The player-image and computer-image in scope version of game change based on selection of button (e.g. whether rock, paper, scissors, lizard or spock was selected)
 * For each of the images, what needs to be done is the image will update based on what playerChoice and computerChoices were
 * selected. To do this, five images need to be saved to the images folder and code written so that the selection of a certain
 * choice pronpts this image to appear as opposed to any of the others. 'Src...used for this.'. The user image is 'player-image'
 * and the computer image is 'computer-image'...is the code written in JS or CSS for which image to prompt? Try writing this code
 * in CSS using an 'if else' formular...prompting the different images based on the data choice in the case of both the
 * playerChoice and computerChoice
 */

const playerImage = document.getElementById("player-image");
//this will change based on playerChoice so filepaths need to be 
//named correctly
const computerImage = document.getElementById("computer-image");
//this will change based on computerChoice so filepaths need
//to be named correctly

/**Message prompted is different based on whether the player or the computer wins-maybe use just one message once best of three 
 * function applied
*/
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
 * Pay attention to the 'runGame'
 * playerChoice defined
 */

 document.addEventListener("DOMContentLoaded", function() {

    for (let button of buttons) {
        button.addEventListener("click", function() {
                let playerChoice = this.getAttribute("data-choice");
                runGame(playerChoice);
            }
        });

/**
 * The main game function, which is a parameter used in the above playerChoice function.
 * Accepts one parameter, which
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
function runGame(playerChoice) {

    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt= choices[playerChoice];

/**
 * Defining the computer choice to be randomly generated-5 choices to choose form in the array (0,1,2,3,4)
 * used a switch in this instance and equated the choices to cases
 * Additionally, as per player choice, the correct corresponding image should be triggered once selection is made
 * Explain why I have used a switch
 */
let computerChoice= Math.floor(Math.random() * 5);

//commented out code, could also use a switch instead of math and array and index
//switch(computerChoice){
    //case 1: computerChoice = "rock";
    //break;
    //case 2 : computerChoice = "paper";
    //break;
    //case 3 : computerChoice = "scissors";
    //break;
    //case 4 : computerChoice = "lizard";
    //break;
    //case 5 : computerChoice = "spock";
    //break;}


    computerImage.src = `assets/images/${choices[computerChoice]}.png`;
    computerImage.alt= choices[computerChoice];

    let result= compare(choices[computerChoice], choices[playerChoice]);
}

/**
 * Checks to see who the winners are
 * define playerWinner and computerWinner
 * how do we write this compare function
 * how we display the parameters
 * 
 * This is a very important compare function that dictates who is defined as the winner from the player/computer
 * based on selected user chocie versus randomyl generated computer choice
 * can an 'if else' be used to define logic in both of these cases?
 * probably only need to define one...playerWinner
 * also need to define compare function
 */

//function compare () {
//}
//let playerWinner=
//if playerChoice=rock
//let computerWinner=

//code taken from slack to be adapted to my case, to be inspired by, not to copy directly:
//summary of what we are doing: compare the two defined variables playerChoice and computerChoice
//we use the term 'outcome' in this code, could we use 'result' instead
//It takes the values of the playerChoice and computerChoice and compares them and then decides who has won the round
//we use a long 'if else' statement to consider all of the potential outcomes/results
//for the choices, take it one by one and have an else if for each of the alternatives in each case
///**

//for below function, is it sufficient to say computerChoice...will that be word format...should parseInt be used

function compare(playerChoice, computerChoice){
   if (playerChoice === computerChoice) {
       answer = `You chose: ${playerChoice}<br>The Lizard chose: ${computerChoice}<br>You are tied!`
   } else if (playerChoice === 'rock') {
       if (computerChoice === 'paper'){
           answer = `You chose: ${playerChoice}<br>The Lizard chose: ${computerChoice}<br> Paper beats Rock. You lose this time!`
       } else if (computerChoice === 'scissors'){
            answer = `You chose: ${playerChoice}<br>The Lizard chose: ${computerChoice}<br>Rock beats Scissors. You win this time!`
       } else if (computerChoice === 'lizard'){
            answer = `You chose: ${playerChoice}<br>The Lizard chose: ${computerChoice}<br>Rock beats Lizard. You win this time!`
       } else {
            answer = `You chose: ${playerChoice}<br>The Lizard chose: ${computerChoice}<br>Spock beats Rock. You lose this time!`
       }
   } else if (playerChoice === 'paper') {
       if (computerChoice === 'scissors'){
         answer = `You chose: ${playerChoice}<br>The Lizard chose: ${computerChoice}<br>Scissors beats Paper. You lose this time!`
       } else if (computerChoice === 'lizard'){
            answer = `You chose: ${playerChoice}<br>The Lizard chose: ${computerChoice}<br>Lizard beats Paper. You lose this time!`
       } else if (computerChoice === 'spock'){
            answer = `You chose: ${playerChoice}<br>The Lizard chose: ${computerChoice}<br>Paper beats Spock. You win this time!`
       } else {
            answer = `You chose: ${playerChoice}<br>The Lizard chose: ${computerChoice}<br>Paper beats Rock. You win this time!`
       }
   } else if (playerChoice === 'scissors') {
       if (computerChoice === 'rock'){
            answer = `You chose: ${playerchoice}<br>The Lizard chose: ${computerChoice}<br>Rock beats Scissors. You lose this time!`
       } else if (computerChoice === 'paper'){
            answer = `You chose: ${playerChoice}<br>The Lizard chose: ${computerChoice}<br>Scissors beats Paper. You win this time!`
       } else if (computerChoice === 'lizard'){
            answer = `You chose: ${playerChoice}<br>The Lizard chose: ${computerChoice}<br>Scissors beats Lizard. You win this time!`
       } else {
            answer = `You chose: ${playerChoice}<br>The Lizard chose: ${computerChoice}<br>Spock beats Scissors. You lose this time!`
       }
   } else if (playerChoice === 'lizard') {
       if (computerChoice === 'rock'){
            answer = `You chose: ${playerChoice}<br>The Lizard chose: ${computerChoice}<br>Rock beats Scissors. You lose this time!`
       } else if (computerChoice === 'paper'){
            answer = `You chose: ${playerChoice}<br>The Lizard chose: ${computerChoice}<br>Lizard beats Paper. You win this time!`
       } else if (computerChoice === 'spock'){
            answer = `You chose: ${playerChoice}<br>The Lizard chose: ${computerChoice}<br>Lizard beats Spock. You win this time!`
       } else {
            answer = `You chose: ${playerChoice}<br>The Lizard chose: ${computerChoice}<br>Rock beats Lizard. You lose this time!`
       }
   }  else if (playerChoice === 'spock') {
       if (computerChoice === 'rock'){
            answer = `You chose: ${playerChoice}<br>The Lizard chose: ${computerChoice}<br>Spock beats Rock. You win this time!`
       } else if (computerChoice === 'paper'){
            answer = `You chose: ${playerChoice}<br>The Lizard chose: ${computerChoice}<br>Paper beats Spock. You lose this time!`
       } else if (computerChoice === 'scissors'){
            answer = `You chose: ${playerChoice}<br>The Lizard chose: ${computerChoice}<br>Spock beats Scissors. You win this time!`
       } else {
            answer = `You chose: ${playerChoice}<br>The Lizard chose: ${computerChoice}<br>Paper beatss Spock. You lose this time!`
       }
   }
   result (answer);
}

/**
 * Scoring code
 */

/**
 * Score function. Increments the score of the computer or user.
 * This code is based on the contents of the template literal options within the previous compare function code
 * If the resulting answer includes 'win', then the playerScore is increased in increments of 1
 * If the resulting answer includes 'lose', the Lizard's score increased in increments of 1
 * the inner HTML & template literal will update the '0' currently in the tex space
 */

 function incrementScore() {

    if (answer.includes(`win`)){
        playerScore++;
    } else if (answer.includes(`lose`)){
        computerScore++;
    } else {
        console.log('0')
    }
    document.getElementById("player_score").innerHTML = `Your Score:<br>${playerScore}`;
    document.getElementById("computer_score").innerHTML = `Lizard's Score:<br>${computerScore}`;
    
    checkScore();
}

/**
 * Checks the score and declares game over when threshold has been met.
 * Applies best of 3 logic
 */
 function checkScore () {
    if (playerScore === 3) {
        document.getElementById("welcome").innerHTML = "Well done! <br> You have won! <br>";
       
    } else if (computerScore === 3) {
        document.getElementById("welcome").innerHTML = "Game Over! <br> You have lost! <br>";
    }
}



/**
 * Message Pop-Ups. Need to define 'playerWinner' if user wins best of three to follow along with the rules of the game. There are a number of
 * situations in which the player could beat the computer. List all these. Use 'else if' then and all other situations
 * will prompt the second alert about the Lizard winning
 * The below 'if else' formula will dictate what message appears and whether the incrementScore function is triggered or
 * the incrementWrongChoice function is triggered
 */
 //if(playerWinner) {
    //alert("Hey! You beat the Lizard Queen who lives in your DOM! :D");
    //incrementScore();
//} else {
    //alert (`Awww...you answered ${playerChoice}. The Lizard Queen of the Dom beat you this time!`);
    //incrementWrongChoice();
//}

/**
 * Scoring system
 *  When logic is defined/written for what destroys what, ensure to put incrementScore/incrementWrongChoice
 * functions into the correct places so that they are called once needed
 */


/**
 * Gets the current score from the DOM and increments it by 1-need to define 'incrementScore at some point
 */

 //function incrementScore () {
    //let oldScore= parseInt(document.getElementById("player_score").innerText);
    //document.getElementById("player_score").innerText= ++oldScore;
    //}
    /**
     * Gets the current tally of times the Lizard won the game of RPSLS from the DOM and increments it by 1. Need to define 
     * incrementWrongChoice at some point. Need to call these functions at appropriate times, e.g. if user has selected an options
     * that destroys computer/Lizard's option, incrementScore will be updated. If computer/Lizard's option destorys user's
     * option, incrementWrongChoice will be called
     */
    //function incrementWrongChoice () {
        //let oldScore= parseInt(document.getElementById("computer_score").innerText);
        //document.getElementById("computer_score").innerText= ++oldScore};

/**
 * Empty functions that I think I need
 */
 //1. runGame();
 //2. displayUserAnswer();-turn selection into corresponding image saved in images folder
 //3. displayLizardAnswer();-generate random selection from computer and turn into correspdoning image saved in images folder
 //4. compare();= a compare function that compares playerChoice to computerChoice and determines a winner
 //5. incrementScore(); (if user wins)
 //6. incrementWrongChoice(); (if lizard wins)
 //7. bestofThree&reset-put a limit or cap/ceiling of three wins per player so a definite winner can be chosen and then it resets
 
 //1.
//function runGame () {
//let playerChoice=clickedButton;
//let computerChoice=Math.floor(Math.random()*5);
//};

//2.
//function displayUserAnswer () {

//}

//3.
//function displayLizardAnswer () {

//}

//4.
//function compare(playerChoice, computerChoice){
    //if (playerChoice === computerChoice){
        //console.log('You and the lizard have tied this time!')
    //}

//}

//5.
//function incrementScore () {
    //let oldScore= parseInt(document.getElementById("player_score").innerText);
    //document.getElementById("player_score").innerText= ++oldScore;
    //}

//6.
//function incrementWrongChoice () {
    //let oldScore= parseInt(document.getElementById("computer_score").innerText);
    //document.getElementById("computer_score").innerText= ++oldScore};

//7.
//function bestOfThree () {

//}


//Code taken from slack to draw inspiration from:

/**
 * Takes playerChoice from event activation and assigns a value to it.
 * Computer answer is generated from a random number and an assigned value,
 * using a switch statement instead of 'if else'
 */
 //function runGame (playerChoice){
    
    //console.log(playerChoice)

    //let computerChoice = Math.floor(Math.random()*5)+1;
    //switch(computerChoice){
        //case 1: computerChoice = "rock";
        //break;
        //case 2 : computerChoice = "paper";
        //break;
        //case 3 : computerChoice = "scissors";
        //break;
        //case 4 : computerChoice = "lizard";
        //break;
        //case 5 : computerChoice = "spock";
        //break;
    //}
    //console.log(computerChoice)
//}

/**
 * Takes the values of the playerChoice and computerChoice and compares them.
 * Decides who has won the round.
 */
 //function compare(playerChoice, computerChoice){
    //if (playerChoice === computerChoice){
        //console.log('You and the lizard have tied this time!')
    //}
//}
