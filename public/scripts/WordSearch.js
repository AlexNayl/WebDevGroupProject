/* 
 * File: WordSearch.js
 * Function: main file containing key functions to run word search game
 * Authors: Bencs, Tacaks, Zachary Windover, Samuel Jones
 */


import p5 from "p5";
import accessHighscores from './access_highscores.js';


// defining arrays of possible puzzle words
const WORD_SELECTIONS = 
[
['SCOPE', 'let', 'HTML', 'COBOL', 'UTIL'],
['CODE', 'CSS', 'JAVA', 'SWIFT', 'STACK'],
['CLANCY', 'DAVINCI', 'HAMILTON', 'TESLA', 'TURING'],
['YUKIHIRO', 'SATOSHI', 'GOSLING', 'BJARNE'],
['DOG', 'CAT', 'ORCA', 'FOX', 'SQUID', 'WOLF', 'FALCON', 'PENGIUN'],
['ACTION', 'HORROR', 'COMEDY', 'DRAMA', 'THRILLER', 'SCIFI', 'ROMANCE', 'CRIME'],
['PINE', 'MAPLE', 'BIRCH', 'OAK', 'GINKO', 'CHERRY', 'SEQUOIA', 'ASH', 'SPRUCE'],
['DEADPOOL', 'SUPERMAN', 'BATMAN', 'IRONMAN', 'ANTMAN', 'FLASH', 'HULK'],
['VENENO', 'HURACAN', 'JESKO', 'SENNA', 'CHIRON', 'DIVO', 'ENZO', 'STRADALE', 'BATTISTA', 'CHARGER'],
['STARSHIP', 'NEWGLENN', 'FALCON', 'ELECTRON', 'ANTARES', 'ARES', 'MINOTAUR', 'DELTA', 'ATLAS', 'ATHENA',
                        'PEGASUS', 'TITAN', 'SATURN', 'COLUMBIA', 'ATLANTIS'],
['ROSE', 'DAISY', 'LILAC', 'LILY', 'IRIS', 'JASMINE', 'POPPY', 'TULIP', 'LAVENDER',
                        'PEONY', 'PRIMROSE', 'ORCHID'],
['COFFEE', 'TEA', 'BOBA', 'WATER', 'JUICE', 'WINE', 'VODKA', 'WHISKEY',
                        'RUM', 'SMOOTHIE', 'SODA', 'BEER', 'LEMONADE', 'MILK'],
['UKRAINE', 'TAIWAN', 'INDIA', 'FINLAND', 'SWEDEN', 'DENMARK', 'NORWAY', 'JAPAN',
                        'HONGKONG', 'FRANCE', 'ITALY', 'SPAIN', 'GERMANY', 'POLAND', 'CANADA', 'MEXICO'],
['GALILEO', 'NEWTON', 'HUBBLE', 'ARECIBO', 'WEBB', 'CANADARM', 'ZARYA', 'POISK', 'RASSVET', 'BEAM', 'HARMONY',
                        'UNITY', 'DESTINY', 'NAUKA', 'NICER', 'DEXTRE', 'BISHOP', 'KERBAL', 'PRICHAL'],
['SOCCER', 'HOCKEY', 'BASEBALL', 'FOOTBALL', 'RUGBY', 'CRICKET', 'TENNIS', 'SKIING',
                    'CURLING', 'FENCING', 'GOFLING', 'SAILING', 'ROWING'],
['OILERS', 'WHALERS', 'PENGUINS', 'KINGS', 'JETS', 'FLAMES', 'PANTHERS', 'KRAKEN', 'WILD', 'BRUINS', 'SABRES', 'CANUCKS', 'CAPITALS'],
['APPLE', 'GOOGLE', 'SAMSUNG', 'TESLA', 'FORD', 'DISNEY', 'HASBRO', 'SONY', 'HILTON', 'MONDELEZ', 'INTEL',
                    'NVIDIA', 'BOEING', 'TOYOTA', 'MATTEL', 'NIKE', 'AMAZON', 'HUAWEI'],
['HAIDA', 'BISMARCK', 'YAMATO', 'HOOD', 'ROMA', 'IOWA', 'NIMITZ',
                    'MIDWAY', 'FUBUKI', 'GEARING', 'HALLAND', 'VANGUARD'],
['WARTHOG', 'ARROW', 'CANUCK', 'RAPTOR', 'HORNET', 'FALCON', 'TYPHOON', 'HARRIER',
                        'RAFALE', 'EAGLE', 'HERCULES', 'MUSTANG', 'SPITFIRE', 'CORSAIR', 'OSPREY', 'SPIRIT', 'PREDATOR'],
['TETRIS', 'STARFOX',
                    'ZELDA', 'DESTINY', 'POKEMON', 'PACMAN', 'FROGGER', 'ARK', 'DOTA'],
['THORN', 'OSA', 'ARUNI', 'IANA', 'WARDEN', 'NOMAD', 'KAID', 'LION', 'FINKA', 'DOKKAEBI', 'YING', 'LESION',
                    'JACKAL', 'BUCK', 'FROST', 'MUTE', 'SMOKE', 'ASH', 'CASTLE', 'MONTAGNE', 'FUZE', 'KAPKAN', 'AZAMI'],
['RED', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'PURPLE', 'BROWN', 'BLACK', 'CYAN', 'MAGENTA',
                    'CRIMSON', 'LIME', 'INDIGO', 'MAROON', 'AMBER', 'SCARLET', 'MUSTARD'],
['PARASAUR', 'RAPTOR', 'BARYONYX', 'TROODON'],
['LASAGNA', 'QUINOA', 'CHICKEN', 'LIME', 'POUTINE', 'BURRITO', 'FAJITAS', 'CORN',
                    'SHRIMP', 'MACARONS', 'YAKITORI', 'ONIGIRI']
]

