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
						<span class="text-gray-900 font-bold text-lg md:text-xl">Paradise Games</span>
					</a>
					<small class="font-medium sm:text-base text-gray-900"
						>Unical Radio International 2026</small
					>
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
					><span class="flex items-center gap-2"
						>Join Now
						<svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
							<path
								d="M27.414 15L6 15a1 1 0 0 0 0 2l21.414 0-6.707 6.707 1.414 1.414L30.414 17 22.121 8.879l-1.414 1.414z"
							/>
						</svg>
					</span>
				</button>
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
	<div
		class="fixed inset-0 z-40 lg:hidden bg-black/60 backdrop-blur-sm transition-opacity duration-300"
		onclick={closeMenu}
		onkeydown={handleKeydown}
		aria-label="Close menu overlay"
	></div>
{/if}

<div
	class="fixed top-0 right-0 h-full w-full max-w-[360px] bg-white z-50 transform transition-transform duration-500 ease-out shadow-2xl lg:hidden {isOpen
		? 'translate-x-0'
		: 'translate-x-full'}"
>
	<div class="flex flex-col h-full">
		<!-- Header with Logo -->
		<div class="flex items-center justify-between px-6 py-5 border-b border-gray-100">
			<div class="flex items-center gap-3">
				<div class="bg-blue-600 rounded-full p-1.5">
					<svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
						/>
					</svg>
				</div>
				<div class="flex flex-col">
					<span class="text-gray-900 font-bold text-lg">Paradise Games</span>
					<span class="text-gray-500 text-xs font-medium">Unical Radio International 2026</span>
				</div>
			</div>
			<button
				onclick={closeMenu}
				class="text-gray-400 hover:text-gray-900 transition-colors duration-200 p-2 -mr-2"
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
		</div>

		<!-- Navigation Links -->
		<div class="flex-1 overflow-y-auto px-6 py-6">
			<nav class="flex flex-col gap-2">
				{#each navLinks as link (link.label)}
					<a
						href={link.href}
						onclick={() => {
							setActive(link.label);
							closeMenu();
						}}
						class="flex items-center gap-3 px-4 py-3.5 rounded-lg transition-all duration-200 {activeLink ===
						link.label
							? 'bg-blue-50 text-blue-600 font-semibold'
							: 'text-gray-700 hover:bg-gray-50 hover:text-gray-900 font-medium'}"
					>
						<span
							class="w-1.5 h-1.5 rounded-full {activeLink === link.label
								? 'bg-blue-600'
								: 'bg-gray-300'}"
						></span>
						<span class="text-base">{link.label}</span>
					</a>
				{/each}
			</nav>

			<!-- Divider -->
			<div class="my-6 border-t border-gray-100"></div>

			<!-- EziBiz Link -->
			<a
				href="#ezibiz"
				onclick={() => closeMenu()}
				class="flex items-center gap-3 px-4 py-3.5 rounded-lg text-amber-700 hover:bg-amber-50 transition-all duration-200 font-semibold"
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<span class="text-base">EziBiz</span>
			</a>
		</div>

		<!-- Footer CTA -->
		<div class="px-6 py-6 border-t border-gray-100 bg-gray-50">
			<button
				class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
			>
				<span class="flex items-center justify-center gap-2">
					Join Now
					<svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
						<path
							d="M27.414 15L6 15a1 1 0 0 0 0 2l21.414 0-6.707 6.707 1.414 1.414L30.414 17 22.121 8.879l-1.414 1.414z"
						/>
					</svg>
				</span>
			</button>
			<p class="text-center text-gray-500 text-xs mt-4">
				© 2026 Paradise Games. All rights reserved.
			</p>
		</div>
	</div>
</div>
