# Javascript-PP2
<h1>Rock, Paper, Scissors<h1>


<h2><b>Minimum Viable Product-Logic</b></h2>
Due to the timeline for submissions and my working full-time during the week, I decided to focus on completing one of the outlined tasks to the highest possible quality level as opposed to overcomplicating an original design that I would not have time to execute properly. I planned on completing the Javascript modules in a comprehensive fashion, giving myself time to absorb the logic and to develop a proper understanding prior to starting the project. Accordingly, I took my time going through the videos.
  I decided on the 'Rock, Paper, Scissors, Lizard, Spock' project as I was familiar with the game and appreciated the demo video provided by CI.
I planned on having shorter simpler HTML and CSS pages so that I could truly focus on ensuring the Javascript code was adequate.


<h1>Design</h1>

<b>Explanation of the purpose of the game:</b> An interactive game of 'Rock, Paper, Scissors,Lizard, Spock' that enables users to play the well-known game against the computer without being able to easily predict an outcome. My version of the game keeps a tally of the score and the winner is decided by best of three rounds and then the game becomes disabled and the reset button must be clicked to play again. 
<b>Value that the game provides to its users:</b> An entertaining and engaging game that is sponstaneous in it's selection. It offers an impartial competitor for the user to play against in the game of 'Rock, Paper, Scissors, Lizard, Spock', as it is the user versus the computer essentially, which generates its answers at random.
<b>Description of the deployment procedure:</b> As usual, I created my project on the GITHUB platform, as supported by CI. Once the project was fully complete, fully tested and formatted properly, I followed the usual steps to deploy the project. Please see the description of the deployment steps as well as screenshots below:


<em>Choosing the Javascript functions</em> As advised on the tutorials, I focussed on setting up singular functions with one main task which is called the 'single responsibility principle'. This involves having one key, defined purpose per function as opposed to overcomplicating things. I appreciated the importance of defining parameters and arguments for functions and how the functions inter-relate to one another.

<b>Balsamiq wireframes</b>
To give myself an overall idea of the project prior to inputting code, I completed a rough design on Balsamiq Wireframes, screengrab inserted below. 
I allowed a page for HTML, CSS and Javascript and broke each into sections so that I would not forget an integral aspect of any of the pages or forget to include an important link. I included a separate page listing the Javascript functions that I would be using in building the project, with a brief explanation of each provided.

<b>Learning from Project 1: Responsiveness</b>

My weakest area in PP1 HTML&CSS was the responsiveness. I had tried to use flex-box and relative percentages but did not do this adequately as there were issues across various devices in the responsiveness. I decided to be very thorough with my media-queries and responsiveness testing on this project as a result. I reviewed the tutorials and scoured slack to assist me with this.

<b>Testing:</b>
-As I was building my Javascript Code in particular, I constantly had a browser open and was inspecting the console via developer tools and was amending errors as they occurred. I found this to be a very efficient way of refining the project as the developer tools points to the exact line of the error and offers a brief explanation.
-Mobile first design-I ensured to do a thorough testing on the website for responsiveness on a number of different devices via developer tools. As per the grid below, I used developer tools to view the finished project on a number of different viewport and please see below how they reacted to responsiveness.

Viewport:      Overflow:       Images clear?:


Lighthouse: All high, passable. Particularly accessiblilty
Screegrab of percentiles:

W3C HTML:

I ran HTML Code through the W3C validator and, as per below screengrab, no errors were found.
Screengrab:

W3C CSS:
I ran CSS Code through the W3C validator and, as per below screengrab, no errors were found.
Screegrab:

JSHint 
This was a new testing platform for Project 2, specific to testing Javascript
I ran the Javascript Code through JSHint and discovered the following errors and warnings. Please see how I resolved/responded to the errors in each case below:

<b>Manual testing</b>

Developer tools-open console, check for errors
Try different buttons
What was supposed to happen versus what did happen.


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


<h2>Overview of the Project</h2>

<em>'Rock, Paper, Scissors, Lizard, Spock'</em>
 <em>What the project hopes to accomplish:</em> 'Rock, Paper,Scissors, Lizard, Spock' is an interactive, fast-paced online version of the age-old classic, 'Rock, Paper, Scissors', without the need for any props or other players. It is simple to understand and easily accessible. All you need to play is yourself and your laptop.
 <em>Who it is intended to target:</em> Ages 14+. Anybody in a waiting room of any sort or on a long train/bus journey or just on a cheeky lunch break from school or work. Only one player required and no actual rocks, paper, scissors, lizard or spock needed at all.
 <em>How it will be useful to the target audience: It is an engaging and interactive game that people can play on their own. It is useful as it does not require mrore than one person and provides spontaneous, interactive fun that is easy to understand.It does not required a large amount of concentration at a time and it resets automatically.</em>

<h2>Features</h2>
<p>In this section, you should go over the different parts of your project, and describe each in a sentence or so. You will need to explain what value each of the features provides for the user, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.</p>

