<script lang="ts">
	import type { EasingFunction, TransitionConfig } from 'svelte/transition';

	interface Props {
		images: Array<{ src: string; alt: string }>;
	}

	let { images }: Props = $props();

	let currentIndex = $state(0);

	function goToSlide(index: number) {
		currentIndex = index;
	}

	function nextSlide() {
		currentIndex = (currentIndex + 1) % images.length;
	}

	function prevSlide() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
	}

	function getIndex(offset: number) {
		return (currentIndex + offset + images.length) % images.length;
	}

	$effect(() => {
		const interval = setInterval(() => {
			nextSlide();
		}, 4500);

		return () => clearInterval(interval);
	});

	const easeOutExpo: EasingFunction = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

	const easeOutBack: EasingFunction = (t) => {
		const c1 = 1.70158;
		const c3 = c1 + 1;
		return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
	};

	const easeInOutQuart: EasingFunction = (t) =>
		t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

	interface Transition3DOptions {
		x?: number;
		scale?: number;
		duration?: number;
		easing?: EasingFunction;
	}

	function transition3D(
		node: Element,
		{ x = 0, scale = 1, duration = 800, easing = easeOutExpo }: Transition3DOptions
	): TransitionConfig {
		const style = getComputedStyle(node);
		const targetOpacity = +style.opacity;
		const transform = style.transform === 'none' ? '' : style.transform;
		const od = targetOpacity;

		return {
			duration,
			easing,
			css: (t, u) => `
				transform: ${transform} translateX(${x * u}px) scale(${1 + (scale - 1) * u});
				opacity: ${targetOpacity - od * u}
			`
		};
	}

	function transition3DIn(node: Element, options: Transition3DOptions): TransitionConfig {
		const style = getComputedStyle(node);
		const transform = style.transform === 'none' ? '' : style.transform;
		const { x = 0, scale = 0.8, duration = 800, easing = easeOutExpo } = options;

		return {
			duration,
			easing,
			css: (t) => `
				transform: ${transform} translateX(${x * (1 - t)}px) scale(${scale + (1 - scale) * t});
				opacity: ${t}
			`
		};
	}

	function transition3DOut(node: Element, options: Transition3DOptions): TransitionConfig {
		const style = getComputedStyle(node);
		const transform = style.transform === 'none' ? '' : style.transform;
		const targetOpacity = +style.opacity;
		const { x = 0, scale = 0.8, duration = 600, easing = easeInOutQuart } = options;

		return {
			duration,
			easing,
			css: (t) => `
				transform: ${transform} translateX(${x * (1 - t)}px) scale(${scale + (1 - scale) * t});
				opacity: ${targetOpacity * t}
			`
		};
	}
</script>

