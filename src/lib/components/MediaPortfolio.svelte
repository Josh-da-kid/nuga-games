<script lang="ts">
	import { Button } from 'carbon-components-svelte';

	const mediaItems = [
		{
			id: 1,
			title: 'Opening Ceremony Highlights',
			thumbnail: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&q=80',
			duration: '5:32'
		},
		{
			id: 2,
			title: 'Athletics Championship',
			thumbnail: 'https://images.unsplash.com/photo-1461896836934-210c6999a884?w=600&q=80',
			duration: '8:15'
		},
		{
			id: 3,
			title: 'Football Finals',
			thumbnail: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80',
			duration: '12:45'
		},
		{
			id: 4,
			title: 'Swimming Competitions',
			thumbnail: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&q=80',
			duration: '6:20'
		},
		{
			id: 5,
			title: 'Basketball Tournament',
			thumbnail: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80',
			duration: '10:30'
		},
		{
			id: 6,
			title: 'Closing Ceremony',
			thumbnail: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80',
			duration: '7:45'
		}
	];
</script>

<section id="media" class="py-16 md:py-20 lg:py-24 bg-gray-50">
	<div class="max-w-[1280px] mx-auto px-6">
		<div class="text-center mb-12 md:mb-16">
			<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
				Media <span class="text-blue-600">Portfolio</span>
			</h2>
			<p class="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
				Watch highlights from past NUGA events and get a glimpse of what to expect at NUGA 2026.
			</p>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
			{#each mediaItems as item (item.id)}
				<article
					class="group relative rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02] bg-white shadow-sm border border-gray-100"
				>
					<div class="aspect-video relative">
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
								class="bg-blue-600 hover:bg-blue-700 rounded-full p-4 md:p-5 transition-all duration-300 group-hover:scale-110 shadow-lg"
							>
								<svg
									class="w-6 h-6 md:w-8 md:h-8 text-white ml-1"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M8 5v14l11-7z" />
								</svg>
							</div>
						</button>

						<div class="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
							{item.duration}
						</div>
					</div>

					<div class="p-4">
						<h3 class="text-gray-900 font-semibold text-sm md:text-base line-clamp-2">
							{item.title}
						</h3>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
