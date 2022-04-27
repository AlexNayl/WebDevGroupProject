<template>
    <p v-if="running">Score {{ score }}</p>
	<p v-if="!running">Press WASD or the Arrow Keys to begin</p>
    <div id="snakeDiv"></div>
</template>

<script>
	import Snake from "@/../public/scripts/snake.js";
    import '@/../public/stylesheets/snake.css';

    export default {
        name: "SnakeGame",
        data() {
            return {
                game: null,
                p5Context: null,
				score: 0,
				running: false,
            }
        },
        methods: {
            startup() {
                this.game = new Snake(this);
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