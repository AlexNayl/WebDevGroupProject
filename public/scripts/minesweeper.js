import $ from 'jquery';
import accessHighscores from '@/../public/scripts/access_highscores.js';
/*
 * Name: minesweeperHighScore
 * Description: Calculates a highscore for a minesweepr game
 * Return: A score
*/
function minesweeperHighScore(duration, boardSize, numBombs){
    const MAX_SCORE_DURATION = 1000; // Max duration after which score is not affected
    const SCORE_DURATION_COEFFICIENT = 1000; // How much the duration affects the score
    return Math.ceil(numBombs / boardSize * Math.max(1, (MAX_SCORE_DURATION - duration) * SCORE_DURATION_COEFFICIENT));
}

/*
 * Name: inArray
 * Description: Searchs an array for an element
 * Return: True if element is in array otherwise false
*/
function inArray(array, element){
		for (let i = 0; i < array.length; i++){
			if (element == array[i]){
				return true;
			}
		}
		return false;
	}

/*
 * Class Name: Minesweeper 
 * Description: Runs a game of minesweeper 
*/
export default class Minesweeper{
	static MAX_BOMBS_3X3 = 6; // Limit on how many bombs can appear in a 3x3 grid area
	/*
     * Name: constructor
     * Description: Creates a new Minesweeper instasnce
     * Return: None
    */
	constructor(boardSize, numBombs, vuePage){
		this.boardSize = boardSize; // Size of the Minesweeper board
		this.numBombs = numBombs; // Number of bombs present in the game
		this.vuePage = vuePage; // Reference to the page. Used for accessing page variables
		this.setup(); // Setup the game
	}

	/*
     * Name: setup
     * Description: Sets up a game of minesweeper
     * Return: None
    */
	setup(){
		this.bombLocations = []; // Locations where bombs are placed
		this.started = false; 
		this.startedTime = 0; // 0 is a placeholder it will be number of seconds since EPOCH
		this.gameOver = false; 
		this.flagsPlaced = 0; 
		this.vuePage.flagsPlaced = this.flagsPlaced;

		// Timer that will be used for score and displayed to the user
		setInterval(() => {
			if (this.started && !this.gameOver){
				this.vuePage.time = Math.round(new Date().getTime() / 1000) - this.startedTime;
			}
		}, 1000); // Update timer every second

		// Setup Board
		let board = document.getElementById("gameBoard");
		
		// if the board is already present then delete it
		if (board){
			board.remove();
		}

		this.makeBoard();

		//Event Handlers

		// Disable right click browser menu on game squares
		$(".gamesquare").contextmenu(function(){
			return false;
		});

		// Use a reference to the game instance for setting up event handling
		let gameInstance = this;
		// Set up left and right click events
		$(".gamesquare").mousedown(function(event){
			if (event.which == 1){ // if left click
				gameInstance.clickSquare(this);
			}else if (event.which == 3){ // if right click
				gameInstance.rightClickSquare(this);
			}
		});

		this.addBombs(); // Add the bombs to the game 
		// The game is now setup
	}

	/*
     * Name: makeBoard
     * Description: Makes a table representing the Minesweeper board
     * Return: None
    */
	makeBoard(){
		let gameDiv = document.getElementById("gameDiv"); // Div that the game is stored in
		let resetButton = document.getElementById("resetButton"); // Get the reset button

		// If the game Div or Reset button are not found then cease making the board
		if (!gameDiv || !resetButton){ return; }

		// Create the table
		let gameBoard = document.createElement("table");
		gameBoard.setAttribute("id", "gameBoard");
		gameDiv.appendChild(gameBoard);
		for (let row = 0; row < this.boardSize; row++){
			let gameRow = document.createElement("tr");
			gameBoard.appendChild(gameRow);
			for (let col = 0; col < this.boardSize; col++){
				let gameSquare = document.createElement("td");
				gameRow.appendChild(gameSquare);
				gameSquare.setAttribute("id", row.toString() + "," + col.toString());
				gameSquare.setAttribute("class", "gamesquare unknownsquare");
			}
		}
	}

