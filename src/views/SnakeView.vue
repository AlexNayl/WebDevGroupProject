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
        components: {
            SnakeGame,
        },
    }
</script>