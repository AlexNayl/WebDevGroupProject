<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Minesweeper Score</th>
                <th scope="col">Snake Score</th>
            </tr>
        </thead>
        <tbody>
            <tr v-bind:key="highscore.username" v-for="highscore in highscores">
                <td>{{highscore.user_id}}</td>
                <td>{{highscore.minesweeper}}</td>
                <td>{{highscore.snake}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import accessHighscores from '@/../public/scripts/access_highscores.js';
    import '@/../public/stylesheets/highscores.css';
    
    export default {
        name: "HighScoresDisplay",
        data(){
            return {
                highscores: [],
            }
        },
        methods: {
            // Start Up Code
            startup: async function(){
                this.highscores = await accessHighscores.getHighScores();
            },
        }, 
        mounted(){
            // Call Start Up Code
            this.$nextTick(() => {
                this.startup();
            })
        },
    }
</script>

<style>
    table{
        margin-left: auto;
        margin-right: auto;
    }
</style>