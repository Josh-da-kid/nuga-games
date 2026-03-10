<script lang="ts">
	import { Button } from 'carbon-components-svelte';
</script>

<section class="py-8 md:py-12 lg:py-16">
	<div class=" mx-auto">
		<div
			class="bg-[#161C2D] border-2 border-[#161C2D] p-4 md:p-6 lg:p-12 relative overflow-hidden min-h-[280px] md:min-h-[350px] lg:min-h-[442px] flex flex-col justify-center"
		>
			<div
				class="absolute inset-0 opacity-20"
				style="background-image: url('/Element.svg'); background-size: 100% 100%; background-repeat: no-repeat; background-position: left;"
			></div>
			<div class="z-10 text-center lg:text-left">
				<h1
					class="text-xl font-['Raleway'] text-white md:text-3xl lg:text-5xl mb-4 md:mb-6 lg:mb-8 font-bold"
				>
					NUGAGames Registry
				</h1>
				<p
					class="text-gray-300 font-['Raleway'] text-sm md:text-lg lg:text-xl mb-4 md:mb-6 lg:mb-8 font-medium"
				>
					Register your university's participation in the NUGA Games and be part of the excitement.
					Join the ranks of student athletes <br /> from across Nigeria and compete for glory at the University
					of Calabar in 2026.
				</p>

				<div class="flex gap-6">
					<Button>Create Account</Button>
					<Button kind="tertiary" class="bg-white">Sign In</Button>
				</div>

				<div class="absolute bottom-0 right-0">
					<img
						src="ball.svg"
						alt="NUGA Registry Background"
						class="w-32 h-32 md:w-48 md:h-48 lg:w-[481px] lg:h-[303px]"
					/>
					<img
						src="tennis-ball.svg"
						alt="NUGA Registry Background"
						class="w-32 h-32 md:w-48 md:h-48 lg:w-[481px] lg:h-[303px] absolute bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 drop-shadow-lg"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
