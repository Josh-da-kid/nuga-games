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
		}, 5000);

		return () => clearInterval(interval);
	});

	// Ultra-smooth cubic-bezier easing curves
	const easeOutFluid: EasingFunction = (t) => {
		// Approximation of cubic-bezier(0.22, 1, 0.36, 1)
		const p = 1 - t;
		return 1 - p * p * p * (1 + 3 * t);
	};

	const easeInOutFluid: EasingFunction = (t) => {
		return t < 0.5 ? 2 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
	};

	const easeOutSoft: EasingFunction = (t) => {
		// Gentle ease out with slight overshoot feel
		return t === 1 ? 1 : 1 - Math.pow(2, -8 * t);
	};

	interface TransitionOptions {
		x?: number;
		y?: number;
		scale?: number;
		opacity?: number;
		duration?: number;
		easing?: EasingFunction;
		delay?: number;
	}

	function fluidEnter(
		node: Element,
		{
			x = 0,
			y = 0,
			scale = 1,
			opacity = 0,
			duration = 900,
			easing = easeOutFluid,
			delay = 0
		}: TransitionOptions
	): TransitionConfig {
		return {
			delay,
			duration,
			easing,
			css: (t) => `
				transform: translate(${x * (1 - t)}px, ${y * (1 - t)}px) scale(${scale + (1 - scale) * t});
				opacity: ${opacity + (1 - opacity) * t};
			`
		};
	}

	function fluidExit(
		node: Element,
		{
			x = 0,
			y = 0,
			scale = 1,
			opacity = 0,
			duration = 700,
			easing = easeInOutFluid,
			delay = 0
		}: TransitionOptions
	): TransitionConfig {
		return {
			delay,
			duration,
			easing,
			css: (t) => `
				transform: translate(${x * (1 - t)}px, ${y * (1 - t)}px) scale(${scale + (1 - scale) * t});
				opacity: ${t * (1 - opacity)};
			`
		};
	}

	function smoothEnter(
		node: Element,
		{
			x = 0,
			y = 0,
			scale = 1,
			opacity = 0,
			duration = 650,
			easing = easeOutPremium
		}: TransitionOptions
	): TransitionConfig {
		return {
			duration,
			easing,
			css: (t) => `
				transform: translate(${x * (1 - t)}px, ${y * (1 - t)}px) scale(${scale + (1 - scale) * t});
				opacity: ${opacity + (1 - opacity) * t};
			`
		};
	}

	function smoothExit(
		node: Element,
		{
			x = 0,
			y = 0,
			scale = 1,
			opacity = 0,
			duration = 500,
			easing = easeInOutPremium
		}: TransitionOptions
	): TransitionConfig {
		return {
			duration,
			easing,
			css: (t) => `
				transform: translate(${x * (1 - t)}px, ${y * (1 - t)}px) scale(${scale + (1 - scale) * t});
				opacity: ${t * (1 - opacity)};
			`
		};
	}
</script>

