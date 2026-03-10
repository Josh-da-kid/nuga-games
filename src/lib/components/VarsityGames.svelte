<script>
	const category = [
		{
			image: 'network1.svg'
		},
		{
			image: 'network2.svg'
		},
		{
			image: 'network3.svg'
		},
		{
			image: 'network4.svg'
		},
		{
			image: 'network5.svg'
		}
	];
</script>

<section class="flex flex-col gap-6 md:gap-12 text-start bg-gray-100 p-6 md:p-12 lg:p-44">
	<div class="flex flex-col gap-4">
		<h1 class="font-bold text-3xl md:text-5xl">The Varsity Games Network</h1>
		<p class="text-xl md:text-3xl">Upcoming UNiversity Games Worldwide</p>
	</div>

	<!-- grid cols 4 for desktop view -->
	<div
		class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-16 items-center justify-center mx-auto"
	>
		{#each category as cat}
			<div
				class="flex flex-col items-center gap-1 cursor-pointer hover:scale-105 transition-transform"
			>
				<img src={cat.image} alt="Varsity networks" class="h-auto w-full object-contain" />
			</div>
		{/each}
	</div>
</section>
