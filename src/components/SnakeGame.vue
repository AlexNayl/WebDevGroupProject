<template>
    <p v-if="running">Score {{ score }}</p>
	<p v-if="!running">Press WASD or the Arrow Keys to begin</p>
    <div id="snakeDiv"></div>
</template>

<script>
    import p5 from "p5";
	import accessHighscores from '@/../public/scripts/access_highscores.js';
    class Snake {
        constructor(vuePage) {
            this.vuePage = vuePage;
            this.setup(30, 20, 25);
        }

        placeFood() {
            do {
                this.foodx = Math.floor(Math.random() * this.width);
                this.foody = Math.floor(Math.random() * this.height);
            } while ((this.x == this.foodx && this.y == this.foody) || this.isCoordInTail(this.x, this.y));
            // Keeps picking random locations which are not occupied by the snake
            console.log("Placed food at ", this.foodx, ", ", this.foody);
        }

        addFood() {
            this.food += 3;
        }

        isCoordInTail(x, y) {
            for (let coord of this.tail) {
                if (coord[0] == x && coord[1] == y) {
                    return true;
                }
            }
            return false;
        }

        reset() {
            this.running = false;
			this.vuePage.running = false;
			if (this.vuePage.score > 0) {
				accessHighscores.updateHighscoresSnake(this.vuePage.score, prompt("Enter a name:"));
			}
            this.tail = [];
            this.x = Math.floor(this.width / 2);
            this.y = Math.floor(this.height / 2);
            this.food = 10;
            this.direction = 0;
			this.vuePage.score = 0
            this.placeFood();
        }

        // width and height are number of cells, not pixels
        // cellSize is the number of pixels per cell
        setup(width, height, cellSize) {
            this.width = width;
            this.height = height;
            this.cellSize = cellSize;
            this.x = Math.floor(width / 2);
            this.y = Math.floor(height / 2);
            this.tail = [];
            this.food = 10;
            this.foodx = 0;
            this.foody = 0;
            this.direction = 0; // 0: Right, 1: Down, 2: Left, 3: Up
			this.vuePage.score = 0;
            this.running = false;
			this.vuePage.running = false;

            const sketch = (s) => {
                s.setup = () => {
                    let c = s.createCanvas(width * cellSize, height * cellSize);
                    s.frameRate(10);
                    c.parent("snakeDiv");
                    this.placeFood();
                }

                s.draw = () => {
                    // Update
                    if (this.running) {
                        // Movement
                        if (this.direction == 0) {
                            // Right
                            this.x++;
                            if (this.x >= width) {
                                this.x = 0;
                            }
                        } else if (this.direction == 1) {
                            // Down
                            this.y++;
                            if (this.y >= height) {
                                this.y = 0;
                            }
                        } else if (this.direction == 2) {
                            // Left
                            this.x--;
                            if (this.x < 0) {
                                this.x = width - 1;
                            }
                        } else if (this.direction == 3) {
                            // Up
                            this.y--;
                            if (this.y < 0) {
                                this.y = height - 1;
                            }
                        }

                        // Collision check
                        if (this.isCoordInTail(this.x, this.y)) {
                            // Hit the tail, game over
                            this.reset();
                        }

                        // Food check
                        if (this.x == this.foodx && this.y == this.foody) {
                            this.addFood();
                            this.placeFood();
							this.vuePage.score++;
                        }

                        // Tail
                        this.tail.unshift([this.x, this.y]);
                        if (this.food <= 0) {
                            this.tail.pop();
                        } else {
                            this.food--;
                        }
                    }

                    s.clear();
                    s.fill(255, 255, 255);
                    s.stroke(0, 0, 0);
                    s.rect(0, 0, width * cellSize, height * cellSize);
                    
                    // Draw snake
                    s.fill(255, 0, 0);
                    s.noStroke();
                    s.square(this.x * cellSize, this.y * cellSize, cellSize);
                    // Tail
                    for (let coord of this.tail) {
                        s.square(coord[0] * cellSize, coord[1] * cellSize, cellSize);
                    }

                    // Draw food
                    s.fill(0, 255, 0);
                    s.square(this.foodx * cellSize, this.foody * cellSize, cellSize);
                }

                s.keyPressed = (e) => {
                    let key = e.key;
                    if ((key == "d" || key == "ArrowRight") && this.direction != 2) {
                        this.direction = 0;
                    } else if ((key == "s" || key == "ArrowDown") && this.direction != 3) {
                        this.direction = 1;
                    } else if ((key == "a" || key == "ArrowLeft") && this.direction != 0) {
                        this.direction = 2;
                    } else if ((key == "w" || key == "ArrowUp") && this.direction != 1) {
                        this.direction = 3;
                    }

                    if ((key == "w" || key == "a" || key == "s" || key == "d" || key == "ArrowRight" || key == "ArrowDown" || key == "ArrowLeft" || key == "ArrowUp") && !this.running) {
                        this.running = true;
						this.vuePage.running = true;
                    }
                }
            };
            this.sketch = new p5(sketch);
        }
    }

    import '@/../public/stylesheets/snake.css';

    export default {
        name: "SnakeGame",
        data() {
            return {
                game: null,
                p5Context: null,
				score: 0,
				running: false,
            }
        },
        methods: {
            startup() {
                this.game = new Snake(this);
            }
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
.p5canvas {
    margin: auto;
    border: 1px solid black;
}
</style>