const cellDims = 50; // Size of a cell
const matX = 250; // Matrix x offset
const matY = 50; // Matrix y offset
const BOARD_SIZE = 10; // Size of game matrix
export class WordSearch{
    constructor(vuePage){
        this.rows = BOARD_SIZE; // Number of rows in Matrix
        this.cols = BOARD_SIZE; // Number of columns in Matrix
        this.activeWords = [];  // Words for the current game
        this.activeMatrix = []; // Matrix containing the game board
        this.wordsFound = []; // Words found already
        this.lastCell = null; // Previously selected cell
        this.currentCell = null; // Currently selected cell
        this.currentSelection = null; // Array of selected cells
        this.over = false; // Stores the state of completion for the game
        this.updateBoard(); 
        this.vuePage = vuePage; // Stored reference of Vue Page for accessing variables
        this.started = false; 
        this.startedTime = 0; // 0 is placeholder value, stores seconds since EPOCH when the game starts
        
        // Setup the timer for the game
        setInterval(() => {
            if (this.started && !this.over){
                this.vuePage.time = Math.round(new Date().getTime() / 1000) - this.startedTime;
            }
        }, 1000); // Update timer every second
        const sketch = (s) => {

            // create canvas area
            s.setup = () => {
                s.createCanvas(1200, 800).parent("game");
            }


            s.draw = () => {
                if (this.over){
                    return;
                }
                s.clear();

                this.drawBackground(); // works

                this.drawMatrix();
                this.drawSelection();
                this.drawWords(); // works

                this.inputHandler();
            }

            /*
             * Name: drawBackground
             * Description: Changes the background colour for the display
             * Return: None
            */
            // used to display background colour
            this.drawBackground = () => {
                s.background(255, 255, 255); // white
            }

            /*
             * Name: drawMatrix
             * Description: Displays the matrix on the screen
             * Return: None
            */   
            this.drawMatrix = () => {
                s.push();

                s.textAlign(s.CENTER, s.CENTER);
                for (let row = 0; row < this.activeMatrix.length; row++) {
                    let activeRow = this.activeMatrix[row];
                    for (let col = 0; col < activeRow.length; col++) {
                        let character = activeRow[col];

                        let x = matX + col * cellDims;
                        let y = matY + row * cellDims;

                        s.stroke(0);

                        // set colour of block:
                        // if characters are highlighted, highlight colour is Fuchsia
                        // if is a word, colour set to green
                        // if not a word, turns back to white
                        let colour = this.isSelected(row, col) ? "Fuchsia" : (this.foundCell(row, col) ? "Lime" : "White");
                        s.fill(colour);
                        s.rect(x, y, cellDims, cellDims);

                        s.noStroke();
                        s.fill(0);
                        s.text(character, x + cellDims / 2, y + cellDims / 2);

                    }
                }

                s.pop();
            }

            /*
             * Name: drawSelection
             * Description: Displays the selected words at the bottom
             * Return: None
            */
            this.drawSelection = () => {
                let txt = this.selectedWord();

                // if there is no selected word, return
                if (!txt) { return; }

                s.push();
                s.noStroke();
                s.fill(0);
                s.textSize(20);
                s.text(txt, matX, matY + (this.rows + 1) * cellDims);
                s.pop();
            }

            /*
             * Name: drawWords
             * Description: Display the words to find
             * Return: None
            */
            this.drawWords = () => {
                s.push();
                s.noStroke();

                for (let index = 0; index < this.activeWords.length; index++) {

                    // makes a word in wordbank grey if found, else display as black
                    s.fill(this.foundWord(this.activeWords[index]) ? "Gray" : "Black");
                    s.text(this.activeWords[index], 30, matY + 20 + index * 50);

                }

                s.pop();
            }
            /*
             * Name: checkMouse
             * Description: Checks where the mouse is and selects cells
             * Return: None
            */
            this.inputHandler = () => {
                if (this.over){ return; }
                // if mouse isn't pressed
                if (!s.mouseIsPressed) {
                    this.validateSelection();

                    this.lastCell = null;
                    this.currentCell = null;
                    this.currentSelection = null;
                    return;
                }

                // If not started then start the timer
                if (!this.started){
                    this.startedTime = Math.round(new Date().getTime() / 1000);
                    this.started = true;
                }

                if (!this.lastCell) { this.lastCell = this.findCell(s.mouseX, s.mouseY); }
				let nextCell = this.findCell(s.mouseX, s.mouseY);

                if (nextCell) { this.currentCell = nextCell; }
                this.currentSelection = this.findSelection();
            }
        };

        this.sketch = new p5(sketch);
    }

