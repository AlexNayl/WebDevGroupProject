<template>
    <p>Flags Placed: {{flagsPlaced}}</p>
    <!--<p>Bombs: {{bombs}}</p>-->
    <p>Time: {{time}}</p>
    <p id="board-size">Board Size: 9</p>
    <div>
        <input type="range" min="6" max="12" value="9" class="slider" id="board-size-slider">
    </div>
    <p id="bombs">Bombs: 10</p>
    <div>
        <input type="range" min="5" max="50" value="10" class="slider" id="bombs-slider">
    </div>
    <button @click="reset" id="resetButton">Reset</button>
    <div id="gameDiv"></div>
</template>

<script>
    import $ from 'jquery';
    import accessHighscores from '@/../public/scripts/update_highscores.js';
    // Temp
    /*
        Highscore handling (Prompt the user for name and add it to a Datebase later)
        Change board size
        Notes:
        If there is infinite recursion encountered tell Samuel with a screenshot of the game I think I fixed it not sure
    */
    class Minesweeper{
        static MAX_BOMBS_3X3 = 6;
        constructor(boardSize, numBombs, vuePage){
            this.boardSize = boardSize;
            this.numBombs = numBombs;
            this.vuePage = vuePage;
            this.setup();
        }

        setup(){
            this.bombLocations = [];
            this.started = false;
            this.startedTime = 0;
            this.gameOver = false;
            this.flagsPlaced = 0;
            this.vuePage.flagsPlaced = this.flagsPlaced;
            // Setup Display Timer
            setInterval(() => {
                if (this.started && !this.gameOver){
                    this.vuePage.time = Math.round(new Date().getTime() / 1000) - this.startedTime;
                }
            }, 1000); // Update timer every second

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

            this.addBombs();
        }

        makeBoard(){
            let gameDiv = document.getElementById("gameDiv");
            let resetButton = document.getElementById("resetButton");
            if (!gameDiv || !resetButton){ return; } // TODO: properly handle this
            // Add reset button need null check for reset
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
            return gameBoard;
        }

        reset(){
            this.setup();
        }

        clickSquare(square){
            if (!this.started){
                this.startedTime = Math.round(new Date().getTime() / 1000);
                this.started = true;
            }
            if (!(square.classList.contains("unknownsquare")) && !(this.gameOver && square.classList.contains("flagsquare"))){
                return;
            }


            square.classList.remove("unknownsquare");
            // Incase user clicks on bomb (the !gameOver part is for revealing the entire board)
            if (this.inArray(this.bombLocations, square.id)){
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

            let squareRow = parseInt(square.id[0]);
            let squareCol = parseInt(square.id[2]);
            let bombsNear = this.countBombsNear(squareRow, squareCol);
            if (bombsNear == 0){
                this.clearNearBy(squareRow, squareCol);
            }
            // Else add number of bombs
            square.classList.add("bombsnear" + bombsNear.toString());
            if (!this.gameOver){
                this.checkGameOver()
            }
        }

        clearNearBy(squareRow, squareCol){
            for (let row = Math.max(squareRow - 1, 0); row < Math.min(squareRow + 2, this.boardSize); row++){
                for (let col = Math.max(squareCol - 1, 0); col < Math.min(squareCol + 2, this.boardSize); col++){
                    this.clickSquare(document.getElementById(row.toString() + "," + col.toString()));
                }
            }
        }
        countBombsNear(squareRow, squareCol){
            let bombsNear = 0;
            for (let row = Math.max(squareRow - 1, 0); row < Math.min(squareRow + 2, this.boardSize); row++){
                for (let col = Math.max(squareCol - 1, 0); col < Math.min(squareCol + 2, this.boardSize); col++){
                    // Save searching useless spot
                    if (row == squareRow && col == squareCol){ continue; }
                    // if spot if a bomb
                    if (this.inArray(this.bombLocations, row.toString() + "," + col.toString())){
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
            if (this.inArray(square.classList, "unknownsquare")){
                square.classList.add("flagsquare");
                square.classList.remove("unknownsquare");
                this.flagsPlaced++;
                this.vuePage.flagsPlaced = this.flagsPlaced;
            }else if(this.inArray(square.classList, "flagsquare")){
                square.classList.remove("flagsquare");
                square.classList.add("unknownsquare");
                this.flagsPlaced--;
                this.vuePage.flagsPlaced = this.flagsPlaced;
            }
        }

        endGame(win=false){
            this.gameOver = true;
            for (let i = 0; i < this.boardSize; i++){
                for (let j = 0; j < this.boardSize; j++){
                    this.clickSquare(document.getElementById(i.toString() + "," + j.toString()), true);
                }
            }
            clearTimeout();
            let duration = Math.round(new Date().getTime() / 1000) - this.startedTime;
            this.vuePage.time = duration; // just incase
            accessHighscores.updateHighscores(duration, "name") // TODO: Add username parameter
            console.log("Game Over! Win =", win, "Duration =", duration);
        }

        addBombs(){
            let possibleLocations = [];
            for (let i = 0; i < this.boardSize; i++){
                for (let j = 0; j < this.boardSize; j++){
                    possibleLocations.push(i.toString() + "," + j.toString());
                }
            }

            let bombs2place = this.numBombs;
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
            for (let row = Math.max(squareRow - 1, 0); row < Math.min(squareRow + 2, this.boardSize); row++){
                for (let col = Math.max(squareCol - 1, 0); col < Math.min(squareCol + 2, this.boardSize); col++){
                    let bombsNearBy = this.countBombsNear(row, col);
                    // Shoudln't be greater than but just incase
                    if (bombsNearBy >= Minesweeper.MAX_BOMBS_3X3){
                        return false;
                    }
                }
            }
            return true;
        }

        checkGameOver(){
            let unknownOrBombCount = 0;
            for (let row = 0; row < this.boardSize; row++){
                for (let col = 0; col < this.boardSize; col++){
                    let square = document.getElementById(row.toString() + "," + col.toString());
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

        inArray(array, element){
            for (let i = 0; i < array.length; i++){
                if (element == array[i]){
                    return true;
                }
            }
            return false;
        }
    }
    import '@/../public/stylesheets/main.css';
    //const BOARD_SIZE = 9; // Can change later this. Represents an 9x9 board
    //const NUM_BOMBS = 10; //
    
    export default {
        name: "MineSweeperGame",
        data(){
            return {
                game: null,
                flagsPlaced: 0,
                boardSize: 0,
                bombs: 0,
                time: 0,
            }
        },
        methods: {
            // Start Up Code
            startup: function(){
                this.boardSize = $("#board-size-slider").val();
                this.bombs = $("#bombs-slider").val();
                this.game = new Minesweeper(this.boardSize, this.bombs, this);
                accessHighscores.updateHighscores(5, "abc");

                $("#board-size-slider").change(() => {
                    this.updateBoardSize();
                });

                $("#bombs-slider").change(() => {
                    this.updateBombs();
                });
            },
            updateBoardSize() {
                let val = document.querySelector("#board-size-slider").value;
                this.boardSize = val;
                this.game.boardSize = val;
                $("#board-size").text("Board Size: " + val);
                this.updateBombs(); // Update number of bombs in case we have exceeded max bomb count
            },
            updateBombs() {
                let val = document.querySelector("#bombs-slider").value;
                val = Math.floor(Math.min(val, this.boardSize * this.boardSize / 3)); // Max number of bombs should be 1/3 board size
                this.bombs = val;
                this.game.numBombs = val;
                $("#bombs").text("Bombs: " + val);
            },
            reset: function (){
                this.game.reset();
            },
            // TODO: ADD BACK inArray not neccessary to be part of game
        }, 
        mounted(){
            // Call Start Up Code
            this.$nextTick(() => {
                this.startup();
            })
        },
    }
</script>

<style>
    table{
        margin-left: auto;
        margin-right: auto;
    }
</style>