<script lang="ts">
	import { page } from "$app/stores";
	import Notice from "$lib/components/Notice.svelte";
	import SkillRadar from "$lib/components/SkillRadar.svelte";

	const id = $page.params.id;

	async function fetchProfileById() {
		const response = await (await fetch(`/api/get-profile-by-id?id=${id}`)).json();
		return response;
	}
</script>

{#await fetchProfileById()}
	<Notice type="info" message="Loading profile..." />
{:then data}
	{#each data as p}
		<div>
			<h2>{p.id}: {p.name}</h2>
			<p>{p.opleiding}</p>
			<p>{p.picture}</p>

			<SkillRadar skills={JSON.parse(p.skills)} />
		</div>
	{:else}
		<Notice type="error" message="Profiel bestaat niet" />
	{/each}
{/await}
