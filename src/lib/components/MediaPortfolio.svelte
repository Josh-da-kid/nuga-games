<script lang="ts">
	const mediaItems = [
		{
			id: 1,
			title: 'Opening Ceremony Highlights',
			thumbnail: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&q=80',
			duration: '5:32',
			description:
				'Experience the grand opening of NUGA 2024 with spectacular performances from across Nigerian universities.'
		},
		{
			id: 2,
			title: 'Athletics Championship',
			thumbnail:
				'https://images.unsplash.com/photo-1486218119243-13883505764c?w=600&h=750&fit=crop',
			duration: '8:15',
			description:
				'Watch the fastest athletes from Nigerian universities compete for gold in track and field events.'
		},
		{
			id: 3,
			title: 'Football Finals',
			thumbnail: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80',
			duration: '12:45',
			description:
				'The thrilling conclusion of the football tournament with penalty shootouts and celebrate victories.'
		},
		{
			id: 4,
			title: 'Swimming Competitions',
			thumbnail: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&q=80',
			duration: '6:20',
			description: 'Dive into the action as swimmers break records in the aquatics center.'
		},
		{
			id: 5,
			title: 'Basketball Tournament',
			thumbnail: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80',
			duration: '10:30',
			description:
				'High-energy basketball matches showcasing talent from universities across Nigeria.'
		},
		{
			id: 6,
			title: 'Closing Ceremony',
			thumbnail: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80',
			duration: '7:45',
			description: 'Relive the memorable closing ceremony celebrations and award presentations.'
		}
	];
</script>

<section id="media" class="py-16 md:py-20 lg:py-24 bg-gray-50">
	<div class="max-w-[1280px] mx-auto px-6">
		<div class="text-center mb-12 md:mb-16">
			<h2 class="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
				Media Portfolio
			</h2>
			<p class="text-black text-lg md:text-2xl max-w-2xl mx-auto">
				Watch highlights from past NUGA events and get a glimpse of what to expect at NUGA 2026.
			</p>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
			{#each mediaItems as item (item.id)}
				<article
					class="group relative rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02] bg-white shadow-sm border border-gray-100"
				>
					<div class="aspect-[8/9] relative">
						<img
							src={item.thumbnail}
							alt={item.title}
							class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
						/>
						<div
							class="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"
						></div>

						<button
							class="absolute inset-0 flex items-center justify-center"
							aria-label="Play {item.title}"
						>
							<div
								class="bg-red-600 hover:bg-red-700 rounded-lg md:rounded-xl p-4 px-6 md:p-6 md:px-12 transition-all duration-300 group-hover:scale-105 shadow-lg"
							>
								<svg
									class="w-14 h-8 md:w-20 md:h-20 rounded-md text-white ml-0.5"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									><path
										fill="currentColor"
										d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"
									/></svg
								>
							</div>
						</button>

						<div class="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
							{item.duration}
						</div>
					</div>

					<div class="p-5">
						<h3
							class="text-gray-900 font-semibold text-lg md:text-3xl lg:text-4xl mb-2"
							style="font-family: 'LINE Seed JP', sans-serif;"
						>
							{item.title}
						</h3>
						<p
							class="text-gray-500 text-sm md:text-2xl line-clamp-2"
							style="font-family: 'LINE Seed JP', sans-serif;"
						>
							{item.description}
						</p>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
