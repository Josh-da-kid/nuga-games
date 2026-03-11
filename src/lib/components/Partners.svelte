<script lang="ts">
	import { Button } from 'carbon-components-svelte';
</script>

<section class="py-8 md:py-12 lg:py-16">
	<div class="mx-auto">
		<div
			class="border-2 border-[#161C2D] p-4 sm:p-6 md:p-12 lg:p-12 relative overflow-hidden min-h-[280px] md:min-h-[350px] lg:min-h-[442px] flex-col sm:flex-row gap-8 sm:gap-12 flex justify-center"
		>
			<div class="justify-center text-center items-start flex flex-col">
				<div
					class="flex flex-col gap-2 sm:gap-3 mb-6 sm:mb-8 text-center justify-center items-center mx-auto"
				>
					<h1 class="text-xl text-black md:text-2xl lg:text-4xl font-bold leading-tight">
						Partners & Sponsors
					</h1>

					<h2
						class="text-base sm:text-lg text-blue-600 md:text-xl lg:text-2xl font-semibold leading-tight"
					>
						Official Supporters of NuGames
					</h2>
				</div>

				<p class="text-black text-sm md:text-lg lg:text-xl mb-4 md:mb-6 lg:mb-8">
					Join leading brands in supporting the future of university sports in Nigeria. Partner <br
						class="hidden lg:block"
					/>
					with us to inspire excellence and create lasting impact. <br class="hidden lg:block" /> Together,
					we're making history at Paradise Games 2026
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center items-center mx-auto">
					<Button>Learn More</Button>
					<Button kind="tertiary">Become a Partner</Button>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	/* Ensures the SVG scales smoothly without pixelation */
	svg path {
		vector-effect: non-scaling-stroke;
	}
</style>
