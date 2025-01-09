<script lang="ts">
	interface Props {
		type: "success" | "info" | "warning" | "error";
		message: string;
	}
	let { type, message }: Props = $props();

	let icon = $state();

	switch (type) {
		case "success":
			icon = "✓";
			break;
		case "info":
			icon = "𝓲";
			break;
		case "warning":
			icon = "⚠";
			break;
		case "error":
			icon = "✗";
			break;
	}
</script>

<div class="notice justify-between flex p-4 rounded-md {type}">
	{message}
	<span>
		{icon}
	</span>
</div>

<style>
	.notice {
		background-color: color-mix(in srgb, currentColor 15%, transparent);
	}
	.success {
		@apply text-green-500;
	}
	.info {
		@apply text-blue-500;
	}
	.warning {
		@apply text-yellow-500;
	}
	.error {
		@apply text-red-500;
	}
</style>
