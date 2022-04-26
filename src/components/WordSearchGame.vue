<template>
	<p>Time: {{time}}</p>
	<p id="board-size">Board Size: {{boardSize}}</p>
	
	<div>
		<input type="range" min="8" max="16" value="8" step="8" class="slider" onchange=(updateBoard(this.value)) id="board-size-slider">
	</div>
	
	<div>
		<button @click="reset" id="resetButton">Reset</button>
	</div>
</template>

<script>
	import $ from 'jquery';
	import accessHighScores from '@/../public/scripts/access_highscores.js';
	
	class Wordsearch{
		
	}
</script>
