<template>
    <div class="SnakeView">
        <h1>Snake</h1>
        <SnakeGame />
    </div>
</template>

<script>
    import SnakeGame from '@/components/SnakeGame.vue'
    export default {
        name: "SnakeView",
        title: "Snake Game",
        components: {
            SnakeGame,
        },
    }
</script>