	/*
     * Name: reset
     * Description: Starts a new game
     * Return: None
    */
	reset(numBombs, boardSize){
		this.numBombs = numBombs;
		this.boardSize = boardSize;
		this.setup();
	}

	/*
     * Name: clickSquare
     * Description: Handles the action of clicking on a square
     * Return: None
    */
	clickSquare(square){

		// If the game is not started then start the game
		if (!this.started){
			this.startedTime = Math.round(new Date().getTime() / 1000);
			this.started = true;
		}

		// Square must be either of type 'unknownsquare' or in the circumstances of a game being over a flagsquare is also allowed
		if (!(square.classList.contains("unknownsquare")) && !(this.gameOver && square.classList.contains("flagsquare"))){
			return;
		}

		// Square once clicked is no longer unknown
		square.classList.remove("unknownsquare");

		// Incase user clicks on bomb (the !gameOver part is for revealing the entire board)
		if (inArray(this.bombLocations, square.id)){
			// If game is over then this is a flag square needs to be removed to allow bomb image
			if (this.gameOver){
				square.classList.remove("flagsquare");
			}
			square.classList.add("bombsquare");
			if (!this.gameOver){
				this.endGame();
			}
			return;
		}

		let squareRow = this.getRow(square.id);
		let squareCol = this.getCol(square.id);
		let bombsNear = this.countBombsNear(squareRow, squareCol);
		
		// When no bombs near a square then nearby squares can be cleared
		if (bombsNear == 0){
			this.clearNearBy(squareRow, squareCol);
		}

		// Else add number of bombs
		square.classList.add("bombsnear" + bombsNear.toString());
		if (!this.gameOver){
			this.checkGameOver()
		}
	}


	/*
     * Name: clearNearBy
     * Description: Clears an area around a specified square
     * Return: None
    */
	clearNearBy(squareRow, squareCol){
		// Search the 3x3 grid around a square and artificially click them
		for (let row = Math.max(squareRow - 1, 0); row < Math.min(squareRow + 2, this.boardSize); row++){
			for (let col = Math.max(squareCol - 1, 0); col < Math.min(squareCol + 2, this.boardSize); col++){
				this.clickSquare(document.getElementById(row.toString() + "," + col.toString()));
			}
		}
	}


	/*
     * Name: countBombsNear
     * Description: Counts the bombs in a 3x3 grid aruound a square
     * Return: The number of bombs nearby
    */
	countBombsNear(squareRow, squareCol){
		let bombsNear = 0;

		// Search the 3x3 grid
		for (let row = Math.max(squareRow - 1, 0); row < Math.min(squareRow + 2, this.boardSize); row++){
			for (let col = Math.max(squareCol - 1, 0); col < Math.min(squareCol + 2, this.boardSize); col++){
				// Save searching useless spot
				if (row == squareRow && col == squareCol){ continue; }
				// checks all the bomb locations to see if the square is a bomb
				if (inArray(this.bombLocations, row.toString() + "," + col.toString())){
					bombsNear += 1;
				}
			}
		}
		return bombsNear;
	}


	/*
     * Name: rightClickSquare
     * Description: Simulates a user right clicking a square
     * Return: None
    */
	rightClickSquare(square){
		// Squares cannot be right clicked after the game has ended so return
		if (this.gameOver){
			return;
		}

		// Check if the square is an unknown square or flag then flag or unflag it
		if (inArray(square.classList, "unknownsquare")){
			square.classList.add("flagsquare");
			square.classList.remove("unknownsquare");
			this.flagsPlaced++;
			this.vuePage.flagsPlaced = this.flagsPlaced;
		}else if(inArray(square.classList, "flagsquare")){
			square.classList.remove("flagsquare");
			square.classList.add("unknownsquare");
			this.flagsPlaced--;
			this.vuePage.flagsPlaced = this.flagsPlaced;
		}
	}

