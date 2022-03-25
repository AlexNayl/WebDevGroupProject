const BOARD_SIZE = 9; // Can change later this represents an 8x8 board

// Definite Start-Up procedure
$(document).ready(function(){
	makeDocument();

	// Disable right click browser menu on TD
	$("td").contextmenu(function(){
		return false;
	});

	// Set up left and right click events
	$("td").mousedown(function(event){
		console.log("click");
		if (event.which == 1){ // if left click
			clickSquare(this);
		}else if (event.which == 3){ // if right click
			rightClickSquare(this);
		}
	});


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
			gameSquare.setAttribute("class", "gamesquare unknownsquare");
		}
	}
}

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
	// temp
	square.classList.add("emptysquare");
}

function rightClickSquare(square){
	if (inArray(square.classList, "unknownsquare")){
		square.classList.add("flagsquare");
		square.classList.remove("unknownsquare");
		// TODO: mark(flagged)
	}else if(inArray(square.classList, "flagsquare")){
		// TODO: mark(not flagged)
		square.classList.remove("flagsquare");
		square.classList.add("unknownsquare");
	}
}