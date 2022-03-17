const BOARD_SIZE = 9; // Can change later this represents an 8x8 board

// Definite Start-Up procedure
$(document).ready(function(){
	makeDocument();
});


function makeDocument(){;
	let gameDiv = document.getElementById("gameDiv");
	let gameBoard = document.createElement("table");
	gameDiv.appendChild(gameBoard);
	for (let row = 0; row < BOARD_SIZE; row++){
		let gameRow = document.createElement("tr");
		gameBoard.appendChild(gameRow);
		for (let col = 0; col < BOARD_SIZE; col++){
			let gameSquare = document.createElement("td");
			gameRow.appendChild(gameSquare);
			gameSquare.setAttribute("class", "gamesquare");
		}
	}
}