	/*
     * Name: endGame
     * Description: Ends the game
     * Return: None
    */
	endGame(win=false){
		this.gameOver = true;

		// Simulate a click on each square to show the user the complete board
		for (let i = 0; i < this.boardSize; i++){
			for (let j = 0; j < this.boardSize; j++){
				this.clickSquare(document.getElementById(i.toString() + "," + j.toString()));
			}
		}

		// End the timer loop
		clearTimeout();

		// Win or lose. Update the database if win
		if (win){
			// Calculate the results of the game and 
			let duration = Math.round(new Date().getTime() / 1000) - this.startedTime;
			this.vuePage.time = duration;
			accessHighscores.updateHighscores(minesweeperHighScore(duration, this.boardSize, this.numBombs), prompt("Enter a name:"), "minesweeper")
		}else{
			alert("You lose! Press Reset to reset!");
		}
	}

	/*
     * Name: addBombs
     * Description: Adds the bombs to the game
     * Return: None
    */
	addBombs(){
		let possibleLocations = [];

		// Add all locations as possible locations for a bomb
		for (let i = 0; i < this.boardSize; i++){
			for (let j = 0; j < this.boardSize; j++){
				possibleLocations.push(i.toString() + "," + j.toString());
			}
		}

		let bombs2place = this.numBombs; // remaining boms to place

		// Randomly select a location and see if its acceptable
		while(bombs2place > 0 && possibleLocations.length > 0){
			let locIndex = Math.floor(Math.random() * possibleLocations.length);
			let loc = possibleLocations[locIndex];
			// Remove loc from possibilities
			possibleLocations[locIndex] = possibleLocations[0];
			possibleLocations.shift();
			if (this.acceptableBombLoc(loc)){
				this.bombLocations.push(loc);
				bombs2place--;
			}
		}
		
		// Subtract the bombs that failed to place from the counter
		this.vuePage.bombs -= bombs2place; 
	}

	/*
     * Name: acceptableBombLoc
     * Description: Determines whether a location is a suitable place to add a bomb
     * Return: True if acceptable false otherwise
    */
	acceptableBombLoc(loc){
		let squareRow = this.getRow(loc);
		let squareCol = this.getCol(loc);

		// Search 3x3 grid around location for bombs
		for (let row = Math.max(squareRow - 1, 0); row < Math.min(squareRow + 2, this.boardSize); row++){
			for (let col = Math.max(squareCol - 1, 0); col < Math.min(squareCol + 2, this.boardSize); col++){
				let bombsNearBy = this.countBombsNear(row, col);
				// If too many bombs nearby then not acceptable location
				if (bombsNearBy >= Minesweeper.MAX_BOMBS_3X3){
					return false;
				}
			}
		}
		return true;
	}

	/*
     * Name: checkGameOver
     * Description: Checks if the game is over and ends the game is required
     * Return: None
    */
	checkGameOver(){
		let unknownOrBombCount = 0; // Amount of unknown/bomb sequares

		// Search the entire board
		for (let row = 0; row < this.boardSize; row++){
			for (let col = 0; col < this.boardSize; col++){
				let square = document.getElementById(row.toString() + "," + col.toString());
				// Counts the number of unknown and flagged squares
				if (square.classList.contains("unknownsquare") || square.classList.contains("flagsquare")){
					unknownOrBombCount++;
				}
			}
		}
		// If number of unknowns = number of bombs then user has won
		if (unknownOrBombCount == this.numBombs){
			this.endGame(true);
		}
	}


	/*
     * Name: getRow
     * Description: Gets a row from a given string
     * Return: Row integer
    */
	getRow(str){
		return parseInt(str.split(",")[0]);
	}

	/*
     * Name: getCol
     * Description: Gets a col from a given string
     * Return: Col integer
    */
	getCol(str){
		return parseInt(str.split(",")[1]);
	}
}