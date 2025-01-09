<script lang="ts">
	let newSkills = $state([1, 1, 1, 1, 1]);
</script>

<form
	action="/api/create-profile"
	method="POST"
	enctype="multipart/form-data"
	class="grid grid-cols-1 gap-4"
>
	<label>
		<span>ID</span>
		<input type="number" id="id" name="id" required />
	</label>

	<label>
		<span>Name</span>
		<input type="text" id="name" name="name" maxlength="255" required />
	</label>

	<label>
		<span>Opleiding</span>
		<input type="text" id="opleiding" name="opleiding" maxlength="255" required />
	</label>

	<label>
		<span>Picture URL</span>
		<input type="text" id="picture" name="picture" required />
	</label>

	<h2 class="text-2xl font-medium mt-4">skills</h2>

	<div class="grid mb-4 grid-cols-2 gap-2">
		<div></div>
		<div class="flex justify-between">
			<span>Junior</span>
			<span>Medior</span>
			<span>Senior</span>
		</div>

		{@render skillInput("Vakkundigheid", 0)}
		{@render skillInput("Productie", 1)}
		{@render skillInput("Complexiteit", 2)}
		{@render skillInput("Zelfregie", 3)}
		{@render skillInput("Samenwerken", 4)}
	</div>

	<input type="submit" class="btn" value="Creëer nieuw profiel" />
</form>

{#snippet skillInput(label: string, critIndex: number)}
	{@const lowerLabel = label.toLowerCase()}
	<label for={lowerLabel}>{label}</label>
	<input name={lowerLabel} type="range" min="1" max="3" bind:value={newSkills[critIndex]} />
{/snippet}

<style>
	label {
		@apply grid grid-cols-1;
	}

	label > input {
		@apply shadow border px-3 py-1 rounded;
	}
</style>
