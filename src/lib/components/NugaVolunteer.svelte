<script lang="ts">
	import { Button } from 'carbon-components-svelte';
</script>

<section class="py-8 md:py-12 lg:py-16">
	<div class=" mx-auto">
		<div
			class="bg-[#161C2D] border-2 border-[#161C2D] p-4 md:p-6 lg:p-12 relative overflow-hidden min-h-[280px] md:min-h-[350px] lg:min-h-[442px] flex flex-col justify-center"
		>
			<div
				class="absolute inset-0 opacity-40"
				style="background-image: url('/bg.svg'); background-size: 80% 100%; background-repeat: no-repeat; background-position: left center;"
			></div>
			<div class="z-10 text-center lg:text-left items-center justify-center mx-auto">
				<h1
					class="text-xl font-['Raleway'] text-center text-white md:text-3xl lg:text-5xl mb-4 md:mb-6 lg:mb-8 font-bold"
				>
					NUGames Volunteer
				</h1>
				<p
					class="text-gray-300 font-['Raleway'] text-sm md:text-lg text-center lg:text-xl mb-4 md:mb-6 lg:mb-8 font-medium"
				>
					A central hub showcasing verified profiles, official records, and historic
					highlights--built for <br />
					discovery, recognition, and legacy.
				</p>

				<div class="flex gap-6 justify-center">
					<Button>Join In</Button>
					<Button kind="tertiary" class="bg-white">Learn More</Button>
				</div>
			</div>
		</div>
	</div>
</section>
