<script lang="ts">
	import { Grid, Chatbox, Person } from "svelte-ionicons";
	import type { Component } from "svelte";
	import { page } from "$app/stores";

	let { baseHref }: { baseHref: string } = $props();
</script>

<nav
	class="flex bg-white justify-around items-center fixed w-full h-16 border rounded-t-xl bottom-0"
>
	{@render navItem(Grid, `${baseHref}`)}
	{@render navItem(Chatbox, `${baseHref}/feedback`)}
	{@render navItem(Person, `${baseHref}/personal`)}
</nav>

{#snippet navItem(Icon: Component, href: string)}
	<a
		{href}
		class="data-[active]:text-[--theme-color] text-[--gray] grow flex items-center justify-center h-full"
		data-active={$page.url.pathname === href || null}
	>
		<Icon />
	</a>
{/snippet}
