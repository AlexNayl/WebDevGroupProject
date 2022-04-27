/*
 *  Readability Legend:
 *  S = Size
 *  A/B/C/D/E = Indicates size type (8x8 = A, 10x10 = B, 12x12 = C, etc)
 *  M = Matrix No
 *  W = indicates word array for matrix / list of words in the word search map letiant
 *  A/B/C/D/E = Matrix type letiant (8x8 letiant 1 = A, 8x8 letiant 2 = B, etc)
 *  ex: SAMA = Size A Matrix A => Size = 8x8, Matrix = letiant A
 *  ex: SAMAW = list of words in size A letiant A
 */

import p5 from "p5";

/*
const SAMA = [
    ['A', 'R', 'V', 'S', 'C', 'U', 'O', 'H'],
    ['V', 'L', 'S', 'C', 'O', 'P', 'E', 'S'],
    ['T', 'A', 'M', 'U', 'B', 'P', 'L', 'T'],
    ['H', 'A', 'R', 'V', 'O', 'C', 'T', 'M'],
    ['L', 'H', 'T', 'M', 'L', 'L', 'T', 'U'],
    ['R', 'V', 'E', 'O', 'S', 'I', 'U', 'T'],
    ['R', 'A', 'S', 'L', 'E', 'O', 'T', 'F'],
    ['C', 'S', 'C', 'K', 'L', 'S', 'E', 'U'],
];

const SAMB = [
    ['C', 'G', 'J', 'S', 'C', 'S', 'K', 'L'],
    ['J', 'O', 'W', 'S', 'T', 'I', 'A', 'C'],
    ['A', 'L', 'K', 'L', 'F', 'F', 'S', 'O'],
    ['V', 'B', 'W', 'C', 'W', 'S', 'J', 'E'],
    ['A', 'A', 'K', 'S', 'A', 'N', 'A', 'D'],
    ['V', 'T', 'T', 'W', 'L', 'T', 'V', 'O'],
    ['A', 'C', 'T', 'F', 'I', 'W', 'S', 'C'],
    ['L', 'L', 'C', 'O', 'D', 'S', 'T', 'O'],
];

const SAMC = [
    ['A', 'I', 'C', 'L', 'A', 'N', 'K', 'Y'],
    ['T', 'L', 'C', 'L', 'A', 'N', 'C', 'Y'],
    ['U', 'Y', 'S', 'N', 'O', 'N', 'O', 'R'],
    ['R', 'C', 'Y', 'E', 'I', 'V', 'R', 'H'],
    ['I', 'E', 'N', 'G', 'T', 'V', 'S', 'H'],
    ['N', 'O', 'T', 'L', 'I', 'M', 'A', 'H'],
    ['G', 'R', 'O', 'S', 'T', 'L', 'H', 'D'],
    ['G', 'R', 'E', 'T', 'Z', 'K', 'Y', 'D'],
];

const SAMD = [
    ['O', 'P', 'I', 'G', 'G', 'A', 'M', 'I'],
    ['Y', 'R', 'N', 'Y', 'O', 'N', 'O', 'E'],
    ['O', 'O', 'I', 'R', 'S', 'G', 'T', 'N'],
    ['N', 'N', 'G', 'H', 'L', 'E', 'Y', 'R'],
    ['O', 'G', 'A', 'K', 'I', 'R', 'N', 'A'],
    ['M', 'E', 'M', 'I', 'N', 'K', 'E', 'J'],
    ['O', 'R', 'I', 'N', 'G', 'L', 'U', 'B'],
    ['I', 'H', 'S', 'O', 'T', 'A', 'S', 'Y'],
];
*/
const SAME = [
    ['P', 'G', 'O', 'H', 'S', 'U', 'P', 'W'],
    ['W', 'D', 'R', 'I', 'O', 'H', 'U', 'P'],
    ['J', 'N', 'F', 'I', 'O', 'G', 'E', 'M'],
    ['D', 'F', 'R', 'E', 'F', 'G', 'O', 'N'],
    ['B', 'L', 'N', 'E', 'A', 'F', 'A', 'A'],
    ['G', 'I', 'P', 'S', 'V', 'T', 'I', 'X'],
    ['X', 'R', 'U', 'R', 'I', 'Y', 'Y', 'N'],
    ['G', 'S', 'A', 'T', 'I', 'F', 'W', 'H'],
];
/*
const SEMA = [
    ['D', 'I', 'A', 'M', 'O', 'N', 'D', 'Y', 'K', 'S', 'S', 'N', 'A', 'M', 'O', 'N'],
    ['O', 'X', 'G', 'Y', 'D', 'E', 'E', 'P', 'S', 'R', 'O', 'F', 'D', 'E', 'E', 'N'],
    ['O', 'S', 'G', 'R', 'P', 'Y', 'O', 'T', 'O', 'M', 'C', 'L', 'A', 'N', 'C', 'Y'],
    ['Z', 'T', 'O', 'O', 'A', 'P', 'T', 'O', 'L', 'E', 'T', 'E', 'T', 'R', 'I', 'S'],
    ['L', 'A', 'P', 'R', 'O', 'N', 'N', 'U', 'N', 'G', 'R', 'T', 'E', 'Y', 'P', 'A'],
    ['T', 'R', 'S', 'A', 'B', 'K', 'D', 'T', 'D', 'Z', 'E', 'G', 'C', 'A', 'K', 'T'],
    ['F', 'F', 'N', 'I', 'P', 'O', 'I', 'T', 'T', 'F', 'G', 'X', 'C', 'V', 'L', 'N'],
    ['A', 'O', 'H', 'O', 'A', 'P', 'I', 'R', 'H', 'O', 'O', 'E', 'Z', 'B', 'N', 'A'],
    ['R', 'X', 'L', 'U', 'E', 'A', 'P', 'R', 'R', 'E', 'I', 'L', 'P', 'P', 'T', 'F'],
    ['C', 'C', 'L', 'D', 'S', 'C', 'T', 'F', 'A', 'N', 'F', 'P', 'L', 'S', 'K', 'L'],
    ['E', 'O', 'E', 'U', 'S', 'M', 'A', 'I', 'V', 'M', 'E', 'T', 'Z', 'A', 'F', 'A'],
    ['N', 'B', 'O', 'M', 'A', 'A', 'S', 'A', 'P', 'R', 'R', 'E', 'A', 'C', 'C', 'N'],
    ['I', 'O', 'R', 'D', 'R', 'N', 'D', 'G', 'O', 'R', 'T', 'E', 'F', 'U', 'Y', 'I'],
    ['M', 'L', 'L', 'K', 'O', 'E', 'N', 'O', 'M', 'E', 'K', 'O', 'P', 'O', 'T', 'F'],
    ['D', 'E', 'K', 'F', 'R', 'T', 'D', 'E', 'S', 'T', 'I', 'N', 'Y', 'U', 'G', 'O'],
    ['Z', 'I', 'C', 'S', 'R', 'E', 'A', 'I', 'D', 'N', 'E', 'P', 'I', 'S', 'S', 'O']
];

const SEMB = [
    ['I', 'D', 'A', 'I', 'A', 'S', 'D', 'O', 'R', 'P', 'L', 'D', 'O', 'R', 'Y', 'X'],
    ['I', 'M', 'E', 'G', 'N', 'N', 'K', 'E', 'I', 'Z', 'Z', 'O', 'M', 'G', 'F', 'E'],
    ['X', 'P', 'A', 'R', 'O', 'E', 'N', 'G', 'A', 'T', 'N', 'O', 'M', 'F', 'B', 'Z'],
    ['T', 'Y', 'K', 'Z', 'M', 'E', 'L', 'T', 'S', 'A', 'C', 'L', 'A', 'U', 'S', 'B'],
    ['H', 'E', 'L', 'P', 'A', 'O', 'N', 'E', 'H', 'W', 'C', 'N', 'C', 'Z', 'T', 'A'],
    ['Y', 'I', 'N', 'G', 'D', 'L', 'N', 'O', 'N', 'E', 'A', 'K', 'E', 'E', 'H', 'E'],
    ['I', 'N', 'N', 'D', 'Y', 'O', 'U', 'I', 'S', 'K', 'Y', 'R', 'O', 'U', 'R', 'W'],
    ['W', 'U', 'O', 'R', 'S', 'T', 'F', 'I', 'P', 'G', 'A', 'H', 'D', 'T', 'M', 'A'],
    ['R', 'R', 'E', 'N', 'I', 'R', 'E', 'A', 'O', 'N', 'S', 'T', 'K', 'E', 'N', 'O'],
    ['W', 'A', 'H', 'A', 'O', 'I', 'K', 'T', 'N', 'R', 'O', 'H', 'T', 'I', 'N', 'M'],
    ['B', 'K', 'U', 'S', 'F', 'T', 'O', 'H', 'O', 'E', 'Y', 'P', 'R', 'O', 'B', 'A'],
    ['B', 'N', 'T', 'O', 'R', 'Y', 'M', 'L', 'I', 'B', 'E', 'A', 'K', 'K', 'O', 'D'],
    ['I', 'I', 'V', 'N', 'O', 'I', 'S', 'E', 'L', 'E', 'W', 'K', 'T', 'H', 'Y', 'I'],
    ['O', 'F', 'U', 'G', 'Z', 'A', 'E', 'T', 'O', 'U', 'T', 'O', 'F', 'T', 'H', 'A'],
    ['E', 'H', 'O', 'U', 'T', 'N', 'S', 'E', 'N', 'O', 'W', 'B', 'E', 'F', 'O', 'K'],
    ['R', 'E', 'I', 'T', 'J', 'A', 'C', 'K', 'A', 'L', 'S', 'I', 'K', 'E', 'E', 'A'],
];
*/
/*
const SAMAW = ['SCOPE', 'let', 'HTML', 'COBOL', 'UTIL'];
const SAMBW = ['CODE', 'CSS', 'JAVA', 'SWIFT', 'STACK'];
const SAMCW = ['CLANCY', 'DAVINCI', 'HAMILTON', 'TESLA', 'TURING'];
const SAMDW = ['YUKIHIRO', 'SATOSHI', 'GOSLING', 'BJARNE'];

const SBMAW = ['DOG', 'CAT', 'ORCA', 'FOX', 'SQUID', 'WOLF', 'FALCON', 'PENGIUN'];
const SBMBW = ['ACTION', 'HORROR', 'COMEDY', 'DRAMA', 'THRILLER', 'SCIFI', 'ROMANCE', 'CRIME'];
const SBMCW = ['PINE', 'MAPLE', 'BIRCH', 'OAK', 'GINKO', 'CHERRY', 'SEQUOIA', 'EVERGREEN', 'ASH', 'SPRUCE'];
const SBMDW = ['DEADPOOL', 'SUPERMAN', 'BATMAN', 'SPIDERMAN', 'IRONMAN', 'ANTMAN', 'DRSTRANGE', 'FLASH', 'WOLVERINE', 'HULK'];
const SBMEW = ['VENENO', 'HURACAN', 'JESKO', 'SPEEDTAIL', 'SENNA', 'CHIRON', 'DIVO', 'ENZO', 'STRADALE', 'BATTISTA', 'CHARGER', 'CHALLENGER'];

const SCMAW = ['STARSHIP', 'NEWGLENN', 'FALCON', 'ELECTRON', 'ANTARES', 'NEWSHEPARD', 'ARES', 'MINOTAUR', 'DELTA', 'ATLAS', 'ATHENA',
                        'PEGASUS', 'TITAN', 'SATURN', 'ENTERPRISE', 'COLUMBIA', 'CHALLENGER', 'DISCOVERY', 'ATLANTIS', 'ENDEAVOUR'];

const SCMBW = ['ROSE', 'DAISY', 'LILAC', 'LILY', 'IRIS', 'JASMINE', 'POPPY', 'TULIP', 'LAVENDER',
                        'PEONY', 'BUTTERCUP', 'PRIMROSE', 'ORCHID', 'SUNFLOWER'];

const SCMCW = ['COFFEE', 'TEA', 'BOBA', 'WATER', 'JUICE', 'WINE', 'CHAMPAGNE', 'VODKA', 'WHISKEY',
                        'RUM', 'SMOOTHIE', 'SODA', 'BEER', 'LEMONADE', 'MILK'];

const SCMDW = ['UKRAINE', 'TAIWAN', 'SOUTHKOREA', 'INDIA', 'FINLAND', 'SWEDEN', 'DENMARK', 'NORWAY', 'JAPAN',
                        'HONGKONG', 'FRANCE', 'ITALY', 'SPAIN', 'GERMANY', 'POLAND', 'CANADA', 'MEXICO'];

const SCMEW = ['GALILEO', 'NEWTON', 'HUBBLE', 'ARECIBO', 'WEBB', 'CANADARM', 'ZARYA', 'POISK', 'RASSVET', 'BEAM', 'HARMONY',
                        'UNITY', 'DESTINY', 'TRANQUILITY', 'NAUKA', 'NICER', 'DEXTRE', 'BISHOP', 'KERBAL', 'PRICHAL'];


const SDMAW = ['SOCCER', 'HOCKEY', 'BASKETBALL', 'BASEBALL', 'FOOTBALL', 'RUGBY', 'CRICKET', 'BADMINTON', 'TENNIS', 'SKIING',
                    'CURLING', 'FENCING', 'WEIGHTLIFTING', 'GOFLING', 'VOLLEYBALL', 'SAILING', 'ROWING', 'BOBSLEIGH'];

const SDMBW = ['OILERS', 'NORDIQUES', 'WHALERS', 'PENGUINS', 'KINGS', 'JETS', 'FLAMES', 'HURRICANES', 'PANTHERS', 'KRAKEN', 'PREDATORS',
                    'AVALANCHE', 'WILD', 'MAPLELEAFS', 'BLACKHAWKS', 'BRUINS', 'CANADIENS', 'SABRES', 'CANUCKS', 'CAPITALS'];

const SDMCW = ['APPLE', 'GOOGLE', 'SAMSUNG', 'TESLA', 'FORD', 'DISNEY', 'HASBRO', 'SONY', 'MICROSOFT', 'HILTON', 'MONDELEZ', 'INTEL',
                    'NVIDIA', 'BOEING', 'TOYOTA', 'MATTEL', 'NIKE', 'AMAZON', 'HUAWEI', 'VOLKSWAGEN', 'EXXONMOBIL'];

const SDMDW = ['HAIDA', 'BISMARCK', 'YAMATO', 'HOOD', 'ROMA', 'IOWA', 'SCHARNHORST', 'NIMITZ', 'PRINZEUGEN',
                    'MIDWAY', 'FUBUKI', 'GEARING', 'HALLAND', 'ADMIRALHIPPER', 'REPUBLIQUE', 'VANGUARD'];

const SDMEW = ['WARTHOG', 'ARROW', 'CANUCK', 'LIGHTNING', 'RAPTOR', 'HORNET', 'FALCON', 'TYPHOON', 'BLACKBIRD', 'HARRIER',
                        'RAFALE', 'EAGLE', 'HERCULES', 'MUSTANG', 'SPITFIRE', 'CORSAIR', 'OSPREY', 'SPIRIT', 'PREDATOR'];


const SEMAW = ['NEEDFORSPEED', 'TOMCLANCY', 'TETRIS', 'FINALFANTASY', 'SUPERMARIOBROS', 'GRANDTHEFTAUTO', 'STARFOX', 'MINECRAFT',
                    'ZELDA', 'SPACEINVADERS', 'DESTINY', 'POKEMON', 'PACMAN', 'CENTIPEDE', 'CALLOFDUTY', 'FROGGER', 'ARK', 'DOTA'];

const SEMBW = ['THORN', 'OSA', 'ARUNI', 'IANA', 'WARDEN', 'NOMAD', 'KAID', 'LION', 'FINKA', 'DOKKAEBI', 'YING', 'LESION',
                    'JACKAL', 'BUCK', 'FROST', 'MUTE', 'SMOKE', 'ASH', 'CASTLE', 'MONTAGNE', 'FUZE', 'KAPKAN', 'AZAMI'];

const SEMCW = ['RED', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'PURPLE', 'BROWN', 'BLACK', 'CYAN', 'MAGENTA',
                    'CRIMSON', 'LIME', 'INDIGO', 'MAROON', 'AMBER', 'VERMILLION', 'SCARLET', 'MUSTARD'];

const SEKDW = ['STEGOSAURUS', 'PARASAUR', 'RAPTOR', 'MEGALODON', 'CARNOTAURUS', 'ALLOSAURUS', 'BARYONYX', 'BRONTOSAURUS', 'SPINOSAURUS',
                    'ARGENTAVIS', 'TRICERATOPS', 'TYRANNOSAURUSREX', 'PTERANODON', 'ANKYLOSAURUS', 'PLESIOSAUR', 'TROODON', 'DIMORPHODON'];

const SEMEW = ['LASAGNA', 'QUINOA', 'CHICKEN', 'LIME', 'PUTINE', 'BURRITO', 'FAJITAS', 'CROISSANT', 'CORN',
                    'SHRIMP', 'APFELSTRUDEL', 'MACARONS', 'SPANAKOPITA', 'YAKITORI', 'ONIGIRI'];

*/

