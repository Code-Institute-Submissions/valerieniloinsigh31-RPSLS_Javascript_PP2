/**
 * Declaration of constants with global scope for DOM elements 
 * and possible choices. Because these are global scope,
 * the will apply to the full page of Javascript
 */

const playerScoreDom = document.getElementById("player_score");//variable used in scoring system at end
const computerScoreDom = document.getElementById("computer_score");//variable used in scoring system at end

playerScore=0;//this will be incremented on later...do we need to declare these are zero at beginning?
computerScore=0;//this will be incremented on later...do we need to declare these are zero at the beginning?

const playerImage = document.getElementById("player-image");
//this will change based on playerChoice so filepaths need to be 
//named correctly
const computerImage = document.getElementById("computer-image");
//this will change based on computerChoice so filepaths need
//to be named correctly

/**Message prompted is different based on whether the player or the computer wins-maybe use just one message once best of three 
 * function applied
*/
const messages = document.getElementById("messages");//not used yet. section for text to be updated
const buttons = document.getElementsByClassName("controls");
const choices = ["rock", "paper", "scissors", "lizard", "spock"]//an array of the different choices that the user can select
//and that the computer/Lizard will simulataneously generate autoamtically
const computerChoice = choices[Math.floor(Math.random()*5)];//should generate random number within index 0-4

/**
 * Ensures function does not start until the DOM has loaded
 * Added click event listeners to all of the buttons
 */
 document.addEventListener("DOMContentLoaded", function(){
 
    for (let button of buttons) {
        button.addEventListener("click", function() {
                let playerChoice = this.getAttribute("data-choice");//defines playerChoice by button clicked by user
                runGame(playerChoice);
            })
        }
    })

/**
 * The main game function, which is used in the above function.
 * playerChoice defined in above function used as a parameter in the runGame function
 * The idea with the below is images are supposed to update to match the playerChoice and computerChoice
 * do I need to redefine computerChoice here
 * playerChoice and computerChoice used as parameters
 */
function runGame(playerChoice, computerChoice) {

    playerImage.src = `assets/images/${choices[playerChoice]}.png`;//playerChoice changes based on button selected by user
    //data-choice associated with button is number between 0-4 which is then applied as an index number to the choices array
    //Once choice set, template literals used to update image based on filepath name of image matching the updated pathway
    console.log(`assets/images/${choices[playerChoice]}.png`);
    playerImage.alt= choices[playerChoice];

    computerImage.src = `assets/images/${choices[computerChoice]}.png`;//computerChoice defined at top-based on index of 
    //choices array. computerChoice generates random number between 0-4 which selects an index option fro choices array
    //template literals used to trigger image to update based on filepath name alignign with computerChoice
    computerImage.alt= choices[computerChoice];//alt automatically updates too

    let result= compare(choices[computerChoice], choices[playerChoice]);//result declared here, compares choices
}

/**
 * Checks to see who the winners are
 * This is a very important compare function that dictates who is defined as the winner from the player/computer choices
 * the below compare function uses the data choice as an index number to pull one of the choices from the choices array
 **/

