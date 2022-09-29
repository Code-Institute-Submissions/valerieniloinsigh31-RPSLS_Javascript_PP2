# Javascript-PP2
<h1>Rock, Paper, Scissors, Lizard, Spock-Javascript PP2<h1>


<h2><b>Minimum Viable Product-Logic</b></h2>
<p>Due to the timeline for submissions and my schedule of working full-time during the week, I decided to focus on completing one of the outlined tasks to the highest possible quality level as opposed to overcomplicating an original design that I would not have time to execute properly. I planned on completing the Javascript modules in a comprehensive fashion, giving myself time to absorb the logic and to develop a proper understanding prior to starting the project. Accordingly, I took my time going through the all of videos (on Comparative Programming Languages as well as Javascript Essentials)
  I decided on the 'Rock, Paper, Scissors, Lizard, Spock' project, as I was familiar with the traditional game and appreciated the scope/demonstration video provided by CI.
I planned on having shorter simpler HTML and CSS pages (as advised) so that I could truly focus on ensuring the Javascript code was adequate.</p>

<h2>Overview of the Project</h2>

<b>Explanation of the purpose of the game:</b> 
<p>An interactive game of 'Rock, Paper, Scissors,Lizard, Spock' that enables users to play the well-known game against the computer without being able to easily predict an outcome. My version of the game keeps a tally of the score and the winner is decided by the best of three rounds and then the game becomes disabled and the reset button must be clicked to play again. It is simple to understand and easily accessible. All you need to play is yourself and your laptop.</p>
<b>Value that the game provides to its users:</b> 
<p>An entertaining and engaging game that is spontaneous in it's selection. It offers an impartial competitor for the user to play against in the game of 'Rock, Paper, Scissors, Lizard, Spock', as it is the user versus the computer essentially, which generates its answers at random.</p>
 <b>Who it is intended to target:</b> 
 <p>Ages 14+. Anybody in a waiting room of any sort or on a long train/bus journey or just on a cheeky lunch break from school or work. Only one player is required and no actual rocks, paper, scissors, lizard or spock are needed at all.</p>
 <b>How it will be useful to the target audience:</b> 
 <p>It is an engaging and interactive game that people can play on their own. It is useful as it does not require mrore than one person and provides spontaneous, interactive fun that is easy to understand.It does not require a large amount of concentration at a time and it can be reset easily.</p>


<h2>Choosing the Javascript functions</h2> 
<p>As advised on the tutorials, I focussed on setting up singular functions with one main task which is called the 'single responsibility principle'. This involves having one key, defined purpose per function as opposed to overcomplicating things. I took my time doing research on slack and plotting my functions on Balsamiq Wireframes prior to implementing them and I put a lot of effort and consideration into the parameters and arguments for functions and how the functions related to one another.

<b>Balsamiq wireframes</b>
To give myself an overall idea of the project prior to inputting code, I completed a rough design on Balsamiq Wireframes, screengrab inserted below. 
I allowed a page for HTML, CSS and Javascript and broke each into sections so that I would not forget an integral aspect of any of the pages or forget to include an important link. I included a separate page listing the Javascript functions that I would be using in building the project, with a brief explanation of each function provided.

<b>Screengrabs of Balsamiq design:</b>
<h3>HTML Screengrab:</h3>

<h3>CSS Screegrab:</h3>

<h3>Javascript functions descriptions screengrab:</h3>

<h1>TESTING</h1>

<b>Learning from Project 1: Responsiveness</b>

<p>My weakest area in 'PP1 HTML&CSS' was the responsiveness. I had tried to use flex-box and relative percentages and values (vh,vw, rem and %) but did not do this adequately as there were issues across various devices in the responsiveness. I decided to be very thorough with my responsiveness testing on this project as a result. I reviewed the tutorials and did a lot of research slack/google to assist me with this. In designing the CSS, I tried to ensure that every element was responsive, without requiring a media query (though, two media queries are still included, one for a 480px max-width and one for a 320px max-width). I employed a variety of methods to ensure that the game would be responsive to different devices. I applied flexbox to divs in some cases, applied the 'overflow:scroll' function in other places and in many instances defined the width and height of a component using vw and vh respectively. I avoided using px where possible. I carried out thorough testing on various devices using the developer tools. Please see screengrabs of this testing in the testing section below.</p>

Screengrab of project viewed on '':
Screengrab of project viewed on '':
Screengrab of project viewed on '':
Screengrab of project viewed on '':
Screengrab of project viewed on '':

