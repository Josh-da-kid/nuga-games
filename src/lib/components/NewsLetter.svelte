<script lang="ts">
	import { Button } from 'carbon-components-svelte';
</script>

<section
	class="relative py-8 md:py-12 lg:py-4 px-4 md:px-6 lg:px-8 -mt-16 md:-mt-24 lg:-mt-32 mb-[-80px] md:mb-[-100px] lg:mb-[-120px] z-50"
>
	<div class="w-full max-w-7xl mx-auto justify-center items-center flex flex-col">
		<div
			class="bg-white p-4 sm:p-6 md:p-8 lg:p-12 relative items-center overflow-hidden flex flex-col md:flex-row gap-8 w-full shadow-2xl"
		>
			<div class="z-10 text-left w-full md:flex-1">
				<div>
					<h2 class="text-xl md:text-3xl lg:text-5xl mb-4 md:mb-6 lg:mb-8">Subscribe Newsletter</h2>
					<p class="text-base sm:text-lg md:text-xl lg:text-2xl w-full">
						Stay updated with the latest news, events, and exclusive <br class="hidden md:block" /> content
						from Paradise Games.
					</p>
				</div>
			</div>

			<div class="flex flex-col sm:flex-row gap-y-4 gap-4 w-full md:w-[400px] lg:w-[530px]">
				<div class="w-full sm:flex-1">
					<input
						type="text"
						placeholder="Enter your email."
						class="text-base sm:text-lg md:text-xl font-semibold bg-gray-100 border-2 border-gray-300 focus:ring-2 focus:outline-none focus:ring-blue-600 p-3 w-full font-[Raleway]"
					/>
				</div>

				<div class="w-fit">
					<Button class="text-base sm:text-lg w-full sm:w-auto">Subscribe</Button>
				</div>
			</div>
		</div>
	</div>
</section>
