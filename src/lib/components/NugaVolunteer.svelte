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
				style="background-image: url('/bg.svg'); background-size: auto 100%; background-repeat: no-repeat; background-position: left top;"
			></div>
			<div class="z-10 text-center lg:text-left items-center justify-center mx-auto">
				<h1
					class="text-xl text-center font-['Raleway'] text-white md:text-3xl lg:text-6xl mb-4 md:mb-6 lg:mb-8 font-bold leading-tight"
				>
					<span class="relative inline-block px-1">
						<span class="relative z-10">NUGames</span>

						<img src="brush.svg" alt="" />
					</span>
					Volunteer
				</h1>
				<p class="text-gray-300 text-sm md:text-lg text-center lg:text-xl mb-4 md:mb-6 lg:mb-8">
					Join and become a certified 1Volunteer Service (1VoS) provider. Get trained, build
					in-demand skills, and <br /> unlock access to global volunteer networks like FISU and the
					UN Volunteer Corps. Let's make history <br /> together.
				</p>

				<div class="flex gap-12 justify-center">
					<Button>Join In</Button>
					<Button kind="tertiary" class="bg-white">Learn More</Button>
				</div>
			</div>
		</div>
	</div>
</section>
