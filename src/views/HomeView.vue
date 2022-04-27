<template>
    <div class="home">
		<h2>About</h2>
		<div class="w-100 d-flex justify-content-center">
			<p class="w-50">Welcome to WebDevGroupProject. This application runs primarily using Vue and Node JS. This application offers a variety of games which all allow one to earn a highscore. These highscores are sent to a database hosted by a server and results can be viewed in the Highscores and Graphs tabs.</p>
		</div>
		<div class="container">
			<h2>Games</h2>
			<div class="row d-flex justify-content-center">
				<div class="card col col-md-3">
					<div class="card-body">
						<img class="card-img-top" src="@/../public/images/minesweeper.png" alt="MineSweeper">
						<h5 class="card-title">MineSweeper</h5>
						<p class="card-text">The simple, but addicting classic where you use deduction to find the location of all bombs, which make you lose the game when clicked.</p>
						<a href="/MineSweeper" class="btn btn-primary">Play</a>
					</div>
				</div>
				<div class="card col col-md-3">
					<div class="card-body">
						<img class="card-img-top" src="@/../public/images/snake.png" alt="Snake">
						<h5 class="card-title">Snake</h5>
						<p class="card-text">Use WASD or your Arrow Keys to move the snake around the play area. Collect food to grow your snake and increase your score, but don't run into your tail!</p>
						<a href="/Snake" class="btn btn-primary">Play</a>
					</div>
				</div>
				<div class="card col col-md-3">
					<div class="card-body">
						<img class="card-img-top" src="@/../public/images/wordsearch.png" alt="Word Search">
						<h5 class="card-title">Word Search</h5>
						<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<a href="/WordSearch" class="btn btn-primary">Play</a>
					</div>
				</div>
				<div class="card col col-md-3">
					<div class="card-body">
						<img class="card-img-top" src="@/../public/images/stacker.png" alt="Stacker">
						<h5 class="card-title">Stacker</h5>
						<p class="card-text">Try to stack blocks on top of each other as high as you can. Try to be as perfect as you can, otherwise your new blocks will get smaller and smaller!</p>
						<a href="/Stacker" class="btn btn-primary">Play</a>
					</div>
				</div>
			</div>
			<h2>Utilities</h2>
			<div class="row d-flex justify-content-center">
				<div class="card col col-md-3">
					<div class="card-body">
						<h5 class="card-title">High Scores</h5>
						<p class="card-text">View a list of all users and their high scores per game.</p>
						<a href="/HighScores" class="btn btn-primary">View</a>
					</div>
				</div>
				<div class="card col col-md-3">
					<div class="card-body">
						<h5 class="card-title">Graph</h5>
						<p class="card-text">View a graph of all high scores per game.</p>
						<a href="/ScoreVisualization" class="btn btn-primary">View</a>
					</div>
				</div>
			</div>
		</div>
		<h2>Contributors</h2>
		<div class="w-100 d-flex justify-content-center">
			<table class="table w-50">
				<thead>
					<th>Name</th>
					<th>Github URL</th>
				</thead>
				<tbody>
					<tr>
						<td>Andrew Clegg</td>
						<td><a href="https://github.com/Andrew-Clegg">Link</a></td>
					</tr>
					<tr>
						<td>Samuel Jones</td>
						<td><a href="https://github.com/samuel-jones-uoit">Link</a></td>
					</tr>
					<tr>
						<td>Zachary Windover</td>
						<td><a href="https://github.com/ZacharyWindover">Link</a></td>
					</tr>
					<tr>
						<td>Alexander Naylor</td>
						<td><a href="https://github.com/AlexNayl">Link</a></td>
					</tr>
					<tr>
						<td>Bence Takacs</td>
						<td><a href="https://github.com/BenceTakacs15">Link</a></td>
					</tr>
				</tbody>
			</table>
		</div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'HomeView',
    components: {
    }
}
</script>

<style>
.card {
	width: 26rem;
}
</style>