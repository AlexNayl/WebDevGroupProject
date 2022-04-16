<template>
    <div>
        <h1>Highscores</h1>
        <HighScoresDisplay />
    </div>
</template>

<script>
    import HighScoresDisplay from '@/components/HighScoresDisplay.vue'
    export default {
        name: "HighScoresView",
        components: {
            HighScoresDisplay,
        },
    }
</script>