    /*
     * Name: reset
     * Description: Resets the program including all necessary variables
     * Return: None
    */
    reset(){
        this.activeWords = [];
        this.activeMatrix = [];
        this.wordsFound = [];
        this.lastCell = null;
        this.currentCell = null;
        this.currentSelection = null;
        this.over = false;
        this.updateBoard();
        this.started = false;
        this.startedTime = 0;
        this.over = false;
    }

    /*
     * Name: updateBoard
     * Description: Sets the words and the matrix 
     * Return: None
    */
    updateBoard() {
        this.activeWords = WORD_SELECTIONS[Math.floor(Math.random() * WORD_SELECTIONS.length)].sort((w1, w2) => Math.floor(Math.random() * (w1 + w2)) % 2 == 0).slice(0, 5);
        this.activeMatrix = this.genMatrix(this.activeWords);
    }

    /*
     * Name: genMatrix
     * Description: Randomly generates a matrix for the game and inserts the words
     * Return: 2D array of letters
    */
    genMatrix(activeWords){
        // Generates a randoom letter
        let randomLetter = () => ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"][Math.floor(Math.random() * 26)];
        
        // Set up basic matrix
        let activeMatrix = [];
        for (let i = 0; i < this.rows; i++){
            activeMatrix.push([]);
            for (let j = 0; j < this.cols; j++){
                activeMatrix[i][j] = randomLetter();
            }
        }

        // Add in active words
        let occupiedSquares = [];
        let checkOccupiedSquares = (ch, row, col) => {
            for (let i = 0; i < occupiedSquares.length; i++){
                let occupiedSquare = occupiedSquares[i];
                let oRow = occupiedSquare.row;
                let oCol = occupiedSquare.col;
                // if square in array doesn't match desired square then skip
                if (row != oRow || col != oCol){ continue; }
                // else referring to same square
                let oChar = occupiedSquare.char;
                return oChar != ch; // if different characters then return false
            }
            return false;
        }
        let placeHorizontal = (word, row, col, reverse) => {
            let curIndex = 0;
            let dir = 1;
            if (reverse){
                curIndex = word.length - 1;
                dir = -1;
            }
            let endCol = col + dir * word.length;
            
            if (endCol < 0 || endCol > this.cols){ return false; }

            // Check if can place word in the spot
            let nCol = col;
            let nCurIndex = curIndex;
            while(nCol != endCol){
                let ch = word[nCurIndex];
                if (checkOccupiedSquares(ch, row, nCol)){ return false; }
                nCol += dir;
                nCurIndex += dir;
            }

            // Place the word
            nCol = col;
            nCurIndex = curIndex;
            while(nCol != endCol){
                let ch = word[nCurIndex];
                activeMatrix[row][nCol] = ch;
                occupiedSquares.push({"row": row, "col": nCol, "char": ch})
                nCol += dir;
                nCurIndex += dir;
            }
            return true;

        }
        let placeVertical = (word, row, col, reverse) => {
            let curIndex = 0;
            let dir = 1;
            if (reverse){
                dir = -1;
            }
            let endRow = row + dir * word.length;
            
            if (endRow < 0 || endRow > this.rows){ return false; }

            // Check if can place word in the spot
            let nRow = row;
            let nCurIndex = curIndex;
            while(nRow != endRow){
                let ch = word[nCurIndex];
                if (checkOccupiedSquares(ch, nRow, col)){ return false; }
                nRow += dir;
                nCurIndex += 1;
            }

            // Place the word
            nRow = row;
            nCurIndex = curIndex;
            while(nRow != endRow){
                let ch = word[nCurIndex];
                activeMatrix[nRow][col] = ch;
                occupiedSquares.push({"row": nRow, "col": col, "char": ch})
                nRow += dir;
                nCurIndex += 1;
            }
            return true;

        }
        let placeDiagonal = (word, row, col, reverse) =>{
            let curIndex = 0;
            let dir = 1;
            if (reverse){
                dir = -1;
            }
            let endRow = row + dir * word.length;
            let endCol = col + dir * word.length;
            if (endRow < 0 || endRow > this.rows){ return false; }
            if (endCol < 0 || endCol > this.cols) { return false; }

            // Check if can place word in the spot
            let nRow = row;
            let nCol = col;
            let nCurIndex = curIndex;
            while(nRow != endRow && nCol != endCol){
                let ch = word[nCurIndex];
                if (checkOccupiedSquares(ch, nRow, nCol)){ return false; }
                nRow += dir;
                nCol += dir;
                nCurIndex += 1;
            }

            // Place the word
            nRow = row;
            nCol = col;
            nCurIndex = curIndex;
            while(nRow != endRow && nCol != endCol){
                let ch = word[nCurIndex];
                activeMatrix[nRow][nCol] = ch;
                occupiedSquares.push({"row": nRow, "col": nCol, "char": ch})
                nRow += dir;
                nCol += dir;
                nCurIndex += 1;
            }
            return true;
        }
        // Array to select functions from
        let placementFunctions = [placeHorizontal, placeVertical, placeDiagonal];
        const numAttempts = 500; // imperfect solution to prevent infinite looping
        let words2Pop = [];
        for (let i = 0; i < activeWords.length; i++){
            let activeWord = activeWords[i];
            let attempted = 0;
            while(attempted < numAttempts){
                let pRow = Math.floor(Math.random() * this.rows);
                let pCol = Math.floor(Math.random() * this.cols);
                let pFIndex = Math.floor(Math.random() * 3);
                let reverse = Math.floor(Math.random() * 2) == 0;
                let placementFunction = placementFunctions[pFIndex];
                let result = placementFunction(activeWord, pRow, pCol, reverse);
                if (result){
                    break;
                }
                attempted++;
            }

            // If max attempts then need to remove word from game because couldn't place it
            if (attempted == numAttempts){
                words2Pop.push(i);
            }
            // On last word and no words placed yet
            if (i == activeWords.length - 1 && words2Pop.length == activeWords.length){
                placeHorizontal(activeWord, 0, 0, false);
            }
        }

        words2Pop.reverse();

        // Remove unplaced words
        for (let i = 0; i < words2Pop.length; i++){
            this.activeWords.pop(words2Pop[i]);
        }

        return activeMatrix;
    }