<p>Mobile first design-As aforementioned, I ensured to do a thorough testing on the website for responsiveness on a number of different devices via developer tools. As per the grid  and screengrabs below, I used developer tools to view the finished project on a number of different viewport and please see below how they reacted to responsiveness.

Viewport:      Overflow:       Images clear?:


Also, I inspected how efficient is the game on different browsers. Please see testing grid below:
                           Loading.        Images Clear
Google Chrome
Firefox   
Safari
Internet Explorer

<p>As I was building my Javascript Code in particular, I constantly had a browser open and was inspecting the console via developer tools and was amending errors as they were flagged. I found this to be a very efficient way of refining the project, as the developer tools points to the exact line of the error and offers a brief explanation. A sample of a rectified error would be the parameters used in my 'if else' statement, I had used '(playerChoice[choices],computerChoice[choices]' initially but upon inspection, updated to (playerChoice,computerChoice).
-'Mobile first design'-As aforementioned, I ensured to do a thorough testing on the website for responsiveness on a number of different devices via developer tools (at every stage considering how the design would look on a smaller device such as a mobile phone). As per the grid  and screengrabs below, I used developer tools to view the finished project on a number of different viewport and please see below how they reacted to responsiveness.

Viewport:      Overflow:       Images clear?:

<h3>LIGHTHOUSE TESTING</h3>

Once again, using developer tools, I tested the game on 'Lighthouse'. All percentages were suitably high, particularly accessiblilty, as desired. Please see a screengrab of the Lighthouse test below:

