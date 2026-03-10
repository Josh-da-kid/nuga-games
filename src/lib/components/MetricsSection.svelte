<script lang="ts">
	const metrics = [
		{ value: '1', label: 'Campus' },
		{ value: '12', label: 'Days' },
		{ value: '100+', label: 'Universities' },
		{ value: '24', label: 'Games' },
		{ value: '10k+', label: 'Spectators' },
		{ value: '1k+', label: 'Support' },
		{ value: '10k+', label: 'Volunteers' },
		{ value: '50M+', label: 'Broadcast Audience' }
	];
</script>

<section class="py-16 md:py-20 lg:py-24 bg-white">
	<div class="max-w-[1280px] mx-auto px-6">
		<h2
			class="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-12 md:mb-16 tracking-wider"
		>
			NUGA<span class="text-gray-900">METRICS</span>
		</h2>

		<div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
			{#each metrics as metric, index (metric.label)}
				<div class="relative">
					<div class="flex flex-col items-center text-center p-4 md:p-6">
						<span class="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-2">
							{metric.value}
						</span>
						<span class="text-gray-900 text-sm md:text-base font-medium">
							{metric.label}
						</span>
					</div>
					{#if (index + 1) % 4 !== 0 && index < metrics.length - 1}
						<div
							class="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-gray-500"
						></div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
