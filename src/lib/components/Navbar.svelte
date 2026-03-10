<script lang="ts">
	import { Button } from 'carbon-components-svelte';

	let isOpen = $state(false);
	let activeLink = $state('Home');

	const navLinks = [
		{ label: 'Home', href: '#' },
		{ label: 'Media', href: '#media' },
		{ label: 'Paradise Games', href: '#paradise-games' },
		{ label: 'Athletes', href: '#athletes' },
		{ label: 'NUGA', href: '#nuga' },
		{ label: 'LEGACY', href: '#legacy' },
		{ label: 'Alumni', href: '#alumni' }
	];

	function toggleMenu() {
		isOpen = !isOpen;
	}

	function closeMenu() {
		isOpen = false;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeMenu();
		}
	}

	function setActive(label: string) {
		activeLink = label;
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<nav class="top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
	<div class="max-w-[1280px] mx-auto px-6">
		<div class="flex items-center justify-between h-16 md:h-20">
			<div class="flex items-center gap-3">
				<div class="bg-blue-600 rounded-full p-1">
					<svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
						/>
					</svg>
				</div>
				<div class="flex flex-col items-start">
					<a href="/" class="flex items-center gap-2">
						<span class="text-gray-900 font-bold text-xl md:text-xl">Paradise Games</span>
					</a>
					<small class="font-medium text-sm text-gray-900">Unical Radio International 2026</small>
				</div>
			</div>

			<div class="hidden lg:flex items-center gap-8">
				{#each navLinks as link (link.label)}
					<a
						href={link.href}
						onclick={() => setActive(link.label)}
						class="text-sm font-medium transition-colors duration-200 {activeLink === link.label
							? 'text-gray-900'
							: 'text-blue-600 hover:text-gray-900'}"
					>
						{link.label}
					</a>
				{/each}
			</div>

			<div class="hidden lg:flex items-center gap-4">
				<button
					class="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 p-3"
					>Join Now</button
				>
				<a
					href="#ezibiz"
					class="text-amber-700 font-bold hover:text-gray-900 transition-colors duration-200 text-sm"
				>
					EziBiz
				</a>
			</div>

			<button
				onclick={toggleMenu}
				class="lg:hidden text-gray-900 p-2"
				aria-label="Toggle menu"
				aria-expanded={isOpen}
			>
				{#if !isOpen}
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				{:else}
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				{/if}
			</button>
		</div>
	</div>
</nav>

{#if isOpen}
	<button
		type="button"
		class="fixed inset-0 z-40 lg:hidden cursor-default bg-black/50"
		onclick={closeMenu}
		onkeydown={handleKeydown}
		aria-label="Close menu overlay"
	>
	</button>
{/if}

<div
	class="fixed top-0 right-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-xl lg:hidden {isOpen
		? 'translate-x-0'
		: 'translate-x-full'}"
>
	<div class="flex flex-col h-full pt-20 px-6">
		<button
			onclick={closeMenu}
			class="absolute top-4 right-4 text-gray-900 p-2"
			aria-label="Close menu"
		>
			<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>

		<nav class="flex flex-col gap-4">
			{#each navLinks as link (link.label)}
				<a
					href={link.href}
					onclick={() => {
						setActive(link.label);
						closeMenu();
					}}
					class="text-lg font-medium py-2 transition-colors duration-200 {activeLink === link.label
						? 'text-gray-900'
						: 'text-blue-600 hover:text-gray-900'}"
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<div class="mt-8 flex flex-col gap-4">
			<button class="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
				Join Now
			</button>
			<a
				href="#ezibiz"
				onclick={closeMenu}
				class="text-blue-600 hover:text-gray-900 transition-colors duration-200 text-center font-bold"
			>
				EziBiz
			</a>
		</div>
	</div>
</div>