const SAMEW = ['GRIFFIN', 'WYVERN', 'PEGASUS', 'PHOENIX', 'TITAN'];


const cellDims = 50;
const matX = 250;
const matY = 10;

export class WordSearch{
    constructor(sliderValue){
        this.rows = sliderValue;
        this.cols = sliderValue;
        this.activeWords = [];
        this.activeMatrix = [];
        this.wordsFound = [];
        this.lastCell = null;
        this.currentCell = null;
        this.currentSelection = null;
        this.over = false;
        this.updateBoard();

        const sketch = (s) => {

            // create canvas area
            s.setup = () => {
                s.createCanvas(1200, 800).parent("game");
            }


            s.draw = () => {
                s.clear();

                this.displayBackground(); // works

                this.displayMatrix();
                this.displaySelection();
                this.displayWords(); // works

                this.checkMouse();
            }

            // used to display background colour
            this.displayBackground = () => {
                s.background(255, 146, 37);
            }


            this.displayMatrix = () => {
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

            this.displaySelection = () => {
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

            this.displayWords = () => {
                s.push();
                s.noStroke();

                for (let index = 0; index < this.activeWords.length; index++) {

                    // makes a word in wordbank grey if found, else display as black
                    s.fill(this.foundWord(this.activeWords[index]) ? "Gray" : "Black");
                    s.text(this.activeWords[index], 30, matY + 20 + index * 50);

                }

                s.pop();
            }


            /*s.mousePressed = () => {
                console.log("mouse pressed")
                if (!this.lastCell) { this.lastCell = this.findCell(s.mouseX, s.mouseY); }
                let nextCell = this.findCell(this.mouseX, this.mouseY);

                if (nextCell) { this.currentCell = nextCell; }
                this.currentSelection = this.findSelection();
            }*/
            this.checkMouse = () => {
                // if mouse isn't pressed
                if (!s.mouseIsPressed) {
                    this.validateSelection();

                    this.lastCell = null;
                    this.currentCell = null;
                    this.currentSelection = null;
                    return;
                }

                if (!this.lastCell) { this.lastCell = this.findCell(s.mouseX, s.mouseY); }
				let nextCell = this.findCell(s.mouseX, s.mouseY);

                if (nextCell) { this.currentCell = nextCell; }
                this.currentSelection = this.findSelection();
            }
        };

        this.sketch = new p5(sketch);
    }

    updateBoard() {
        this.activeWords = SAMEW;
        this.activeMatrix = SAME;
    }

    isOver(){
        return this.over;
    }

    enter() {
        this.wordsFound = [];
    }

    validateSelection() {

        let word = this.selectedWord();

        // exits if no word
        if (!word) { return; }

        // exits if
        if (this.foundWord(word)) { return; }

        // records word as found if word was found
        if (this.activeWords.includes(word)) { this.addFound(word, this.currentSelection); }

        if (this.wordsFound.length === this.activeWords.length) {
            // stop timer
            // record score
            // something else
            this.over = true;
        }

    }

    findCell(x, y) {
        let colIndex = Math.floor((x - matX) / cellDims);
        let rowIndex = Math.floor((y - matY) / cellDims);

        // if out of bounds of grid, return null
        if (colIndex < 0 || colIndex >= this.cols || rowIndex < 0 || rowIndex >= this.rows) { return null; }

        // if there are valid indices, return the row and column
        return { "row": rowIndex, "col": colIndex};
        //return {"row": this.row, "col": this.col}
    }

    // return the selected word
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
            if (this.activeMatrix[row] == null){
                console.log("error found", row, col);
                console.log(this.lastCell);
            }
            console.log("horizontal selection");
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

    isSelected(row, col) {

        if (!this.currentSelection) { return false; }

        for (let value of this.currentSelection) {

            if (value.row === row && value.col === col) { return true; }

        }

        return false;

    }

    addFound(word, cells) { this.wordsFound.push( { "word": word, "cells": cells } ); }

    foundWord(word) {
        for (let value of this.wordsFound) {
            if (value.word === word) { return true; }
        }

        return false;
    }

    foundCell(row, col) {
        for (let value of this.wordsFound) {
            for (let valueCell of value.cells) {
                if (valueCell.row === row && valueCell.col === col) { return true; }
            }
        }

        return false;

    }
}
