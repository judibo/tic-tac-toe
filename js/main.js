// Display whose turn it is ("X" or "O").
// Provide win logic and display a winning message.
// Provide logic for a cat's game (tie), also displaying a message.
// Wire up your click event listener(s). Using a single listener with event bubbling is recommended but not required.
// Every click will alternate between marking an X and O.
// Provide a Reset Game button that will clear the contents of the board.



/*----- constants -----*/

/*----- app's state (variables) -----*/
var game;

let playerOne;
let playerTwo;

var winningConditions = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
]

/*----- cached element references -----*/

/*----- event listeners -----*/

/*----- functions -----*/

function checkForWin () {
    //Function to check if has a winner
}


console.log("js is loaded!");



// user clicks on a cell
// cell shows X or O
// Once occupied with an X or O, the cell cannot be played again.
// if has a win, show message "XXX won!"
// reset button