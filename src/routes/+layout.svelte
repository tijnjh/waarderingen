<script lang="ts">
	import "../app.css";
	let { children } = $props();
</script>

{@render children()}

<style>
	:global(main) {
		@apply p-4 grid-cols-1 grid gap-8 pb-32;
	}
</style>