<div class="relative w-full py-8">
	<div class="relative h-64 md:h-80 lg:h-96 flex items-center justify-center overflow-hidden">
		{#if images.length >= 5}
			{#key currentIndex}
				<!-- Far Previous (smallest) -->
				<div
					class="absolute left-0 top-1/2 -translate-y-1/2 z-[1]"
					in:transition3DIn={{ x: -120, scale: 0.6, duration: 900, easing: easeOutExpo }}
					out:transition3DOut={{ x: -180, scale: 0.5, duration: 600, easing: easeInOutQuart }}
				>
					<img
						src={images[getIndex(-2)].src}
						alt={images[getIndex(-2)].alt}
						class="carousel-image carousel-far"
						draggable="false"
					/>
				</div>

				<!-- Previous (smaller than current) -->
				<div
					class="absolute left-[8%] top-1/2 -translate-y-1/2 z-[2]"
					in:transition3DIn={{ x: -100, scale: 0.75, duration: 800, easing: easeOutBack }}
					out:transition3DOut={{ x: -160, scale: 0.6, duration: 600, easing: easeInOutQuart }}
				>
					<img
						src={images[getIndex(-1)].src}
						alt={images[getIndex(-1)].alt}
						class="carousel-image carousel-prev"
						draggable="false"
					/>
				</div>

				<!-- Current Image (full height) -->
				<div
					class="relative z-10"
					in:transition3DIn={{ x: 180, scale: 0.85, duration: 850, easing: easeOutBack }}
					out:transition3DOut={{ x: -180, scale: 0.85, duration: 700, easing: easeInOutQuart }}
				>
					<img
						src={images[currentIndex].src}
						alt={images[currentIndex].alt}
						class="carousel-image carousel-current"
						draggable="false"
					/>
				</div>

				<!-- Next (smaller than current) -->
				<div
					class="absolute right-[8%] top-1/2 -translate-y-1/2 z-[2]"
					in:transition3DIn={{ x: 100, scale: 0.75, duration: 800, easing: easeOutBack }}
					out:transition3DOut={{ x: 160, scale: 0.6, duration: 600, easing: easeInOutQuart }}
				>
					<img
						src={images[getIndex(1)].src}
						alt={images[getIndex(1)].alt}
						class="carousel-image carousel-next"
						draggable="false"
					/>
				</div>

				<!-- Far Next (smallest) -->
				<div
					class="absolute right-0 top-1/2 -translate-y-1/2 z-[1]"
					in:transition3DIn={{ x: 120, scale: 0.6, duration: 900, easing: easeOutExpo }}
					out:transition3DOut={{ x: 180, scale: 0.5, duration: 600, easing: easeInOutQuart }}
				>
					<img
						src={images[getIndex(2)].src}
						alt={images[getIndex(2)].alt}
						class="carousel-image carousel-far carousel-far-right"
						draggable="false"
					/>
				</div>
			{/key}
		{:else if images.length === 4}
			{#key currentIndex}
				<!-- Previous -->
				<div
					class="absolute left-[10%] top-1/2 -translate-y-1/2 z-[2]"
					in:transition3DIn={{ x: -100, scale: 0.75, duration: 800, easing: easeOutBack }}
					out:transition3DOut={{ x: -160, scale: 0.6, duration: 600, easing: easeInOutQuart }}
				>
					<img
						src={images[getIndex(-1)].src}
						alt={images[getIndex(-1)].alt}
						class="carousel-image carousel-prev"
						draggable="false"
					/>
				</div>

				<!-- Current -->
				<div
					class="relative z-10"
					in:transition3DIn={{ x: 180, scale: 0.85, duration: 850, easing: easeOutBack }}
					out:transition3DOut={{ x: -180, scale: 0.85, duration: 700, easing: easeInOutQuart }}
				>
					<img
						src={images[currentIndex].src}
						alt={images[currentIndex].alt}
						class="carousel-image carousel-current"
						draggable="false"
					/>
				</div>

				<!-- Next -->
				<div
					class="absolute right-[10%] top-1/2 -translate-y-1/2 z-[2]"
					in:transition3DIn={{ x: 100, scale: 0.75, duration: 800, easing: easeOutBack }}
					out:transition3DOut={{ x: 160, scale: 0.6, duration: 600, easing: easeInOutQuart }}
				>
					<img
						src={images[getIndex(1)].src}
						alt={images[getIndex(1)].alt}
						class="carousel-image carousel-next"
						draggable="false"
					/>
				</div>
			{/key}
		{:else if images.length === 3}
			{#key currentIndex}
				<!-- Previous -->
				<div
					class="absolute left-[12%] top-1/2 -translate-y-1/2 z-[2]"
					in:transition3DIn={{ x: -100, scale: 0.75, duration: 800, easing: easeOutBack }}
					out:transition3DOut={{ x: -160, scale: 0.6, duration: 600, easing: easeInOutQuart }}
				>
					<img
						src={images[getIndex(-1)].src}
						alt={images[getIndex(-1)].alt}
						class="carousel-image carousel-prev"
						draggable="false"
					/>
				</div>

				<!-- Current -->
				<div
					class="relative z-10"
					in:transition3DIn={{ x: 180, scale: 0.85, duration: 850, easing: easeOutBack }}
					out:transition3DOut={{ x: -180, scale: 0.85, duration: 700, easing: easeInOutQuart }}
				>
					<img
						src={images[currentIndex].src}
						alt={images[currentIndex].alt}
						class="carousel-image carousel-current"
						draggable="false"
					/>
				</div>

				<!-- Next -->
				<div
					class="absolute right-[12%] top-1/2 -translate-y-1/2 z-[2]"
					in:transition3DIn={{ x: 100, scale: 0.75, duration: 800, easing: easeOutBack }}
					out:transition3DOut={{ x: 160, scale: 0.6, duration: 600, easing: easeInOutQuart }}
				>
					<img
						src={images[getIndex(1)].src}
						alt={images[getIndex(1)].alt}
						class="carousel-image carousel-next"
						draggable="false"
					/>
				</div>
			{/key}
		{:else if images.length === 2}
			{#key currentIndex}
				<div
					class="relative z-10 flex"
					in:transition3DIn={{ x: 180, scale: 0.85, duration: 850, easing: easeOutBack }}
					out:transition3DOut={{ x: -180, scale: 0.85, duration: 700, easing: easeInOutQuart }}
				>
					<img
						src={images[0].src}
						alt={images[0].alt}
						class="carousel-image carousel-current"
						draggable="false"
					/>
					<img
						src={images[1].src}
						alt={images[1].alt}
						class="carousel-image carousel-current"
						draggable="false"
					/>
				</div>
			{/key}
		{:else if images.length === 1}
			{#key currentIndex}
				<div
					class="relative z-10"
					in:transition3DIn={{ x: 180, scale: 0.85, duration: 850, easing: easeOutBack }}
					out:transition3DOut={{ x: -180, scale: 0.85, duration: 700, easing: easeInOutQuart }}
				>
					<img
						src={images[0].src}
						alt={images[0].alt}
						class="carousel-image carousel-current"
						draggable="false"
					/>
				</div>
			{/key}
		{/if}
	</div>

	<!-- Navigation Arrows -->
	<button
		onclick={prevSlide}
		class="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-900 p-2 md:p-3 rounded-full shadow-lg"
		aria-label="Previous slide"
	>
		<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
		</svg>
	</button>

	<button
		onclick={nextSlide}
		class="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-900 p-2 md:p-3 rounded-full shadow-lg"
		aria-label="Next slide"
	>
		<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
		</svg>
	</button>

	<!-- Dots -->
	<div class="flex justify-center gap-2 mt-4">
		{#each images as image, index (image.src)}
			<button
				onclick={() => goToSlide(index)}
				class="w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 {index ===
				currentIndex
					? 'bg-blue-600 w-6 md:w-8'
					: 'bg-white/50 hover:bg-white/70'}"
				aria-label="Go to slide {index + 1}"
			></button>
		{/each}
	</div>
</div>

<style>
	.carousel-image {
		object-fit: cover;
	}

	.carousel-current {
		height: 224px;
		width: 300px;
		border-radius: 24px;
		box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
	}

	.carousel-prev {
		height: 160px;
		width: auto;
		border-radius: 24px 0 0 24px;
		opacity: 0.7;
	}

	.carousel-next {
		height: 160px;
		width: auto;
		border-radius: 0 24px 24px 0;
		opacity: 0.7;
	}

	.carousel-far {
		height: 96px;
		width: auto;
		border-radius: 24px 0 0 24px;
		opacity: 0.4;
	}

	.carousel-far-right {
		border-radius: 0 24px 24px 0;
	}

	@media (min-width: 768px) {
		.carousel-current {
			height: 320px;
			width: 420px;
		}
		.carousel-prev,
		.carousel-next {
			height: 240px;
		}
		.carousel-far {
			height: 128px;
		}
	}

	@media (min-width: 1024px) {
		.carousel-current {
			height: 384px;
			width: 500px;
		}
		.carousel-prev,
		.carousel-next {
			height: 288px;
		}
		.carousel-far {
			height: 160px;
		}
	}
</style>
