<template>
    <div class="MineSweeper">
        <h1>MineSweeper</h1>
        <MineSweeperGame />
    </div>
</template>

<script>
    import MineSweeperGame from '@/components/MineSweeperGame.vue'
    export default {
        name: "MineSweeper",
        title: "Minesweeper",
        components: {
            MineSweeperGame,
        },
    }
</script>