function compare(playerChoice, computerChoice){
   if (choices[playerChoice] === choices[computerChoice]) {
       answer = `You chose: ${choices[playerChoice]}<br>The Lizard chose: ${choices[computerChoice]}<br>You are tied!`
   } else if (choices[playerChoice] === "rock") {
       if (choices[computerChoice] === "paper"){
           answer = `You chose: ${choices[playerChoice]}<br>The Lizard chose: ${choices[computerChoice]}<br> Paper beats Rock. You lose this time!`
       } else if (choices[computerChoice] === "scissors"){
            answer = `You chose: ${choices[playerChoice]}<br>The Lizard chose: ${choices[computerChoice]}<br>Rock beats Scissors. You win this time!`
       } else if (choices[computerChoice] === "lizard"){
            answer = `You chose: ${choices[playerChoice]}<br>The Lizard chose: ${choices[computerChoice]}<br>Rock beats Lizard. You win this time!`
       } else {
            answer = `You chose: ${choices[playerChoice]}<br>The Lizard chose: ${choices[computerChoice]}<br>Spock beats Rock. You lose this time!`
       }
   } else if (choices[playerChoice] === "paper") {
       if (choices[computerChoice] === "scissors"){
         answer = `You chose: ${choices[playerChoice]}<br>The Lizard chose: ${choices[computerChoice]}<br>Scissors beats Paper. You lose this time!`
       } else if (choices[computerChoice] === "lizard"){
            answer = `You chose: ${choices[playerChoice]}<br>The Lizard chose: ${choices[computerChoice]}<br>Lizard beats Paper. You lose this time!`
       } else if (choices[computerChoice] === "spock"){
            answer = `You chose: ${choices[playerChoice]}<br>The Lizard chose: ${choices[computerChoice]}<br>Paper beats Spock. You win this time!`
       } else {
            answer = `You chose: ${choices[playerChoice]}<br>The Lizard chose: ${choices[computerChoice]}<br>Paper beats Rock. You win this time!`
       }
   } else if (choices[playerChoice] === "scissors") {
       if (choices[computerChoice] === "rock"){
            answer = `You chose: ${choices[playerChoice]}<br>The Lizard chose: ${choices[computerChoice]}<br>Rock beats Scissors. You lose this time!`
       } else if (choices[computerChoice] === "paper"){
            answer = `You chose: ${choices[playerChoice]}<br>The Lizard chose: ${choices[computerChoice]}<br>Scissors beats Paper. You win this time!`
       } else if (choices[computerChoice] === "lizard"){
            answer = `You chose: ${choices[playerChoice]}<br>The Lizard chose: ${choices[computerChoice]}<br>Scissors beats Lizard. You win this time!`
       } else {
            answer = `You chose: ${choices[playerChoice]}<br>The Lizard chose: ${choices[computerChoice]}<br>Spock beats Scissors. You lose this time!`
       }
   } else if (choices[playerChoice] === "lizard") {
       if (choices[computerChoice] === "rock"){
            answer = `You chose: ${choices[playerChoice]}<br>The Lizard chose: ${choices[computerChoice]}<br>Rock beats Scissors. You lose this time!`
       } else if (choices[computerChoice] === "paper"){
            answer = `You chose: ${choices[playerChoice]}<br>The Lizard chose: ${choices[computerChoice]}<br>Lizard beats Paper. You win this time!`
       } else if (choices[computerChoice] === "spock"){
            answer = `You chose: ${choices[playerChoice]}<br>The Lizard chose: ${choices[computerChoice]}<br>Lizard beats Spock. You win this time!`
       } else {
            answer = `You chose: ${choices[playerChoice]}<br>The Lizard chose: ${choices[computerChoice]}<br>Rock beats Lizard. You lose this time!`
       }
   }  else if (choices[playerChoice] === "spock") {
       if (choices[computerChoice] === "rock"){
            answer = `You chose: ${choices[playerChoice]}<br>The Lizard chose: ${choices[computerChoice]}<br>Spock beats Rock. You win this time!`
       } else if (choices[computerChoice] === "paper"){
            answer = `You chose: ${choices[playerChoice]}<br>The Lizard chose: ${choices[computerChoice]}<br>Paper beats Spock. You lose this time!`
       } else if (choices[computerChoice] === "scissors"){
            answer = `You chose: ${choices[playerChoice]}<br>The Lizard chose: ${choices[computerChoice]}<br>Spock beats Scissors. You win this time!`
       } else {
            answer = `You chose: ${choices[playerChoice]}<br>The Lizard chose: ${choices[computerChoice]}<br>Paper beats Spock. You lose this time!`
       }
   }
   result (answer);
}

/**
 * The below function takes the returned value of the compare function and displays it into the game-text.
 * It also triggers the incrementScore function
 */
 function result(answer){
    let gameEnd = document.getElementById("welcome");
    gameEnd.innerHTML = answer.toUpperCase();

    incrementScore();
}

/**
 * Scoring function. 
 * Done in the score-area. One box for player, one box for lizard
 * Increments the score of the user and computer simulataneously in response to the outcome of each round
 * This code is based on the contents of the template literal options within the previous compare function code
 * If the resulting answer text includes 'win', then the playerScore is increased in increments of 1
 * If the resulting answer text includes 'lose', the Lizard's score increased in increments of 1
 * The inner HTML & template literal will update the '0' declared for each variable at the beginning 
 * //of this page (playerScore and computerScore) currently in the text space
 * The computer will log 0 if it's a tie
 * It also prompts the best of three function-which will declare overallg game winner as player who reaches a score
 * of three first
 * The game resets once the threshold of three has been reached
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
    
    bestOfThree();
}

/**
 * Checks the score and declares game over when threshold has been met.
 * Applies the 'best-of-3' logic
 * Updates the 'messages' text to reveal the winner once either the player or Lizard reaches a score of three
 */
 function bestOfThree () {
    if (playerScore === 3) {
        document.getElementById("messages").innerHTML = "Well done! <br> You beat the lizard! <br>";
       
    } else if (computerScore === 3) {
        document.getElementById("messages").innerHTML = "Hard luck. <br> The lizard destroyed you! <br>";
    }
}