<template>
    <div class="home">
		<div class="container">
			<h3>Games</h3>
			<div class="row">
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
						<img class="card-img-top" src="@/../public/images/snake.png" alt="Word Search">
						<h5 class="card-title">Word Search</h5>
						<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<a href="/MineSweeper" class="btn btn-primary">Play</a>
					</div>
				</div>
			</div>
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