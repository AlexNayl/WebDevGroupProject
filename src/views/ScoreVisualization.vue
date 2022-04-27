<template>
    <div>
        <h1>Score Visualization</h1>
        <GraphCreator />
    </div>
</template>

<script>
    import GraphCreator from '@/components/GraphCreator.vue'
    export default {
        name: "ScoreVisualization",
        title: "Graphs",
        components: {
            GraphCreator,
        },
    }
</script>