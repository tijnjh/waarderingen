<script lang="ts">
	let { skills }: { skills: number[] } = $props();

	import {
		Chart,
		RadialLinearScale,
		RadarController,
		PointElement,
		LineElement,
		Filler
	} from "chart.js";

	let ref: HTMLCanvasElement | null = null;

	Chart.register(RadialLinearScale, RadarController, PointElement, LineElement, Filler);

	$effect(() => {
		new Chart(ref!.getContext("2d")!, {
			type: "radar",
			data: {
				labels: ["Vakkundigheid", "Productie", "Complexiteit", "Zelfregie", "Samenwerken"],
				datasets: [
					{
						label: "hi",
						data: skills,
						fill: true,
						backgroundColor: "rgba(9, 192, 70, 0.2)",
						borderColor: "rgb(9, 192, 70)",
						pointBackgroundColor: "rgb(9, 192, 70)",
						pointBorderColor: "#fff",
						pointHoverBackgroundColor: "#fff",
						pointHoverBorderColor: "rgb(9, 192, 70)"
					}
				]
			},
			options: {
				scales: {
					r: {
						angleLines: {
							display: false
						},
						suggestedMin: 0,
						suggestedMax: 3
					}
				}
			}
		});
	});
</script>

<div>
	<canvas bind:this={ref}></canvas>
</div>
