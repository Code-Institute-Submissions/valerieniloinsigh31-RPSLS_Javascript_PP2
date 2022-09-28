/**
 * Declaration of constants with global scope for DOM elements 
 * and possible choices. Because these are global scope,
 * the will apply to the full page of Javascript
 */

playerScore=0;//this will be incremented on later in the scoring section
computerScore=0;//this will be incremented on later in the scoring section

const playerImage = document.getElementById("player-image");
//this will change based on playerChoice so filepaths need to be 
//named correctly
const computerImage = document.getElementById("computer-image");
//this will change based on computerChoice so filepaths need
//to be named correctly

/**Message prompted is different based on whether the player or the computer wins-maybe use just one message once best of three 
 * function applied
*/
const messages = document.getElementById("messages");//Helpful pop-up messages that aids user understanding
const buttons = document.getElementsByClassName("controls");
const choices = ["rock", "paper", "scissors", "lizard", "spock"]//an array of the different choices that the user can select
//and that the computer/Lizard will simulataneously generate autoamtically

/**
 * Ensures function does not start until the DOM has loaded
 * Added click event listeners to all of the buttons
 */
 document.addEventListener("DOMContentLoaded", function(){
 
    for (let button of buttons) {
        button.addEventListener("click", function() {
                let playerChoice = this.getAttribute("data-choice");//defines playerChoice by button clicked by user
                runGame(playerChoice);//computerChoice should run simultaneously and also be prompted
            })
        }
    })
/**
 * The main game function, which is used in the above function.
 */
function runGame(playerChoice) {

    playerImage.src = `assets/images/${choices[playerChoice]}.png`;//playerChoice changes based on button selected by user
    //data-choice associated with button is number between 0-4 which is then applied as an index number to the choices array
    //Once choice set, template literals used to update image based on filepath name of image matching the updated pathway
    playerImage.alt= choices[playerChoice];
    console.log(`assets/images/${choices[playerChoice]}.png`)
    
     let computerChoice=[Math.floor(Math.random()*5)];
     console.log(`assets/images/${choices[computerChoice]}.png`);
    computerImage.src = `assets/images/${choices[computerChoice]}.png`;//computerChoice defined at top-based on index of 
    //choices array. computerChoice generates random number between 0-4 which selects an index option fro choices array
    //template literals used to trigger image to update based on filepath name alignign with computerChoice
    computerImage.alt= choices[computerChoice];//alt automatically updates too

    let result= compare(playerChoice, computerChoice);//result declared here, compares choices
}

/**
 * Checks to see who the winners are-compare function that dictates who is defined as the winner from the player/computer choices
 * the below compare function uses the data choice as an index number to pull one of the choices from the choices array
 **/

function compare(playerChoice,computerChoice){
   if (choices[playerChoice] === choices[computerChoice]) {
       answer = `You chose: ${choices[playerChoice]}<br>The System chose: ${choices[computerChoice]}<br>You tied on this round!`
   } else if (choices[playerChoice] === "rock") {
       if (choices[computerChoice] === "paper"){
           answer = `You chose: ${choices[playerChoice]}<br>The System chose: ${choices[computerChoice]}<br> Paper beats Rock. You lost this round!`
       } else if (choices[computerChoice] === "scissors"){
            answer = `You chose: ${choices[playerChoice]}<br>The System chose: ${choices[computerChoice]}<br>Rock crushes Scissors. You won this round!`
       } else if (choices[computerChoice] === "lizard"){
            answer = `You chose: ${choices[playerChoice]}<br>The System chose: ${choices[computerChoice]}<br>Rock vaporizes Lizard. You won this round!`
       } else {
            answer = `You chose: ${choices[playerChoice]}<br>The System chose: ${choices[computerChoice]}<br>Spock knocks Rock out. You lost this round!`
       }
   } else if (choices[playerChoice] === "paper") {
       if (choices[computerChoice] === "scissors"){
         answer = `You chose: ${choices[playerChoice]}<br>The System chose: ${choices[computerChoice]}<br>Scissors conquers Paper. You lost this round!`
       } else if (choices[computerChoice] === "lizard"){
            answer = `You chose: ${choices[playerChoice]}<br>The System chose: ${choices[computerChoice]}<br>Lizard bowls over Paper. You lost this round!`
       } else if (choices[computerChoice] === "spock"){
            answer = `You chose: ${choices[playerChoice]}<br>The System chose: ${choices[computerChoice]}<br>Paper trashes Spock. You won this round!`
       } else {
            answer = `You chose: ${choices[playerChoice]}<br>The System chose: ${choices[computerChoice]}<br>Paper annihilates Rock. You won this round!`
       }
   } else if (choices[playerChoice] === "scissors") {
       if (choices[computerChoice] === "rock"){
            answer = `You chose: ${choices[playerChoice]}<br>The System chose: ${choices[computerChoice]}<br>Rock beats Scissors. You lost this round!`
       } else if (choices[computerChoice] === "paper"){
            answer = `You chose: ${choices[playerChoice]}<br>The System chose: ${choices[computerChoice]}<br>Scissors beats Paper. You won this round!`
       } else if (choices[computerChoice] === "lizard"){
            answer = `You chose: ${choices[playerChoice]}<br>The System chose: ${choices[computerChoice]}<br>Scissors beats Lizard. You won this round!`
       } else {
            answer = `You chose: ${choices[playerChoice]}<br>The System chose: ${choices[computerChoice]}<br>Spock beats Scissors. You lost this round!`
       }
   } else if (choices[playerChoice] === "lizard") {
       if (choices[computerChoice] === "rock"){
            answer = `You chose: ${choices[playerChoice]}<br>The System chose: ${choices[computerChoice]}<br>Rock trumps Lizard. You lost this round!`
       } else if (choices[computerChoice] === "paper"){
            answer = `You chose: ${choices[playerChoice]}<br>The System chose: ${choices[computerChoice]}<br>Lizard annihilates Paper. You won this round!`
       } else if (choices[computerChoice] === "spock"){
            answer = `You chose: ${choices[playerChoice]}<br>The System chose: ${choices[computerChoice]}<br>Lizard sends Spock packing. You won this round!`
       } else {
            answer = `You chose: ${choices[playerChoice]}<br>The System chose: ${choices[computerChoice]}<br>Scissors shows the Lizard what's up. You lost this round!`
       }
   }  else if (choices[playerChoice] === "spock") {
       if (choices[computerChoice] === "rock"){
            answer = `You chose: ${choices[playerChoice]}<br>The System chose: ${choices[computerChoice]}<br>Spock trashes Rock. You won this round!`
       } else if (choices[computerChoice] === "paper"){
            answer = `You chose: ${choices[playerChoice]}<br>The System chose: ${choices[computerChoice]}<br>Paper whoops Spock. You lost this round!`
       } else if (choices[computerChoice] === "scissors"){
            answer = `You chose: ${choices[playerChoice]}<br>The System chose: ${choices[computerChoice]}<br>Spock claps back at Scissors. You won this round!`
       } else {
            answer = `You chose: ${choices[playerChoice]}<br>The System chose: ${choices[computerChoice]}<br>Lizard bamboozled Spock. You lost this round!`
       }
   }
   result(answer);
}

