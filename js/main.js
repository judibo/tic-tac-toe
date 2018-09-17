// Display whose turn it is ("X" or "O").
// Provide win logic and display a winning message.
// Provide logic for a cat's game (tie), also displaying a message.
// Wire up your click event listener(s). Using a single listener with event bubbling is recommended but not required.
// Every click will alternate between marking an X and O.
// Provide a Reset Game button that will clear the contents of the board.


console.log("js is loaded!");

/*----- constants -----*/
const player1 = "Heart";
const player2 = "Star";

/*----- app's state (variables) -----*/
var playTime = player1;
var gameOver = false;
var images = new Array();
var resetBtn = document.querySelector('button');


preloadImages("images/heart.png","images/star.png")			
game();
initGame();

function preloadImages() {
	for (i = 0; i < preloadImages.arguments.length; i++) {
		images[i] = new Image()
		images[i].src = preloadImages.arguments[i]
	}
}

function game() {
    if (gameOver) {
        return;
    }
	if (playTime == player1) {
		var player = document.querySelectorAll("div#player img")[0];
        player.setAttribute("src", images[0].src);

	} else {
        var player = document.querySelectorAll("div#player img")[0];
        player.setAttribute("src", images[1].src);
	}
}

function initGame(){

	var fields = document.getElementsByClassName("field");
	for (var i = 0; i < fields.length; i++) {
        fields[i].innerHTML = "<img src='"+images[0].src+"'><img src='"+images[1].src+"'>";
        fields[i].getElementsByTagName('img')[0].style.display = "none";
		fields[i].getElementsByTagName('img')[1].style.display = "none";
        fields[i].addEventListener("click", function() {
        	if(this.getAttribute("turn") == "") {
				if (playTime == player1) {
                    this.getElementsByTagName('img')[0].style.display = "inline";
					this.setAttribute("turn", player1);
					playTime = player2;

				} else {
                    this.getElementsByTagName('img')[1].style.display = "inline";
					this.setAttribute("turn", player2);
					playTime = player1;
				}
				game();
				checkForWinner();
			}
		});
	}
}

function checkForWinner(){
    var a1 = document.getElementById("field1").getAttribute("turn");
    var a2 = document.getElementById("field2").getAttribute("turn");
    var a3 = document.getElementById("field3").getAttribute("turn");

    var b1 = document.getElementById("field4").getAttribute("turn");
    var b2 = document.getElementById("field5").getAttribute("turn");
    var b3 = document.getElementById("field6").getAttribute("turn");

    var c1 = document.getElementById("field7").getAttribute("turn");
    var c2 = document.getElementById("field8").getAttribute("turn");
    var c3 = document.getElementById("field9").getAttribute("turn");

    var winner = "";

    if (((a1 == b1 && a1 == c1) || (a1 == a2 && a1 == a3 ) || (a1==b2 && a1 == c3 )) && a1 != "" ) {
        winner = a1;
    } else if ((b2 == b1 && b2 == b3 && b2 !="" ) || (b2==a2 && b2==c2 && b2 !="") || (b2==a3 && b2==c1 && b2!="")) {
	    winner = b2;
    } else if(((c3==c2 && c3==c1)||(c3==a3 && c3 == b3)) && c3 != "") {
    	winner = c3;
    }

    if (winner != "") {
        gameOver = true;
        // if has a win, show message "XXX won!"
	    alert("The winner is: " + winner + "!");
    }
}

// reset button
function reset(event) {
    gameOver = false;
    initGame();
}
resetBtn.addEventListener('click', reset);



// cell shows X or O
// Once occupied with an X or O, the cell cannot be played again.
