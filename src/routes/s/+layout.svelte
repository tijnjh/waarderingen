<script lang="ts">
	import NavBar from "$lib/components/NavBar.svelte";

	let { children } = $props();
</script>

{@render children()}

<NavBar baseHref="/s" />

<style>
	:global(:root) {
		--theme-color: #ff9408;
	}
</style>
