<template>
	<link rel="icon" type="image/x-icon" href="@/../public/favicon.ico">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<a class="navbar-brand" href="/">Home</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbar-content">
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link" href="/MineSweeper">MineSweeper</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/Snake">Snake</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/WordSearch">Word Search</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/Stacker">Stacker</a>
				</li>
				<!--<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbar-dropdown-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Other</a>
					<div class="dropdown-menu" aria-labelledby="navbar-dropdown-link">
						<a class="dropdown-item" href="/Highscores">High Scores</a>
						<a class="dropdown-item" href="/ScoreVisualization">Graphs</a>
					</div>
				</li>-->
				<li class="nav-item">
					<a class="nav-link disabled">|</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/Highscores">High Scores</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/ScoreVisualization">Graphs</a>
				</li>
			</ul>
		</div>

            <!--<router-link to="/">Home</router-link> |
            <router-link to="/MineSweeper">MineSweeper</router-link> |
			<router-link to="/Snake">Snake</router-link> |
            <router-link to="/WordSearch">WordSearch</router-link> |
			<router-link to="/Stacker">Stacker</router-link> |
            <router-link to="/Highscores">Highscores</router-link> |
            <router-link to="/ScoreVisualization">Graphs</router-link>-->
        
    </nav>
</template>

<script>
    export default {
        name: "NavigationBanner"
    }
</script>