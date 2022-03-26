var game;
class Minesweeper{
	static MAX_BOMBS_3X3 = 6;
	constructor(BOARD_SIZE, NUM_BOMBS){
		this.BOARD_SIZE = BOARD_SIZE;
		this.NUM_BOMBS = NUM_BOMBS;
		this.bombLocations = [];
		this.gameOver = false;
		this.setup();
		this.addBombs();
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

		// neccessary
		let gameInstance = this;
		// Set up left and right click events
		$(".gamesquare").mousedown(function(event){
			if (event.which == 1){ // if left click
				gameInstance.clickSquare(this);
			}else if (event.which == 3){ // if right click
				gameInstance.rightClickSquare(this);
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
			for (let col = 0; col < this.BOARD_SIZE; col++){
				let gameSquare = document.createElement("td");
				gameRow.appendChild(gameSquare);
				gameSquare.setAttribute("id", row.toString() + "," + col.toString());
				gameSquare.setAttribute("class", "gamesquare unknownsquare");
			}
		}
		return gameBoard;
	}

	clickSquare(square){
		if (!inArray(square.classList, "unknownsquare")){
			return;
		}

		// Incase user clicks on bomb (the !gameOver part is for revealing the entire board)
		if (inArray(this.bombLocations, square.id)){
			square.classList.add("bombsquare");
			if (!this.gameOver){
				this.endGame();
			}
			return;
		}

		square.classList.remove("unknownsquare");
		let squareRow = parseInt(square.id[0]);
		let squareCol = parseInt(square.id[2]);
		let bombsNear = this.countBombsNear(squareRow, squareCol);

		// Else add number of bombs
		square.classList.add("bombsnear" + bombsNear.toString());
		
	}

	clearNearBy(squareRow, squareCol){
		for (let row = Math.max(squareRow - 1, 0); row < Math.min(squareRow + 2, this.BOARD_SIZE); row++){
			for (let col = Math.max(squareCol - 1, 0); col < Math.min(squareCol + 2, this.BOARD_SIZE); col++){
				this.clickSquare(document.getElementById(row.toString() + "," + col.toString()));
			}
		}
	}
	countBombsNear(squareRow, squareCol){
		let bombsNear = 0;
		for (let row = Math.max(squareRow - 1, 0); row < Math.min(squareRow + 2, this.BOARD_SIZE); row++){
			for (let col = Math.max(squareCol - 1, 0); col < Math.min(squareCol + 2, this.BOARD_SIZE); col++){
				// Save searching useless spot
				if (row == squareRow && col == squareCol){ continue; }
				// if spot if a bomb
				if (inArray(this.bombLocations, row.toString() + "," + col.toString())){
					bombsNear += 1;
				}
			}
		}
		return bombsNear;
	}

	rightClickSquare(square){
		if (this.gameOver){
			return;
		}
		if (inArray(square.classList, "unknownsquare")){
			square.classList.add("flagsquare");
			square.classList.remove("unknownsquare");
		}else if(inArray(square.classList, "flagsquare")){
			square.classList.remove("flagsquare");
			square.classList.add("unknownsquare");
		}
	}

	endGame(){
		this.gameOver = true;
		// TODO: Reveal the board
		console.log("game over!");
		for (let i = 0; i < this.BOARD_SIZE; i++){
			for (let j = 0; j < this.BOARD_SIZE; j++){
				this.clickSquare(document.getElementById(i.toString() + "," + j.toString()));
			}
		}
	}

	addBombs(){
		let possibleLocations = [];
		for (let i = 0; i < this.BOARD_SIZE; i++){
			for (let j = 0; j < this.BOARD_SIZE; j++){
				possibleLocations.push(i.toString() + "," + j.toString());
			}
		}

		let bombs2place = this.NUM_BOMBS;
		while(bombs2place > 0 && possibleLocations.length > 0){
			let locIndex = Math.floor(Math.random() * possibleLocations.length);
			let loc = possibleLocations[locIndex];
			// Remove loc
			possibleLocations[locIndex] = possibleLocations[0];
			possibleLocations.shift();
			if (this.acceptableBombLoc(loc)){
				this.bombLocations.push(loc);
				bombs2place--;
			}
		}
	}

	acceptableBombLoc(loc){
		let squareRow = parseInt(loc[0]);
		let squareCol = parseInt(loc[2]);
		for (let row = Math.max(squareRow - 1, 0); row < Math.min(squareRow + 2, this.BOARD_SIZE); row++){
			for (let col = Math.max(squareCol - 1, 0); col < Math.min(squareCol + 2, this.BOARD_SIZE); col++){
				let bombsNearBy = this.countBombsNear(row, col);
				// Shoudln't be greater than but just incase
				if (bombsNearBy >= Minesweeper.MAX_BOMBS_3X3){
					return false;
				}
			}
		}
		return true;
	}
}
// Definite Start-Up procedure
$(document).ready(function(){
	// Set up Game
	const BOARD_SIZE = 9; // Can change later this represents an 9x9 board
	const NUM_BOMBS = 10; //
	game = new Minesweeper(BOARD_SIZE, NUM_BOMBS);
});

function inArray(array, element){
	for (let i = 0; i < array.length; i++){
		if (element == array[i]){
			return true;
		}
	}
	return false;
}