<template>
    <div class="StackerView">
        <h1>Stacker</h1>
        <StackerGame />
    </div>
</template>

<script>
    import StackerGame from '@/components/StackerGame.vue'
    export default {
        name: "StackerView",
        components: {
            StackerGame,
        },
    }
</script>