<h3>Existing Features-page by page</h3>
<h4>HTML page:</h4>
Created the usual HTML page, titled 'Index.html'
Inserted the necessary links to connect it with the CSS and Javascript pages
Link for CSS: '<link rel="stylesheet" href="assets/css/style.css">'  Location: Contained within the <head> on the HTML page
Link for Javascript: 'assets/js/script.js'  Location: Contained within the <body> on the HTML page
Link for favicons:
Link for google font:
Link for animate:
Link for loader:

<em>CSS:</em>
The focus here was having simple, legible design that was also fun in color scheme and responsive. Clearly divided the different sections using comments.
Rules are clearly distinguished at the bottom of the page.


<em>Javascript:</em>
The focus of this project. Interactive, spontaneous, well-thought through.
Functions:
Image changing based on the button choice: The player-image and computer-image, in the PP2 scope video on the CI LMS version of game, change based on selection of button (e.g. whether rock, paper, scissors, lizard or spock was selected).
I appreciated this function and applied it to my project also.
 The basic premise being that for each of the two images in the 'score_area'(one for the player score section and one for the computer/lizard score section), the image will update based on what playerChoice and computerChoices were made. To do this, using the src filepath to the assets folder and template literals, each of the five images (rock, paper, scissors, lizard, spock) needed to be saved to the images folder with the name in a certain format (rock.png., scissors.png etc.) and the code written in template literal placeholder format that will target specific images based on button choice so that the selection of a certain choice prompts the relevant image to appear as opposed to any of the others. 'Src...used for this.'. The user image is 'player-image' and the Lizard image is 'computer-image'

Buttons- design is based on the 'Love Math' walkthrough game project. Added an eventListener that activates the user choice once clicked on by user and triggers the other functions (prompts text to change, prompts computer to randomly generate their choice, prompts compare function, prompts score board etc.)
Score board- Compare function used, winner chosen based on code written to suit the rules of the game. This is done using a long 'if else' formula. Score updates in increments of one based on winner chosen.
Prompted responses
Best-of-three feature: Once player/Lizard reaches a score of three, the game is over and a winner is selected. This autamtically resets the scorebaord.


<h3>Features left to implement</h3>
-As opposed to just text being prompted on each game, a little gif or video could play depending on whether the user has
lost or won the game. (E.g. a gif of somebody falling if the loser has lost the game)
-Timer appears: To introduce an element of urgency, I would insert a countdown timer that allows the user 15 seconds to choose their button on each round or else the game resets.

<b>Testing</b>
I have conducted enough testing to legitimately believe that the site works well. All of my project’s features work as intended, and the game is easy for the user to understand and play.

Developers Tools (viewport testing): In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

<em>Validator Testing</em>
<b>HTML</b>
No errors were returned when passing through the official W3C validator
<b>CSS</b>
No errors were found when passing through the official (Jigsaw) validator
<b>Javascript</b>
JSHint

<b>Unfixed Bugs</b>
You will need to mention unfixed bugs and why they were not fixed. This section should include shortcomings of the frameworks or technologies used. 

<b>Deployment</b>
This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub)

The site was deployed to GitHub pages. The steps to deploy are as follows:
I logged into GITHUB (Subscription hours provided by CI)
In the GitHub repository, navigate to the Settings tab
From the source section drop-down menu, I selected the 'Master Branch'
The page then automatically refreshed with a detailed ribbon display to indicate the successful deployment.
The live link can be found here:

<b>Credits</b>
-I was greatly inspired by the tutorials provided on this module, in particular the 'Love Maths' walkthrough project and the PP2 scoping video which incpired my project.
-In building the repositary, I completed the walk-through project 'Love Math' whilst listening to the tutorials. I used that code as boilerplate code and then edited that code to redesign it to my Javascript project.

I found that this enabled me to have confidence in the structure.

I decided to go with 'Rock, Paper, Scissors, Lizard, Spock' as I am familiar with the traditional game and per the PP2 video provided by CI, I saw definite areas of connection between the design format of this game and the 'Love Math' wlakthrough game tha they supplied (e.g. game area, score area)

I was panicking initially when thnking of how to design my Javascript functions and what order to have them etc and drew great inspiration from the slack channel. I reviewed a number of different query threads from different students on the PP2 section and this inspired a lot of my code.


<b>Content</b>
The google font was taken from ''
The icons in the footer were taken from Font Awesome
I drew inspiration from the tutorials provided by the Code Institute, the walkthrough demonstration of building the 'Love Math' project, the scoping video for PP2 created by CI and then reveiwed a number of different student queried on the 'PP2' on the Slack Platform and the code used by those students to inform my own coding.

The work of other students that I found inspiring: 
Clinelly
Benjibenne
Love Math Walkthrough Project
PP2 Scope video

<b>Media</b>
The photos used are from the following sources: Pexel, 
The font was taken from Google Fonts
The icons were taken from Font Awesome
The animation used was taken from 'Animate.CSS
The loader used was taken from ''