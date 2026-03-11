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

<section
	class="flex flex-col gap-6 md:gap-12 text-start bg-gray-100 p-4 sm:p-6 md:p-12 lg:p-24 xl:p-44"
>
	<div class="flex flex-col gap-2 md:gap-4">
		<h1 class="font-bold text-2xl sm:text-3xl md:text-5xl">The Varsity Games Network</h1>
		<p class="text-base sm:text-xl md:text-3xl">Upcoming University Games Worldwide</p>
	</div>

	<!-- grid cols 4 for desktop view -->
	<div
		class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-16 place-items-center px-2"
	>
		{#each category as cat, index}
			<div
				class="flex flex-col items-center justify-center gap-1 w-full cursor-pointer hover:scale-105 transition-transform {index ===
					category.length - 1 && category.length % 2 === 1
					? 'col-span-2 sm:col-span-1'
					: ''}"
			>
				<img
					src={cat.image}
					alt="Varsity networks"
					class="h-auto max-w-[200px] sm:max-w-[300px] object-contain"
				/>
			</div>
		{/each}
	</div>
</section>