    /*
     * Name: isOver
     * Description: makes over = true
     * Return: Noen
    */
    isOver(){
        return this.over;
    }

    /*
     * Name: validateSelection
     * Description: On mouse release, checks if previously highlighted characters form a word
     * If word is formed, checks if word is a part of the word list
     * If user found word in list, will record word found and mark as found
     * Return: None
    */
    validateSelection() {

        let word = this.selectedWord();

        // exits if no word
        if (!word) { return; }

        // exits if
        if (this.foundWord(word)) { return; }

        // records word as found if word was found
        if (this.activeWords.includes(word)) { this.addFound(word, this.currentSelection); }

        // If the game is over
        if (this.wordsFound.length === this.activeWords.length) {
            // stop timer
            this.over = true;
            // record score
            accessHighscores.updateHighscores(this.calculateHighscore(Math.round(new Date().getTime() / 1000) - this.startedTime), prompt("You Win! Please enter username:"), "word_search");
            this.reset();
        }

    }

    /*
     * Name: calculateHighscore
     * Description: Calculates the highscore of a game based on the duration and length of words
     * Return: Score (int)
    */
    calculateHighscore(duration){
        const MAX_SCORE_DURATION = 1000; // Max duration after which score is not affected
        const SCORE_DURATION_COEFFICIENT = 10;
        let c = 0;
        for (let i = 0; i < this.activeWords.length; i++){
            c += this.activeWords[i].length;
        }
        return Math.ceil(c * Math.max(1, (MAX_SCORE_DURATION - duration) * SCORE_DURATION_COEFFICIENT));
    }