<div class="relative w-full py-8">
	<div class="relative h-64 md:h-80 lg:h-auto flex items-center justify-center overflow-visible">
		{#if images.length >= 5}
			{#key currentIndex}
				<!-- Far Previous (smallest) -->
				<div
					class="absolute left-0 top-1/2 -translate-y-1/2 z-[1]"
					in:fluidEnter={{ x: -150, y: 20, scale: 0.7, opacity: 0, duration: 1000 }}
					out:fluidExit={{ x: -220, y: -15, scale: 0.65, opacity: 1, duration: 700 }}
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
					in:fluidEnter={{ x: -120, y: 15, scale: 0.85, opacity: 0, duration: 950 }}
					out:fluidExit={{ x: -200, y: -10, scale: 0.8, opacity: 1, duration: 700 }}
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
					class="relative z-30"
					in:fluidEnter={{ x: 150, y: -20, scale: 1.08, opacity: 0, duration: 1100 }}
					out:fluidExit={{ x: -150, y: 15, scale: 0.92, opacity: 0, duration: 700 }}
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
					in:fluidEnter={{ x: 120, y: 15, scale: 0.85, opacity: 0, duration: 950 }}
					out:fluidExit={{ x: 200, y: -10, scale: 0.8, opacity: 1, duration: 700 }}
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
					in:fluidEnter={{ x: 150, y: 20, scale: 0.7, opacity: 0, duration: 1000 }}
					out:fluidExit={{ x: 220, y: -15, scale: 0.65, opacity: 1, duration: 700 }}
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
					in:fluidEnter={{ x: -120, y: 15, scale: 0.85, opacity: 0, duration: 950 }}
					out:fluidExit={{ x: -200, y: -10, scale: 0.8, opacity: 1, duration: 700 }}
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
					class="relative z-30"
					in:fluidEnter={{ x: 150, y: -20, scale: 1.08, opacity: 0, duration: 1100 }}
					out:fluidExit={{ x: -150, y: 15, scale: 0.92, opacity: 0, duration: 700 }}
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
					in:fluidEnter={{ x: 120, y: 15, scale: 0.85, opacity: 0, duration: 950 }}
					out:fluidExit={{ x: 200, y: -10, scale: 0.8, opacity: 1, duration: 700 }}
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
					in:fluidEnter={{ x: -120, y: 15, scale: 0.85, opacity: 0, duration: 950 }}
					out:fluidExit={{ x: -200, y: -10, scale: 0.8, opacity: 1, duration: 700 }}
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
					class="relative z-30"
					in:fluidEnter={{ x: 150, y: -20, scale: 1.08, opacity: 0, duration: 1100 }}
					out:fluidExit={{ x: -150, y: 15, scale: 0.92, opacity: 0, duration: 700 }}
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
					in:fluidEnter={{ x: 120, y: 15, scale: 0.85, opacity: 0, duration: 950 }}
					out:fluidExit={{ x: 200, y: -10, scale: 0.8, opacity: 1, duration: 700 }}
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
					class="relative z-30 flex"
					in:fluidEnter={{ x: 150, y: -20, scale: 1.08, opacity: 0, duration: 1100 }}
					out:fluidExit={{ x: -150, y: 15, scale: 0.92, opacity: 0, duration: 700 }}
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
					class="relative z-30"
					in:fluidEnter={{ x: 150, y: -20, scale: 1.08, opacity: 0, duration: 1100 }}
					out:fluidExit={{ x: -150, y: 15, scale: 0.92, opacity: 0, duration: 700 }}
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
	<!-- <button
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
	</button> -->

	<!-- Dots with Navigation -->
	<div class="flex items-center justify-center gap-4 mt-12">
		<button
			onclick={prevSlide}
			class="p-2 text-gray-400 hover:text-gray-600 transition-colors"
			aria-label="Previous slide"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="28" height="16" viewBox="0 0 16 9">
				<path
					fill="currentColor"
					d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"
				/>
				<path
					fill="currentColor"
					d="M6 8.5a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71L5.65.65c.2-.2.51-.2.71 0s.2.51 0 .71L3.21 4.51l3.15 3.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"
				/>
			</svg>
		</button>

		<div class="flex gap-2">
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

		<button
			onclick={nextSlide}
			class="p-2 text-gray-400 hover:text-gray-600 transition-colors"
			aria-label="Next slide"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="28" height="16" viewBox="0 0 16 9">
				<path
					fill="currentColor"
					d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"
				/>
				<path
					fill="currentColor"
					d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"
				/>
			</svg>
		</button>
	</div>
</div>

<style>
	.carousel-image {
		object-fit: cover;
		will-change: transform, opacity, filter;
		backface-visibility: hidden;
		-webkit-font-smoothing: antialiased;
	}

	.carousel-current {
		height: 252px;
		width: 450px;
		border-radius: 48px;
		box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
	}

	.carousel-prev {
		height: 180px;
		width: auto;
		border-radius: 48px 0 0 48px;
	}

	.carousel-next {
		height: 180px;
		width: auto;
		border-radius: 0 48px 48px 0;
	}

	.carousel-far {
		height: 108px;
		width: auto;
		border-radius: 48px 0 0 48px;
	}

	.carousel-far-right {
		border-radius: 0 48px 48px 0;
	}

	@media (min-width: 768px) {
		.carousel-current {
			height: 360px;
			width: 600px;
		}
		.carousel-prev,
		.carousel-next {
			height: 270px;
		}
		.carousel-far {
			height: 162px;
		}
	}

	@media (min-width: 1024px) {
		.carousel-current {
			height: 450px;
			width: 800px;
		}
		.carousel-prev,
		.carousel-next {
			height: 342px;
		}
		.carousel-far {
			height: 216px;
		}
	}
</style>
