<template>
	<div class="WordSearch">
		<h1>Word Search</h1>
		<WordSearchGame />
	</div>
</template>

<script>
	import WordSearchGame from '@/components/WordSearchGame.vue'
	export default {
		name: "WordSearch",
		components: {
			WordSearchGame,
		},
	}
</script>
