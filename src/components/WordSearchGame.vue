<template>
	<p>Time: {{time}}</p>
	<p id="board-size">Board Size: {{boardSize}}</p>
	
	<div>
		<!--<input type="range" min="8" max="16" value="8" step="8" class="slider" onchange="(updateBoard(this.value))" id="board-size-slider">-->
		<input type="range" min="8" max="16" value="8" step="8" class="slider" id="board-size-slider">
	</div>
	
	<div>
		<button @click="reset" id="resetButton">Reset</button>
	</div>
</template>

<script>
	import * as aws from "@/../public/scripts/WordSearch.js";
	import $ from 'jquery';
	export default{
		name: "WordSearchGame",
		data(){
			return {
				game: null,
				boardSize: 0,
			}
		},
		methods: {
			startup: function() {
				this.boardSize = $("#board-size-slider").val();
				this.game = new aws.WordSearch(this.boardSize);
				while(!this.game.isOver()){
					this.game.loop();
				}
			}
		},
		mounted(){
			this.$nextTick( () => {
				this.startup();
			});
		}
	}
	/*import $ from 'jquery';
	import accessHighScores from '@/../public/scripts/access_highscores.js';
	
	class Wordsearch{
		
	}*/
</script>
