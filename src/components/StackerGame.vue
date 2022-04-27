<template>
    <p v-if="running">Score {{ score }}</p>
	<p v-if="!running">Press Space to begin</p>
    <div id="stacker-div"></div>
</template>

<script>
	import Stacker from "@/../public/scripts/stacker.js";
	import '@/../public/stylesheets/stacker.css';

    export default {
        name: "StackerGame",
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
                this.game = new Stacker(this);
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