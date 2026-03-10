<script lang="ts">
	import { Button } from 'carbon-components-svelte';
</script>

<section class="py-8 md:py-12 lg:py-16">
	<div class="mx-auto">
		<div
			class="border-2 border-[#161C2D] p-4 md:p-6 lg:p-12 relative overflow-hidden min-h-[280px] md:min-h-[350px] lg:min-h-[442px] flex-col sm:flex-row gap-12 flex justify-center"
		>
			<div>
				<img src="/store.png" alt="NUGA Store Background" class="w-full h-[380px]" />
			</div>

			<div class="justify-center items-start flex flex-col text-left">
				<h1
					class="text-xl font-['Raleway'] text-black md:text-3xl lg:text-6xl mb-4 md:mb-6 lg:mb-8 font-bold leading-tight"
				>
					<span class="relative inline-block px-1">
						<span class="relative z-10">NUGames</span>
						<img src="brush2.svg" alt="" />
					</span>
					Online Store
				</h1>

				<p
					class="text-black font-['Raleway'] text-sm md:text-lg lg:text-xl mb-4 md:mb-6 lg:mb-8 font-medium"
				>
					Gear up for the games with official Paradise Games merchandise! Explore our <br
						class="hidden lg:block"
					/>
					wide selection of jerseys, hoodies, hats, and water bottles. Show your support for
					<br class="hidden lg:block" />
					your favorite team or sport with high-quality apparel and accessories.
				</p>
				<div>
					<Button>Shop Now</Button>
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
