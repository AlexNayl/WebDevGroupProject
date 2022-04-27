<template>
	<p>
		Find the hidden words on the board. They are placed horizontally, vertically, or diagonally, possibly reversed.
	</p>
	<p>Time: {{time}}</p>
	<div>
		<button @click="reset" id="resetButton">New Game</button>
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
</script>
