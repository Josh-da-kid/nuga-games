<script lang="ts">
	import { Button } from 'carbon-components-svelte';
</script>

<section class="py-8 md:py-12 lg:py-16">
	<div class="mx-auto">
		<div
			class="border-2 border-[#161C2D] p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden min-h-[280px] md:min-h-[350px] lg:min-h-[442px] flex-col sm:flex-row gap-8 sm:gap-12 flex justify-center"
		>
			<div class="w-full sm:w-[350px] md:w-[400px] lg:w-auto flex-shrink-0">
				<img
					src="/store.png"
					alt="NUGA Store Background"
					class="w-full h-[260px] sm:h-[300px] md:h-[340px] lg:h-[380px] object-contain"
				/>
			</div>

			<div class="justify-center items-start flex flex-col text-left">
				<h1
					class="text-xl font-['Raleway'] text-black md:text-3xl lg:text-6xl mb-4 md:mb-6 lg:mb-8 font-bold leading-tight"
				>
					<span class="relative inline-block px-1">
						<span class="relative z-10">NUGames</span>
						<img src="brush2.svg" alt="" class="w-24 h-5 sm:w-36 md:w-40 lg:w-full sm:h-auto" />
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
					<Button
						><span class="flex items-center gap-2"
							>Shop Now
							<svg
								width="16"
								height="16"
								viewBox="0 0 32 32"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									d="M27.414 15L6 15a1 1 0 0 0 0 2l21.414 0-6.707 6.707 1.414 1.414L30.414 17 22.121 8.879l-1.414 1.414z"
								/>
							</svg>
						</span>
					</Button>
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
