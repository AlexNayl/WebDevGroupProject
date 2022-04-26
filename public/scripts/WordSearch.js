/*
 *  Readability Legend:
 *  S = Size
 *  A/B/C/D/E = Indicates size type (8x8 = A, 10x10 = B, 12x12 = C, etc)
 *  M = Matrix No
 *  W = indicates word array for matrix / list of words in the word search map variant
 *  A/B/C/D/E = Matrix type variant (8x8 variant 1 = A, 8x8 variant 2 = B, etc)
 *  ex: SAMA = Size A Matrix A => Size = 8x8, Matrix = variant A
 *  ex: SAMAW = list of words in size A variant A
 */


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

const SAMAW = ['SCOPE', 'VAR', 'HTML', 'COBOL', 'UTIL'];
const SAMBW = ['CODE', 'CSS', 'JAVA', 'SWIFT', 'STACK'];
const SAMCW = ['CLANCY', 'DAVINCI', 'HAMILTON', 'TESLA', 'TURING'];
const SAMDW = ['YUKIHIRO', 'SATOSHI', 'GOSLING', 'BJARNE'];
const SAMEW = ['GRIFFIN', 'WYVERN', 'PEGASUS', 'PHOENIX', 'TITAN'];

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


const cellDims = 50;
const matX = 250;
const matY = 10;

var rows = 8;
var cols = 8;
var activeWords = [];
var activeMatrix = [];

var found = [];
var lastCell = null;
var currentCell = null;
var currentSelection = null;


