<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import NavBar from "$lib/components/NavBar.svelte";

	let { children } = $props();
</script>

<Header value="DASHBOARD" />

<main class="p-4 grid-cols-1 grid gap-8 pb-32">
	{@render children()}
</main>

<NavBar baseHref="/d" />

<style>
	:global(:root) {
		--theme-color: #39dea1;
	}
</style>
