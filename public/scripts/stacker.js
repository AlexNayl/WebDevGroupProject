import p5 from "p5";
import accessHighscores from '@/../public/scripts/access_highscores.js';

export default class Stacker {
	constructor(vuePage) {
		this.vuePage = vuePage;
		this.setup(10, 13, 40);
	}

	reset() {
		this.placedBlocks = [];
		this.posx = 0;
		this.posy = this.height - 1;
		this.dir = 1;
		this.length = 4;
	}

	placeBlock() {
		let lastBlock = this.getLastBlock();

		// Check for overlap
		if (this.placedBlocks.length > 0) {
			if (this.posx >= lastBlock.posx + lastBlock.length || this.posx + this.length - 1 < lastBlock.posx) {
				// Missed it, game over
				this.running = false;
				this.vuePage.running = false;
				this.reset();
				this.vuePage.score = 0;
				return;
			}
		}

		// Valid move
		
		// Check if we need to cut off the next block
		let newBlock = {"posx": this.posx, "posy": this.posy, "length": this.length};
		if (this.placedBlocks.length > 0) {
			if (this.posx == lastBlock.posx) {
				// Same spot
				this.length = Math.min(this.length, lastBlock.length);
				newBlock.length = this.length;
			} else if (this.posx < lastBlock.posx) {
				// Left of last block
				let overhang = lastBlock.posx - this.posx;
				this.length -= overhang;
				newBlock.posx = this.posx + overhang;
				newBlock.length = this.length;
			} else {
				// Right of last block
				let overhang = this.posx - lastBlock.posx;
				this.length -= overhang;
				newBlock.posx = this.posx;
				newBlock.length = this.length;
			}
		}

		// Place the block, move up
		this.placedBlocks.push(newBlock);
		this.posy--;

		this.vuePage.score += this.length;

		// Win the game
		if (this.posy < 0) {
			this.running = false;
			this.vuePage.running = false;
			accessHighscores.updateHighscoresStacker(this.vuePage.score, prompt("Enter a name:"));
			this.reset();
		}
	}

	getLastBlock() {
		return this.placedBlocks[this.placedBlocks.length - 1];
	}

	setup(width, height, cellSize) {
		this.width = width;
		this.height = height;
		this.cellSize = cellSize;
		this.posy = height - 1;
		this.posx = 0; // Left-most part of the block
		this.length = 4; // How many cells wide the block is
		this.dir = 1; // 1: Right, -1: Left
		this.placedBlocks = []; // Stores lists in the form [xpos, ypos, length]

		const sketch = (s) => {
			s.setup = () => {
				let c = s.createCanvas(width * cellSize, height * cellSize);
				c.parent("stacker-div");
				s.frameRate(10);
			}

			s.draw = () => {
				if (this.running) {
					if (this.posx + this.length == width) {
						this.dir = -1;
					} else if (this.posx == 0) {
						this.dir = 1;
					}
					this.posx += this.dir;
				}

				// Border
				s.clear();
				s.fill(255, 255, 255);
				s.stroke(0, 0, 0);
				s.rect(0, 0, width * cellSize, height * cellSize);

				// Player
				s.stroke(255, 0, 0);
				s.fill(255, 0, 0);
				s.rect(this.posx * cellSize, this.posy * cellSize, cellSize * this.length, cellSize);

				// Blocks
				for (let block of this.placedBlocks) {
					s.rect(block.posx * cellSize, block.posy * cellSize, cellSize * block.length, cellSize);
				}
			}

			s.keyPressed = (e) => {
				if (e.key == " ") {
					if (this.running) {
						this.placeBlock();
					} else {
						this.running = true;
						this.vuePage.running = true;
					}
				}
			};
		};

		this.sketch = new p5(sketch);
	}
}