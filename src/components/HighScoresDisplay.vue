<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col" @click="sort('user_id')">Name</th>
                <th scope="col" @click="sort('minesweeper')">Minesweeper Score</th>
                <th scope="col" @click="sort('snake')">Snake Score</th>
                <th scope="col" @click="sort('stacker')">Stacker Score</th>
            </tr>
        </thead>
        <tbody>
            <tr v-bind:key="highscore.username" v-for="highscore in highscores">
                <td>{{highscore.user_id}}</td>
                <td>{{highscore.minesweeper}}</td>
                <td>{{highscore.snake}}</td>
                <td>{{highscore.stacker}}</td>
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
                lastSorted: "",
                sortDirection: true,
            }
        },
        methods: {
            // Start Up Code
            startup: async function(){
                this.highscores = await accessHighscores.getHighScores();
            },
            sort: function(type){
                let sortFunction = (hs1, hs2) => hs1[type] < hs2[type];
                if (this.sortDirection){
                    sortFunction = (hs1, hs2) => hs2[type] < hs1[type];
                }
                this.highscores.sort(sortFunction);
                if (type == this.lastSorted || this.lastSorted == ""){
                    this.sortDirection = !this.sortDirection;
                }
                this.lastSorted = type;
            }
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