    /*
     * Name: findCell
     * Description: Returns cell information at a given pixel
     * Return: An object with cell coordinates
    */
    findCell(x, y) {
        let colIndex = Math.floor((x - matX) / cellDims);
        let rowIndex = Math.floor((y - matY) / cellDims);

        // if out of bounds of grid, return null
        if (colIndex < 0 || colIndex >= this.cols || rowIndex < 0 || rowIndex >= this.rows) { return null; }

        // if there are valid indices, return the row and column
        return { "row": rowIndex, "col": colIndex};
    }

    /*
     * Name: selectedWord
     * Description: Retrives the selected word
     * Return: String
    */
    selectedWord() {

        // if there is no current selection, return blank
        if (!this.currentSelection) { return ""; }

        let txt= "";

        for (let value of this.currentSelection) { txt += value.character; }

        return txt;

    }

    /*
     * Function used to check if currently selected characters
     * are horizontal, vertical, or diagonal, and will return
     * array of currently highlighted characters
     */
    findSelection() {

        // if there is one or no cells selected, will return null
        if (!this.lastCell || !this.currentCell) { return null; }

        // execute functions in if else order
        // if hSelection is null, run vSelection, if not null, end;
        return this.horizontalSelection() || this.verticalSelection() || this.diagonalSelection();

    }

