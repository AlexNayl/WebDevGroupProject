<template>
    <p>Flags Placed: {{flagsPlaced}}</p>
    <p>Time: {{time}}</p>
    <p id="board-size">Board Size: {{boardSize}}</p>
    <div>
        <input type="range" min="6" max="12" value="9" class="slider" id="board-size-slider">
    </div>
    <p id="bombs">Bombs: {{bombs}}</p>
    <div>
        <input type="range" min="5" max="50" value="10" class="slider" id="bombs-slider">
    </div>
    <button @click="reset" id="resetButton">New Game</button>
    <div id="gameDiv"></div>
</template>

<script>
    import Minesweeper from "@/../public/scripts/minesweeper.js";
	import $ from 'jquery';
    import '@/../public/stylesheets/minesweeper.css';

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
                this.updateBombs(); // Update number of bombs in case we have exceeded max bomb count
            },
            updateBombs() {
                let val = document.querySelector("#bombs-slider").value;
                val = Math.floor(Math.min(val, this.boardSize * this.boardSize / 3)); // Max number of bombs should be 1/3 board size
                this.bombs = val;
            },
            reset: function (){
                this.game.reset(this.bombs, this.boardSize);
            },
        }, 
        mounted(){
            // Call Start Up Code
            this.$nextTick(() => {
                this.startup();
            })
        },
    }
</script>