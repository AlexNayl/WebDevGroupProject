<template>
    <div class="home">
		<h2>About</h2>
		<div class="w-100 d-flex justify-content-center">
			<p class="w-50">Welcome to WebDevGroupProject. This application runs primarily using Vue and Node JS. This application offers a variety of games which all allow one to earn a highscore. These highscores are sent to a database hosted by a server and results can be viewed in the High Scores and Graphs tabs.</p>
		</div>
		<div class="container">
			<!-- Games -->
			<h2>Games</h2>
			<div class="row d-flex justify-content-center">
				<!-- Minesweeper -->
				<div class="card col col-md-3">
					<div class="card-body">
						<img class="card-img-top" src="@/../public/images/minesweeper.png" alt="MineSweeper">
						<h5 class="card-title">MineSweeper</h5>
						<p class="card-text">The simple, but addicting classic where you use deduction to find the location of all bombs, which make you lose the game when clicked.</p>
						<router-link to="/MineSweeper" class="btn btn-primary">Play</router-link>
					</div>
				</div>
				<!-- Snake -->
				<div class="card col col-md-3">
					<div class="card-body">
						<img class="card-img-top" src="@/../public/images/snake.png" alt="Snake">
						<h5 class="card-title">Snake</h5>
						<p class="card-text">Use WASD or your Arrow Keys to move the snake around the play area. Collect food to grow your snake and increase your score, but don't run into your tail!</p>
						<router-link to="/Snake" class="btn btn-primary">Play</router-link>
					</div>
				</div>
				<!-- Word Search -->
				<div class="card col col-md-3">
					<div class="card-body">
						<img class="card-img-top" src="@/../public/images/wordsearch.png" alt="Word Search">
						<h5 class="card-title">Word Search</h5>
						<p class="card-text">Search for a set of words hidden in a matrix of random characters. Words can be backwards, diagonal, and they can cross each other.</p>
						<router-link to="/WordSearch" class="btn btn-primary">Play</router-link>
					</div>
				</div>
				<!-- Stacker -->
				<div class="card col col-md-3">
					<div class="card-body">
						<img class="card-img-top" src="@/../public/images/stacker.png" alt="Stacker">
						<h5 class="card-title">Stacker</h5>
						<p class="card-text">Try to stack blocks on top of each other as high as you can. Try to be as perfect as you can, otherwise your new blocks will get smaller and smaller!</p>
						<router-link to="/Stacker" class="btn btn-primary">Play</router-link>
					</div>
				</div>
			</div>
			<!-- Utilities -->
			<h2>Utilities</h2>
			<div class="row d-flex justify-content-center">
				<!-- High Scores -->
				<div class="card col col-md-3">
					<div class="card-body">
						<h5 class="card-title">High Scores</h5>
						<p class="card-text">View a list of all users and their high scores per game.</p>
						<router-link to="/Highscores" class="btn btn-primary">View</router-link>
					</div>
				</div>
				<!-- Graph -->
				<div class="card col col-md-3">
					<div class="card-body">
						<h5 class="card-title">Graph</h5>
						<p class="card-text">View a graph of all high scores per game.</p>
						<router-link to="/SoreVisualization" class="btn btn-primary">View</router-link>
					</div>
				</div>
			</div>
		</div>
		<!-- Contributors -->
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
    title: "Home",
    components: {
    }
}
</script>

<style>
.card {
	width: 26rem;
}
</style>