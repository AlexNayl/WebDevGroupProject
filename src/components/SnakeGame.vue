<template>
	<p>Score 0</p>
</template>

<script>
    class Snake {
        constructor(vuePage) {
            this.vuePage = vuePage;
        }

        setup() {
            console.log("Setup"); 
        }
    }

    import '@/../public/stylesheets/snake.css';

    export default {
        name: "SnakeGame",
        data() {
            return {
                game: null,
                p5Context: null
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