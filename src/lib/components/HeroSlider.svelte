<script lang="ts">
	import { Button } from 'carbon-components-svelte';

	const slides = [
		{
			id: 1,
			title: 'Nigerian University Games Association 2026',
			subtitle: 'UNICAL – In the Hour of Destiny We Rise',
			description:
				"Join us for the 28th edition of Nigeria's premier university sports competition. Experience world-class athletics at the University of Calabar.",
			buttonText: 'Register Now',
			buttonLink: '#register',
			image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&q=80'
		},
		{
			id: 2,
			title: '24 Games. 100+ Universities. One Champion.',
			subtitle: 'Paradise Games 2026',
			description:
				'Student athletes from across Nigeria compete in 24 sporting disciplines. Witness the future of African sports.',
			buttonText: 'Learn More',
			buttonLink: '#about',
			image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1920&q=80'
		},
		{
			id: 3,
			title: 'Unite. Compete. Excel.',
			subtitle: 'Building Champions Through Sports',
			description:
				'NUGA 2026 celebrates youth development, sportsmanship, and the pursuit of excellence. Be part of history.',
			buttonText: 'Get Involved',
			buttonLink: '#involved',
			image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1920&q=80'
		},
		{
			id: 4,
			title: 'Athletics Excellence',
			subtitle: 'Track & Field',
			description:
				"Watch Nigeria's brightest talents compete in sprint, long jump, javelin, and more. The fastest university athletes in Africa.",
			buttonText: 'View Events',
			buttonLink: '#events',
			image: 'https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?w=1920&q=80'
		},
		{
			id: 5,
			title: 'Team Sports Gala',
			subtitle: 'Football & Basketball',
			description:
				'University football and basketball teams battle for glory. Experience the excitement of team competition.',
			buttonText: 'See Teams',
			buttonLink: '#teams',
			image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1920&q=80'
		},
		{
			id: 6,
			title: 'Mind & Body',
			subtitle: 'Indoor Sports',
			description:
				'From table tennis to chess, witness the strategic brilliance of indoor sports at NUGA 2026.',
			buttonText: 'Explore Sports',
			buttonLink: '#sports',
			image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1920&q=80'
		},
		{
			id: 7,
			title: "Champion's Journey",
			subtitle: 'NUGA 2026 Legacy',
			description:
				'Every champion has a story. Follow the journey of university athletes as they rise to glory.',
			buttonText: 'Read Stories',
			buttonLink: '#stories',
			image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1920&q=80'
		}
	];

	let currentSlide = $state(0);
	let intervalId: ReturnType<typeof setInterval>;

	function goToSlide(index: number) {
		currentSlide = index;
	}

	function nextSlide() {
		currentSlide = (currentSlide + 1) % slides.length;
	}

	function prevSlide() {
		currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	}

	$effect(() => {
		intervalId = setInterval(() => {
			nextSlide();
		}, 5000);

		return () => {
			if (intervalId) clearInterval(intervalId);
		};
	});
</script>

<section class="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
	{#each slides as slide, index (slide.id)}
		<div
			class="absolute inset-0 transition-opacity duration-1000 {index === currentSlide
				? 'opacity-100'
				: 'opacity-0'}"
		>
			<div
				class="absolute inset-0 bg-cover bg-center"
				style="background-image: url('{slide.image}')"
			></div>
			<div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
		</div>
	{/each}

	<div class="relative h-full max-w-[1280px] mx-auto px-6 flex items-center">
		<div class="max-w-2xl">
			{#each slides as slide, index (slide.id)}
				{#if index === currentSlide}
					<div class="animate-fadeIn">
						<!-- <p class="text-blue-400 text-sm md:text-base font-medium mb-2 tracking-wider uppercase">
							{slide.subtitle}
						</p> -->
						<h1
							class="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight"
						>
							{slide.title}
						</h1>
						<p class="text-white/90 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
							{slide.description}
						</p>
						<button
							class="w-fit px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
							><span class="flex items-center gap-2"
								>{slide.buttonText}
								<svg
									width="16"
									height="16"
									viewBox="0 0 32 32"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										d="M27.414 15L6 15a1 1 0 0 0 0 2l21.414 0-6.707 6.707 1.414 1.414L30.414 17 22.121 8.879l-1.414 1.414z"
									/>
								</svg>
							</span>
						</button>
					</div>
				{/if}
			{/each}
		</div>

		<!-- <button
			onclick={prevSlide}
			class="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-colors duration-200"
			aria-label="Previous slide"
		>
			<svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
			</svg>
		</button>

		<button
			onclick={nextSlide}
			class="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-colors duration-200"
			aria-label="Next slide"
		>
			<svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
			</svg>
		</button> -->

		<div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3">
			{#each slides as _, index}
				<button
					onclick={() => goToSlide(index)}
					class="w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 {index ===
					currentSlide
						? 'bg-blue-600 w-6 md:w-8'
						: 'bg-white/50 hover:bg-white/70'}"
					aria-label="Go to slide {index + 1}"
				></button>
			{/each}
		</div>
	</div>
</section>

<style>
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	.animate-fadeIn {
		animation: fadeIn 0.8s ease-out forwards;
	}
</style>
