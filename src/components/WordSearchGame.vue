<template>
	<p>Time: {{time}}</p>
	<!--<p id="board-size">Board Size: {{boardSize}}</p>
	
	<div>
		
		<input type="range" min="8" max="16" value="8" step="8" class="slider" id="board-size-slider">
	</div>
	-->
	<div>
		<button @click="reset" id="resetButton">Reset</button>
	</div>

	<div id="game"></div>
</template>

<script>
	import * as aws from "@/../public/scripts/WordSearch.js";
	export default{
		name: "WordSearchGame",
		data(){
			return {
				game: null,
				boardSize: 0,
				time: 0,
			}
		},
		methods: {
			startup: function() {
				this.game = new aws.WordSearch(this);
			},
			reset: function(){
				if (!this.game){ return; }
				this.game.reset();
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
