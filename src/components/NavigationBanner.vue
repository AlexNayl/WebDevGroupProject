<template>
    <header>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/MineSweeper">MineSweeper</router-link> |
			<router-link to="/Snake">Snake</router-link> |
            <router-link to="/Highscores">Highscores</router-link> |
			<router-link to="/Stacker">Stacker</router-link> |
            <router-link to="/ScoreVisualization">Graphs</router-link> |
            <router-link to="/WordSearch">WordSearch</router-link>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "NavigationBanner"
    }
</script>