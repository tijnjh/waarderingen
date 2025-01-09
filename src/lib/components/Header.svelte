<script lang="ts">
	let { value }: { value: string } = $props();
</script>

<header class="py-8 px-4 text-white bg-[--theme-color]">
	<h1 class="font-medium text-xl">{value}</h1>
</header>
