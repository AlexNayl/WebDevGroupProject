<template>
	<link rel="icon" type="image/x-icon" href="@/../public/favicon.ico">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<router-link to="/" class="navbar-brand">Home</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbar-content">
			<ul class="navbar-nav">
				<li class="nav-item">
					<router-link to="/MineSweeper" class="nav-link">MineSweeper</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/Snake" class="nav-link">Snake</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/WordSearch" class="nav-link">Word Search</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/Stacker" class="nav-link">Stacker</router-link>
				</li>
				<li class="nav-item">
					<a class="nav-link disabled">|</a>
				</li>
				<li class="nav-item">
					<router-link to="/HighScores" class="nav-link">High Scores</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/ScoreVisualization" class="nav-link">MineSweeper</router-link>
				</li>
			</ul>
		</div>

    </nav>
</template>

<script>
    export default {
        name: "NavigationBanner"
    }
</script>