/**
 * The below function takes the returned value of the above compare function and displays it in the messages div.
 * It also triggers the incrementScore function
 */
 function result(answer){
    let gameEnd = document.getElementById("messages");
    gameEnd.innerHTML = answer.toUpperCase();

    incrementScore();
}
/**
 * Scoring function. 
 * Increments the score of the user and computer simulataneously in response to the outcome of each round
 * This code is based on the contents of the template literal options within the previous compare function code
 * If the resulting answer text includes 'won', then the playerScore is increased in increments of 1
 * If the resulting answer text includes 'lost', the System's score is increased in increments of 1
 * The inner HTML & template literal will update the '0' declared for each variable at the beginning 
 * of this page (playerScore and computerScore) currently in the text space
 * The computer will log 0 if it's a tie
 * It also prompts the 'bestOfThree' function
 */

 function incrementScore() {

    if (answer.includes(`won`)){
        playerScore++; //increases player score in increments of 1 if sentence includes 'won'
    } else if (answer.includes(`lost`)){
        computerScore++;//increases computer score in increments of 1 if sentence includes 'lost'
    } else {
        console.log('0')//nothing updated if it's a tie (no win/lose)
    }
    document.getElementById("player_score").innerHTML = `${playerScore}`;//updates the number of playerScore
    document.getElementById("computer_score").innerHTML = `${computerScore}`;//updates the number of computerScore
    
    bestOfThree();//triggers bestofThree function
}

/**
 * The bestOfThree function checks the score and declares game over when one of the players reaches a score of three.
 * Updates the 'messages' text to reveal the winner once either the player or the system reaches a score of three
 * Disables the control buttons once a score of 3 is reached for one of players
 */
 function bestOfThree () {
    if (playerScore === 3) {
        document.getElementById("messages").innerHTML = "Well done! You beat the system! Click the reset button to play again.";//when player score reaches 3, this message prompted
        document.getElementById("rock").disabled = true; //Disables control buttons after game ends.
        document.getElementById("paper").disabled = true; //Disables control buttons after game ends.
        document.getElementById("scissors").disabled = true; //Disables control buttons after game ends.
        document.getElementById("lizard").disabled = true; //Disables control buttons after game ends.
        document.getElementById("spock").disabled = true; //Disables control buttons after game ends.
       
    } else if (computerScore === 3) {
        document.getElementById("messages").innerHTML = "Hard luck. The system destroyed you! Click the reset button to play again";//when computer score reaches 3, this message prompted
        document.getElementById("rock").disabled = true; //Disables control buttons after game ends.
        document.getElementById("paper").disabled = true; //Disables control buttons after game ends.
        document.getElementById("scissors").disabled = true; //Disables control buttons after game ends.
        document.getElementById("lizard").disabled = true; //Disables control buttons after game ends.
        document.getElementById("spock").disabled = true; //Disables control buttons after game ends.
    }
}

/**
 * Adding functionality to the reset button
 * Reactivates previously disabled control buttons
 */

 document.getElementById("reset").onclick = function() {
     playerScore=0;
     document.getElementById("player_score").innerHTML = `${"0"}`;//changes playerScore to nil
     console.log(playerScore);
     computerScore=0;
     document.getElementById("computer_score").innerHTML = `${"0"}`;//changes computerScore to nil
     console.log(computerScore);
     document.getElementById("rock").disabled = false; //Reactivates control buttons once reset is selected
     document.getElementById("paper").disabled = false; //Reactivates control buttons once reset is selected
     document.getElementById("scissors").disabled = false; //Reactivates control buttons once reset is selected
     document.getElementById("lizard").disabled = false; //Reactivates control buttons once reset is selected
     document.getElementById("spock").disabled = false; //Reactivates control buttons once reset is selected
     document.getElementById("messages").innerHTML = "Glad to have you back. Let's play again!";//when computer score reaches 3, this message prompted
  };
  