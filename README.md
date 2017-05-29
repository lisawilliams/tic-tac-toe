# Tic-Tac-Toe Project Outline

---

## Technologies Used

In this project, I used the following technologies:

* Javascript, AJAX, and jQuery;
* Grunt serve and grunt deploy to manage development and production servers, webpack;
* Git, Github, and Github Pages for version control, remote code backup and issue management, and hosting of the production version of the game.
* This game depends on use of a Rails API that I did not produce, but the Javascript code I wrote makes calls to that API and stores results I used to manage users, track moves and detect win/draw conditions, etc.


## What I Have Learned So Far:

* _Better grasp of development mechanics:_ I feel much more confident using Git and Github. This is also the first time I have used ```grunt serve``` and ```grunt deploy``` to model what it is like to have a development and production branch. Before this, when I did projects, I used MAMP to develop things locally and then pushed everything to a live server, usually via SFTP. Grunt serve and deploy is a much better system.
* _Ability to round-trip a user action through an API:_ This was my main area of progress during project week. Although we had lessons on this, being able to sit down and do it myself after reading the docs for a similar, but still new API was a big step for me.
* _Developing and practicing a step-by-step approach to writing code:_ I now use a step-by-step approach to writing code that I hadn't used before, starting with writing a curl script to test an API request, building the HTML and CSS, writing an event handler, passing that through to an API request, and then writing code that handles the UI. Doing this made writing each interlocking set of functions much more repeatable and easier.
* _Increased ability to understand what's going wrong with code through using the console and developer tools_: I've never used the console and Chrome developer tools as much as I have this week, and on several occasions I was able to read what the console was telling me and fix what was wrong with my code on my own without filing an issue.
* _Writing great issues:_ I got more practice writing issues. Because I was committed to writing good issues I sometimes figured out what my problem was just from writing up the issue, as I did here. In other cases, writing a detailed issue let consultants give me the right direction. I was very impressed by how consultants gave me hints that were enough to get me moving in the right direction without telling me what the answer was. Many thanks to Jessica, Ben A and Ben M, and Scott.
* _Developing an approach to modularizing code:_ Initially, I thought I would have multiple api.js and ui.js files, but in practice combined these.
* _Sticking with it:_ I've had plenty of opportunities to stick with things, but I'm a big believer in the idea that you get stronger if you stick with things when you have a challenge. I actually had a minor crash on my motorcycle on Wednesday, but returned to class later that day and wrote two new features.

## Unsolved Problems

* _This code is about as DRY as the Titanic._ Many, many of the functions need to be condensed into one function.
* _Board is playable -- but confusing -- after a user clicks "New Game."_ If a user plays a game through to the end, and then clicks New Game, they are presented with a game board with their old moves on it.  Interestingly, this board is still playable and will correctly detect win/draw conditions; the underlying game array is blank and new moves fill it.
* _Sign-up modal should be replaced_ The sign up modal does not dismiss itself upon a user filling it out.
* _All auth features should have show/hide features_ Show/hide features would make the UI less cluttered for the user and prevent them from doing things like clicking on "New Game" when they are not logged in.
* _Intermittent Player 1 bug_ I have an intermittent bug that makes Player O the first player in some games. This is a difficult to reproduce bug but I am in the hunt for it.
* _Code with better grasp of the API and store.js_ Much of the repetition comes from the fact that I did not slow down long enough to really grasp all of the API and what it's putting in store.js. If I did, I could use single functions and simply swap out user and game cell data, rather than hard coding functions for each state.


## Wireframes

### User Login

![tic-tac-toe user login screen wireframe](tic-tac-toe-signup.jpg)

### Tic-Tac-Toe Gameboard

![tic-tac-toe gameboard wireframe](tic-tac-toe-gameboard.jpg)

## Data Structure

File structure for game assets and code:

I originally believed that I might set up the file structure this way:

```
/Assets
    /Scripts
        /Auth
          api.js
          events.js
          ui.js
        /Game
          api.js
          events.js
          index.js
          ui.js
      /Styles
          index.scss
  index.html

  ```

  I ultimately decided to keep things simpler, and refrain from having multiple events, api, and ui files.



## How we will take the markup of the game board and represent it in JS

The game board will have 9 divs arranged in a grid via CSS.
Each div will contain an HTML element whose content we can change via jQuery
in response to user click events.

## How I plan to approach this project

I originally thought we were doing this in squads, but I think I learned a lot doing this on my own.
I'm still at the point where I follow one feature into the next, but my overall process has been:

* Implement all auth features
* Implement game board
* Store user moves and use PATCH to submit them to the API
* Eventually, write code that detects win/draw conditions
* Clean up code and UI

## User Stories

* As a user, I want to be able to sign up for an account so I can play the game.
* As a user, I want to be able to sign in so I can play the game.
* As a user, when I sign in, I want to be presented with a fresh, empty game board so that I can begin playing.
* As a user, I want to be able to change the state of one grid space when I tap on it in order to change it from blank to occupied.
* As a user, I want to be able to offer the opportunity for a friend to play against me.
* As a user, I want to be able to click a 'new game' link in order to be presented with a blank game grid.
* As a user, I want to be presented with a statement indicating a game has been won and by which player (x or o).
* As a user, I want to be able to log out to end my game session.
* As a user, I want to be able to copy the game's URL and send it to a friend.

## How do you plan to keep your code modular?

I plan to use the same structure we have been using in class last week to divide functions into logical groups:

* ui.js for code that displays something to the user on the screen;
* api.js for code that makes API calls; event.js for event handlers; and
* index.js for organizing and linking to the relevant code files.
* The presentation layer -- HTML and CSS  -- will be separate from the game logic and user authorization code.

## What creative spin do you want to add?

It would be fun to incorporate gifs as a reward to users for playing at the end of the game, or even as part of the gameplay if we had time to incorporate those features and meet the requirements of the project assignment.

## How will you use version control to backup / track your project?

I created a development branch to work in, and made many incremental commits to it, including when code was in a nonworking state. Once I was finished with a feature and it worked, I merged development into master and pushed those changes up into Github.

I also kept a local server running with grunt server, and used that to see if my code was working as I worked; each time I had a working feature I also ran ```grunt deploy``` each time I pushed the working code to the ```master``` branch.

## Do you plan to attempt any of the bonuses?

It's more important to me to meet the project requirements. Once I complete the requirements, I might think about those, but not before.
