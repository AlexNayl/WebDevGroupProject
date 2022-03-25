var game;
class Minesweeper{
	constructor(BOARD_SIZE){
		this.BOARD_SIZE = BOARD_SIZE;
		this.squares = [];
		this.setup();
	}

	setup(){
		// Setup Board
		let board = document.getElementById("gameBoard");
		// if already exists
		if (board){
			board.remove();
		}
		board = this.makeBoard();
		//Events

		// Disable right click browser menu on game squares
		$(".gamesquare").contextmenu(function(){
			return false;
		});

		// Set up left and right click events
		$(".gamesquare").mousedown(function(event){
			if (event.which == 1){ // if left click
				clickSquare(this);
			}else if (event.which == 3){ // if right click
				rightClickSquare(this);
			}
		});
	}

	makeBoard(){
		let gameDiv = document.getElementById("gameDiv");
		let gameBoard = document.createElement("table");
		gameBoard.setAttribute("id", "gameBoard");
		gameDiv.appendChild(gameBoard);
		for (let row = 0; row < this.BOARD_SIZE; row++){
			let gameRow = document.createElement("tr");
			gameBoard.appendChild(gameRow);
			this.squares.push([]);
			for (let col = 0; col < this.BOARD_SIZE; col++){
				let gameSquare = document.createElement("td");
				gameRow.appendChild(gameSquare);
				gameSquare.setAttribute("class", "gamesquare unknownsquare");
				this.squares[row].push(gameSquare);
			}
		}
		return gameBoard;
	}	
}
// Definite Start-Up procedure
$(document).ready(function(){
	// Set up Game
	const BOARD_SIZE = 9; // Can change later this represents an 9x9 board
	game = new Minesweeper(BOARD_SIZE);
});

function inArray(array, element){
	for (let i = 0; i < array.length; i++){
		if (element == array[i]){
			return true;
		}
	}
	return false;
}

function clickSquare(square){
	if (!inArray(square.classList, "unknownsquare")){
		return;
	}
	square.classList.remove("unknownsquare");
	// TODO: Take actions in game based on the click
	square.classList.add("emptysquare"); // temp
}

function rightClickSquare(square){
	if (inArray(square.classList, "unknownsquare")){
		square.classList.add("flagsquare");
		square.classList.remove("unknownsquare");
	}else if(inArray(square.classList, "flagsquare")){
		square.classList.remove("flagsquare");
		square.classList.add("unknownsquare");
	}
}