![alt text](.//assets/images/lighthousetesting.png)


<h3>Validator Testing</h3>

<b>HTML</b>
A few errors were flagged when I passed my initial HTML through the official W3C validator but I updated accorindingly and now, no errors remain. 

Screengrab: 

![alt text](.//assets/images/htmltesting.png)

<b>CSS</b>
A couple of errors were found when passing my initial CSS design through the official (Jigsaw) validator but I updated accordingly and now, no errors remain:

![alt text](.//assets/images/csstesting.png)

<b>Javascript</b>
A number of warnings(est 70 warnings) were found initially when I ran the Javascript code through the JSHint validator but I flagged this with fellow students on slack, whoch advised me that I needed to configure JSHint to ES6.

I did this by adding '/* jshint esversion: 6 */' to the top of the JS code and the warnings were reduced considerably.(est 20 warnings). The other warnings were to do with missing semi-colons in my 'if else statement', which I rectified. Now only one warning remains.
Also flagged were undefined variables so I ensured to define these at the beginning (playerScore, computerScore, answer)

JSHint: No errors were found in the JSHint testing:
![alt text](.//assets/images/


<b>Unfixed Bugs</b>
I inserted the favicon link provided on the LMS platform but the favicon does not appear to be functional.

<b>Manual testing</b>

Developer tools-I opened the console and rectified errors as they arose.
Additionally, when testing on different devices, I updated the CSS code and refreshed the page accordingly

I have conducted enough testing to legitimately believe that the site works well. All of my project’s features work as intended, and the game is easy for the user to understand and play.


<b>Design:</b>

<em>Color scheme</em>: As I knew that this was a fast-paced game that would require intense staring at the screen, I did not want to use a color that was too bright or strong as that may have caused eye soreness or the glare from the screen may have negated from the game. Went for '', a strong colour but also easy on the eye that would compliment the intensive staring required of the game.
<em>Font:</em> I did thorough research on Google Fonts before I decided on the 'Bungee Spice' font. I wanted something fun, inkeeping with the theme of the game but also legible and clear.
<em> Favicons:</em> I inserted the favicon link in the head of the HTML page to enable functionality. This is a fun new feature that I had not included in previous projects.
<em>Animation</em> I enabeled Animate CSS via HTML and inserted an eye catching animation on the title. This created the fun, games vibe that I desired.
<em>Interactivity:</em> The five buttons present the user with the option to select. The computer simultaenously responds with their choice, which is generated at random. The answers are compared and the game decides on the winner, considering the rules of the game which were input to Javascript via an 'If Else' formula. The score is incremented accordingly and each game is decided by the best of three rounds. Messages are prompted to disclose who has won the round. The game is best of three so the overall winner is decided by who wins three rounds. Then the game control buttons are disabled and the user must click on the reset button to begin the game again.
<em>Accessibility:</em> I ensured to include ALTs and aria-labels where possible to assist screen readers. Not reliant on audio queues to be accessible to deaf users. Nothing automatically plays without the user initiating it. Also, I inserted types to the buttons.

<h2>User Experience</h2>

User Stories:
<ol>
<li>The user wants a game that is easy to understand. Yes, rules laid out clearly and all they need to do is click a button.</li>
<li> The user wants a game that offers interaction. Yes, the computer spontaneously generates there own answer which supplies the user with a competitor. Also, the photos are updated based on the users data choice, the scores are updated based on who won each round and for each round and game, a message is prompted saying who won or lost.</li>
<li>The user wants a game that they can play in between things during the day/whilst waiting/that does not require continued concentration. Yes, the games are short with the best-of-three ounds deciding the winner. No background knowledge is required and the user can stop/start agin whenever they want with the reset button.


<h2>Features</h2>

<h3>Existing Features</h3>


The focus here was having simple, legible design that was also fun in color scheme and responsive. Clearly divided the different sections using comments.

-Image changing based on the button choice: The player-image and computer-image, in the PP2 scope video on the CI LMS version of game, change based on selection of button (e.g. whether rock, paper, scissors, lizard or spock was selected).
I appreciated this function and applied it to my project also.
 The basic premise being that for each of the two images in the 'score_area'(one for the player score section and one for the computer/lizard score section), the image will update based on what playerChoice and computerChoices were made. To do this, using the src filepath to the assets folder and template literals, each of the five images (rock, paper, scissors, lizard, spock) needed to be saved to the images folder with the name in a certain format (rock.png., scissors.png etc.) and the code written in template literal placeholder format that will target specific images based on button choice so that the selection of a certain choice prompts the relevant image to appear as opposed to any of the others. 'Src...used for this.'. The user image is 'player-image' and the Lizard image is 'computer-image'

-Buttons- design is based on the 'Love Math' walkthrough game project. Added an eventListener that activates the user choice once clicked on by user and triggers the other functions (prompts text to change, prompts computer to randomly generate their choice, prompts compare function, prompts score board etc.)
-Tailored messages prompted by game-using if else code
-Score board- Compare function used, winner chosen based on code written to suit the rules of the game. This is done using a long 'if else' formula. Score updates in increments of one based on winner chosen.
Prompted responses
-Best-of-three feature: Once player/Lizard reaches a score of three, the game is over and a winner is selected. This autamtically resets the scorebaord.
-Reset button-starts game again


<h3>Features left to implement</h3>
-As opposed to just text being prompted on each game, a little gif or video could play depending on whether the user has
lost or won the game. (E.g. a gif of somebody falling if the loser has lost the game)
-Timer appears: To introduce an element of urgency, I would insert a countdown timer that allows the user 15 seconds to choose their button on each round or else the game resets.


<b>Deployment</b>
Please see below a description and screengrabs of the process I went through to deploy the this RPSLS Javascript PP2 project to the GitHub hosting platform

The site was deployed to GitHub pages. The steps to deploy are as follows (including screengrabs):
-I logged into the Github platform (Subscription hours were provided by the CI as part of the course)
-I navigated to the repositary page and the relevant repositary
-In the GitHub repository, I selected to the Settings button
-I continued onto the Git pages section
-From the source section drop-down menu, I selected the 'Main Branch' saved and waited
-I refreshed the page and was met with a live link, which indicated the successful deployment.
-The live link can be found here:

<b>Credits</b>
-I was greatly inspired by the tutorials provided on this module, in particular the 'Love Maths' walkthrough project and the PP2 scoping video which informed my project.
-In building the repositary for this project, I completed the walk-through project 'Love Math' whilst listening to the tutorials. I used this code as boilerplate code and then edited that code to redesign it to my Javascript project.

I found that this enabled me to have confidence in the structure.

I decided to go with 'Rock, Paper, Scissors, Lizard, Spock' as I am familiar with the traditional game and per the PP2 video provided by CI, I saw definite areas of connection between the design format of this game and the 'Love Math' wlakthrough game tha they supplied (e.g. game area, score area)

I was panicking initially when thnking of how to design my Javascript functions and what order to have them etc. and drew great inspiration from the slack channel. I reviewed a number of different query threads from different students on the PP2 section and this inspired/influenced/informed a lot of my code.

<b>Content</b>
The google font 'Bungee Spice' was taken from 'Google Fonts'
The button icons and icons in the footer were taken from 'Font Awesome'
I drew inspiration from the tutorials provided by the Code Institute, the walkthrough demonstration of building the 'Love Math' project, the scoping video for PP2 created by CI and then reveiwed a number of different student queried on the 'PP2' on the Slack Platform and the code used by those students to inform my own coding.

The work/queries/code of other students that I drew inpiration from in my own project design inclde:
-Clinelly
-Benjibenne

<b>Media</b>
The photos used are from the following sources: Pexel, 
The animation used was taken from 'Animate.CSS