    /*
     * Checks to see if selected cells are in horizontal line
     * returns array of currently selected horizontal characters
     */
    horizontalSelection() {

        // if either last cell or current cell are null, return null
        if (!this.lastCell || !this.currentCell) { return null; }

        // if selection isn't horizontal, exit and go to next checker function
        if (this.lastCell.row != this.currentCell.row) { return null; }

        let characterArray = [];

        let delta = this.lastCell.col <= this.currentCell.col ? 1 : -1;

        for (let col = this.lastCell.col; col != this.currentCell.col + delta; col += delta) {

            let row = this.lastCell.row;
            let character = this.activeMatrix[row][col];

            characterArray.push( { "row": row, "col": col, "character": character } );

        }

        return characterArray;

    }

    /*
     * Checks to see if selected cells are in vertical line
     */
    verticalSelection() {

        // if either last cell or current cell are null, return null
        if (!this.lastCell || !this.currentCell) { return null; }

        // if the selection isn't vertical,
        // return null and pass to diagonal checker function
        if (this.lastCell.col != this.currentCell.col) { return null; }

        let characterArray = [];

        let delta = this.lastCell.row <= this.currentCell.row ? 1 : -1;

        for (let row = this.lastCell.row; row != this.currentCell.row + delta; row += delta) {

            let col = this.lastCell.col;
            let character = this.activeMatrix[row][col];

            characterArray.push( { "row": row, "col": col, "character": character } );

        }

        return characterArray;

    }

    /*
     * Checks to see if the user is highlighting the characters
     * in a diagonal line. If they aren't, function will stop
     * user from highlighting characters in a random order
     */
    diagonalSelection() {

        if (!this.lastCell || !this.currentCell) { return null; }

        // if successive selected cells are not diagonal, exits returning null
        if (Math.abs(this.currentCell.row - this.lastCell.row) != Math.abs(this.currentCell.col - this.lastCell.col)) { return null; }

        let characterArray = [];

        let dHorizontal = this.lastCell.col <= this.currentCell.col ? 1 : -1;
        let dVertical = this.lastCell.row <= this.currentCell.row ? 1 : -1;

        let row = this.lastCell.row;
        let col = this.lastCell.col;



        while (row != this.currentCell.row + dVertical && col != this.currentCell.col + dHorizontal) {

            let character = this.activeMatrix[row][col];
			characterArray.push({ "row": row, "col": col, "character": character });
			row += dVertical;
			col += dHorizontal;

        }
        return characterArray;
     
    }

    /*
     * Name: isSelected
     * Description: Checks if a given cell is selected
     * Return: True if selected, else false
    */
    isSelected(row, col) {

        if (!this.currentSelection) { return false; }

        for (let value of this.currentSelection) {

            if (value.row === row && value.col === col) { return true; }

        }

        return false;

    }

    /*
     * Name: addFound
     * Description: Adds a word to the list of words found
     * Return: None
    */
    addFound(word, cells) { this.wordsFound.push( { "word": word, "cells": cells } ); }

    /*
     * Name: foundWord
     * Description: Checks if a word has been found
     * Return: True if found, else false
    */
    foundWord(word) {
        for (let value of this.wordsFound) {
            if (value.word === word) { return true; }
        }

        return false;
    }

    /*
     * Name: foundCell
     * Description: Checks if a word has been found that includes that cell
     * Return: True if found, else false
    */
    foundCell(row, col) {
        for (let value of this.wordsFound) {
            for (let valueCell of value.cells) {
                if (valueCell.row === row && valueCell.col === col) { return true; }
            }
        }

        return false;

    }
}
