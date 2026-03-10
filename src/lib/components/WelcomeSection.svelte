<script lang="ts">
	import ImageCarousel from './ImageCarousel.svelte';

	const carouselImages = [
		{
			src: 'https://picsum.photos/seed/nuga1/800/600',
			alt: 'Sports event'
		},
		{
			src: 'https://picsum.photos/seed/nuga2/800/600',
			alt: 'Athletics'
		},
		{
			src: 'https://picsum.photos/seed/nuga3/800/600',
			alt: 'Stadium'
		},
		{
			src: 'https://picsum.photos/seed/nuga4/800/600',
			alt: 'Running track'
		},
		{
			src: 'https://picsum.photos/seed/nuga5/800/600',
			alt: 'Basketball'
		}
	];
</script>

<section class="py-16 md:py-20 lg:py-24 bg-gray-900">
	<div class="max-w-[1280px] mx-auto px-6">
		<div class="text-center mb-12 md:mb-16">
			<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
				Welcome to Paradise Games
			</h2>
			<p class="text-white text-lg md:text-2xl font-medium mb-4 tracking-wider mt-8 md:mt-12">
				UNICAL – In the Hour of Destiny We Rise
			</p>
			<p class="text-white text-base md:text-xl max-w-4xl mx-auto leading-relaxed">
				The Nigerian University Games Association (NUGA) brings together student athletes from
				universities across Nigeria for the 28th edition of this prestigious multi-sport event.
				Hosted by the University of Calabar, NUGA 2026 promises to be a celebration of youth
				development, sportsmanship, and the pursuit of athletic excellence.
			</p>
		</div>

		<ImageCarousel images={carouselImages} />
	</div>
</section>
