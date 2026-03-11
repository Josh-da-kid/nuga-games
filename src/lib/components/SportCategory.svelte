<script>
	const category = [
		{
			name: 'Basketball',
			image: 'basketball.svg'
		},
		{
			name: 'Football',
			image: 'football.svg'
		},
		{
			name: 'Boxing',
			image: 'boxing.svg'
		},
		{
			name: 'Volleyball',
			image: 'volleyball.svg'
		},
		{
			name: 'Athletics',
			image: 'athletics.svg'
		},
		{
			name: 'Swimming',
			image: 'swimming.svg'
		},
		{
			name: 'Table Tennis',
			image: 'table-tennis.svg'
		},
		{
			name: 'Badminton',
			image: 'badminton.svg'
		},
		{
			name: 'Hockey',
			image: 'hockey.svg'
		},
		{
			name: 'Judo',
			image: 'judo.svg'
		},
		{
			name: 'Handball',
			image: 'handball.svg'
		},
		{
			name: 'Tennis',
			image: 'tennis.svg'
		}
	];
</script>

<section
	class="flex flex-col gap-6 md:gap-12 text-start bg-gray-100 p-4 sm:p-6 md:p-12 lg:p-24 xl:p-44"
>
	<div class="flex flex-col gap-4 md:gap-8">
		<h1 class="font-bold text-2xl sm:text-3xl md:text-5xl">Explore By Sports Category</h1>
		<p class="text-base sm:text-xl md:text-3xl">
			Discover the Games your way - browse through sports categories, explore registered events, and
			find the <br class="hidden sm:block" /> competitions you can't afford to miss.
		</p>
	</div>

	<!-- grid cols 4 for desktop view -->
	<div
		class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-12"
	>
		{#each category as cat}
			<div
				class="flex flex-col items-center gap-1 cursor-pointer hover:scale-105 transition-transform"
			>
				<img
					src={cat.image}
					alt={cat.name}
					class="h-[150px] sm:h-[200px] md:h-[280px] lg:h-[390px] w-full object-contain"
				/>
				<span class="text-blue-900 font-semibold text-sm sm:text-base md:text-lg text-center"
					>{cat.name}</span
				>
			</div>
		{/each}
	</div>
</section>