function updateBoard(sliderValue) {
	
	// assign values to rows and cols
	if (sliderValue == 8) { 
		rows = 8; cols = 8;
	} else if (sliderValue == 10) { 
		rows = 10; cols = 10;
	} else if (sliderValue == 12) {
		rows = 12; cols = 12;
	} else if (sliderValue == 14) {
		rows = 14; cols = 14;
	} else {
		rows = 16; cols = 16;
	}
	
	// use random number generator to determine what matrix will be used
	var randInt = Math.floor((Math.random() * 5) + 1);
	
	switch (sliderValue) {
		case 8:
		
			switch (randInt) {
				case 1:
					words = SAMAW;
					matrix = SAMA
					break;
					
				case 2:
					words = SAMBW;
					matrix = SAMB;
					break;
					
				case 3: 
					words = SAMCW;
					matrix = SAMC;
					break;
					
				case 4: 
					words = SAMDW;
					matrix = SAMD;
					break;
					
				case 5:
					words = SAMEW;
					matrix = SAME;
					break;
			}
			
		case 10:
		
			switch (randInt) {
				case 1:
					words = SBMAW;
					matrix = SBMA;
					break;
					
				case 2:
					words = SBMBW;
					matrix = SBMB;
					break;
					
				case 3:
					words = SBMCW;
					matrix = SBMC;
					break;
					
				case 4:
					words = SBMDW;
					matrix = SBMD;
					break;
					
				case 5:
					words = SBMEW;
					matrix = SBME;
					break;
			}
				
		case 12:
		
			switch (randInt) {
				case 1:
					words = SCMAW;
					matrix = SCMA;
					break;
				
				case 2:
					words = SCMBW;
					matrix = SCMB
					
				case 3:
					words = SCMCW;
					matrix = SCMC;
					break;
						
				case 4:
					words = SCMDW;
					matrix = SCMD;
					break;
					
				case 5:
					words = SCMEW;
					matrix = SCME;
					break;
			}
			
		case 14:
		
			switch (randInt) {
				case 1:
					words = SDMAW;
					matrix = SDMA;
					break;
					
				case 2:
					words = SDMBW;
					matrix = SDMB;
					break;
					
				case 3:
					words = SCMCW;
					matrix = SDMC;
					break;
					
				case 4:
					words = SCMDW;
					matrix = SDMD;
					break;
					
				case 5:
					words = SCMEW;
					matrix = SDME;
					break;
			}
			
		case 16:
		
			switch (randInt) {
				case 1:
					words = SEMAW;
					matrix = SEMA;
					break;
				
				case 2:
					words = SEMBW;
					matrix = SEMB;
					break;
					
				case 3:
					words = SEMCW;
					matrix = SEMC;
					break;
					
				case 4:
					words = SEMDW;
					matrix = SEMD;
					break;
				
				case 5:
					words = SEMEW;
					matrix = SENE;
					break;
					
			}
			
	}
	
}

 function enter() {
	wordsFound = [];
 }
 
 function loop() {
	clear();
	
	displayBackground();
	display();
	checkMouse();
 }
 
 function displayBackground() {
	noStroke();
	background(255, 146, 37);
 }
 
 function checkMouse() {
	 
	 // if mouse isn't pressed
	if (!mouseIsPressed) {
		validateSelection();
		
		lastCell = null;
		currentCell = null;
		currentSelection = null;
		return;
	}
	
	if (!lastCell) { lastCell = findCell(mouseX, mouseY); }
	var nextCell = findCell(mouseX, mouseY);
	
	if (nextCell) { currentCell = nextCell; }
	currentSelection = findSelection();
 }
 
 function validateSelection() {
	
	var word = selectedWord();
	
	// exits if no word
	if (!word) { return; }
	
	// exits if 
	if (foundWord(word)) { return; }
	
	// records word found if word was found
	if (activeWords.includes(word)) { addFound(word, currentSelection); }
	
	if (found.length === activeWords.length) {
		// stop timer
		// record score
		// something else
	
	}
 
 }

 function findCell(x, y) {
	var colIndex = Math.floor((x - matX) / cellDims);
	var rowIndex = Math.floor((y - matY) / cellDims);
	
	// if out of bounds of grid, return null
	if (colIndex < 0 || colIndex >= cols || rowIndex < 0 || rowIndex >= rows) { return null; }
	
	// if there are valid indices, return the row and column
	return { row: row, col: col};
 }
 
 function display() {
	displayMatrix();
	displaySelection();
	displayWords();
 }
 
 function displayMatrix() {
	 
	push();
	
	textAlign(CENTER, CENTER);
	
	for (var row = 0; row < activeMatrix.length; row++) {
		var activeRow = activeMatrix[row];
		
		for (var col = 0; col < activeRow; col++) {
			var character = activeRow[col];
			
			var x = matX + col * cellDims;
			var y = matY + row * cellDims;
			
			stroke(0);
			
			// set colour of block:
			// if characters are highlighted, highlight colour is Fuchsia
			// if is a word, colour set to green
			// if not a word, turns back to white
			var colour = isSelected(row, col) ? "Fuchsia" : (foundCell(row, col) ? "Lime" : "White");
			fill(colour);
			rect(x, y, cellDims, cellDims);
			
			noStroke();
			fill(0);
			text(character, x + cellDims / 2, y + cellDims / 2);
		
		}
	}
	
	pop();
	
 }
 
 // return the selected word
 function selectedWord() {
	
	// if there is no current selection, return blank
	if (!currentSelection) { return ""; }
	
	var txt= "";
	
	for (var value of currentSelection) { text += value.character; }
	
	return txt;
	
 }
 
 function displaySelection() { 
 
	var txt = selectedWord();
	
	// if there is no selected word, return
	if (!text) { return; }
	
	push();
	noStroke();
	fill(0);
	textSize(20);
	text(txt, matX, matY + (rows + 1) * cellDims);
	pop();
 
 }
 
 function displayWords() { 
	
	push();
	noStroke();
	
	for (var index = 0; index < activeWords.length; index++) {
		
		fill(foundWord(activeWords[index]) ? "Gray" : "White");
		text(activeWords[index], 30, matY + 20 + index * 50);
		
	}
	
	pop();
 
 }
 
 function findSelection() {
 
	// if there is no last cell or current cell, return null
	if (!lastCell || !currentCell) { return null; }
	
	// execute functions in if else order
	// if hSelection is null, run vSelection, if not null, end;
	return horizontalSelection() || verticalSelection() || diagonalSelection();
 
 }
 
 function horizontalSelection() {
 
	// if either last cell or current cell are null, return null
	if (!lastCell || !currentCell) { return null; }
	
	// if selection isn't horizontal, exit function and go to next checker function
	if (lastCell.row != currentCell.row) { return null; }
	
	var characterArray = [];
	
	var delta = lastCell.col <= currentCell.col ? 1 : -1;
	
	for (var col = lastCell.col; col != currentCell.col + delta; col += delta) {
		
		var row = lastCell.row;
		var character = activeMatrix[row][col];
		
		characterArray.push( { row: row, col: col, character: character } );
		
	}
	
	return characterArray;
 
 }
 
 function verticalSelection() {
 
	// if either last cell or current cell are null, return null
	if (!lastCell || !currentCell) { return null; }
	
	// if the selection isn't vertical, 
	// return null and pass to diagonal checker function
	if (lastCell.col != currentCell.col) { return null; }
	
	var characterArray = [];
	
	var delta = lastCell.row <= currentCell.row ? 1 : -1;
	
	for (var row = lastCell.row; row != currentCell.row + delta; row += delta) {
	
		var col = lastCell.col;
		var character = activeMatrix[row][col];
		
		characterArray.push( { row: row, col: col, character: character } );
	
	}
	
	return characterArray;
 
 }
 
 function diagonalSelection() {
 
	if (!lastCell || !currentCell) { return null; }
	
	// if successive selected cells are not diagonal, exits returning null
	if (abs(currentCell.row - lastCell.row) != abs(currentCell.col - lastCell.col)) { return null; }
	
	var characterArray = [];
	
	var dHorizontal = lastCell.col <= currentCell.col ? 1 : -1;
	var dVertical = lastCell.row <= currentCell.row ? 1 : -1;
	
	var row = lastCell.row;
	var col = lastCell.col;
	
	while (row != currentCell.row + dVertical && col != currentCel.col + dHorizontal) {
	
		var character = activeMatrix[row][col];
		characterArray.push ( { row: row, col: col, character: character } );
	
	}
 
 }
 
 function isSelected(row, col) {
 
	if (!currentSelection) { return false; }
	
	for (var value of currentSelection) {
		
		if (value.row === row && value.col === col) { return true; }
	
	}
	
	return false;
 
 }
 
 function addFound(word, cells) { wordsFound.push( { word: word, cells: cells } ); }
 
 function foundCell(row, col) {
 
	for (var value of wordsFound) {
	
		for (var valueCell of value.cells) {
		
			if (valueCell.row === row && valueCell.col === col) { return true; }
		
		}
	
	}
	
	return false;
	
 }
