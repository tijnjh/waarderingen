<script lang="ts">
	async function fetchProfiles() {
		const response = await (await fetch("/api/get-profiles")).json();
		return response;
	}
</script>

<h2 class="font-medium text-xl">STUDENTEN</h2>

<ul class="grid grid-cols-1 w-full gap-4">
	{#await fetchProfiles()}
		Loading profiles...
	{:then profiles}
		{#each profiles as profile}
			<li>
				<a href={`/d/profile/${profile.id}`} class="btn p-4 block bg-[--theme-color] rounded-xl">
					<p>{profile.id}: {profile.name}</p>
				</a>
			</li>
		{/each}
	{/await}
</ul>

<a class="btn" href="/d/create-profile">Nieuw profiel aanmaken</a>

{#snippet listing(profile: App.Profile)}
	<li>
		<a href={`/d/profile/${profile.id}`} class="p-4 block bg-[--theme-color] rounded-xl">
			<p>{profile.id}: {profile.name}</p>
		</a>
	</li>
{/snippet}
