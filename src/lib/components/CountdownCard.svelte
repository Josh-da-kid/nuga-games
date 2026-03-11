<script lang="ts">
	let days = $state(120);
	let hours = $state(5);
	let minutes = $state(30);
</script>

<section class="py-8 md:py-12 lg:py-16 px-2 md:px-4">
	<div class="max-w-[1280px] mx-auto">
		<div
			class="bg-[#F2F2F3] rounded-[30px] md:rounded-[40px] lg:rounded-[50px] border-2 border-[#161C2D] p-4 md:p-6 lg:p-12 relative overflow-hidden min-h-[280px] md:min-h-[350px] lg:min-h-[442px] flex flex-col justify-center"
		>
			<div class="z-10 text-center lg:text-left">
				<h2 class="text-sm md:text-lg lg:text-2xl text-[#161C2D] mb-4 md:mb-6 lg:mb-8 font-medium">
					Time Until Paradise Games 2026
				</h2>

				<div
					class="flex flex-wrap justify-center lg:justify-start items-center gap-2 md:gap-4 lg:gap-0"
				>
					<div class="flex flex-col items-center">
						<span
							class="font-['Raleway'] font-normal text-[40px] md:text-[80px] lg:text-[150px] leading-[50px] md:leading-[100px] lg:leading-[180px] text-[#161C2D]"
						>
							{String(days).padStart(2, '0')}
						</span>
						<span class="text-gray-700 text-xs md:text-sm lg:text-lg font-medium mt-1 lg:mt-2"
							>DAYS</span
						>
					</div>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 8 8"
						class="font-['Raleway'] text-[#161C2D] w-[25px] h-[40px] md:w-[50px] md:h-[80px] lg:w-[80px] lg:h-[140px] self-center"
						><path fill="currentColor" d="M4 3V2h1v1m0 3H4V5h1" /></svg
					>

					<div class="flex flex-col items-center">
						<span
							class="font-['Raleway'] font-normal text-[40px] md:text-[80px] lg:text-[150px] leading-[50px] md:leading-[100px] lg:leading-[180px] text-[#161C2D]"
						>
							{String(hours).padStart(2, '0')}
						</span>
						<span class="text-gray-700 text-xs md:text-sm lg:text-lg font-medium mt-1 lg:mt-2"
							>HOURS</span
						>
					</div>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 8 8"
						class="font-['Raleway'] text-[#161C2D] w-[25px] h-[40px] md:w-[50px] md:h-[80px] lg:w-[80px] lg:h-[140px] self-center"
						><path fill="currentColor" d="M4 3V2h1v1m0 3H4V5h1" /></svg
					>

					<div class="flex flex-col items-center">
						<span
							class="font-['Raleway'] font-normal text-[40px] md:text-[80px] lg:text-[150px] leading-[50px] md:leading-[100px] lg:leading-[180px] text-[#161C2D]"
						>
							{String(minutes).padStart(2, '0')}
						</span>
						<span class="text-gray-700 text-xs md:text-sm lg:text-lg font-medium mt-1 lg:mt-2"
							>MINUTES</span
						>
					</div>
				</div>
			</div>

			<div class="absolute bottom-0 right-0">
				<svg
					width="361"
					height="283"
					viewBox="0 0 361 283"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="w-32 h-32 md:w-48 md:h-48 lg:w-[361px] lg:h-[283px]"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M397.341 127.802L385.948 104.879L267.296 138.438L358.412 69.3018L337.81 50.8873L244.334 121.815L293.815 23.8426L266.81 12.9932L219.385 106.895L220.644 2.23205L191.527 -8.2532e-05L190.195 110.746L137.712 5.14642L110.914 12.7259L163.397 118.325L65.8795 35.5376L45.8841 51.6606L138.045 129.901L20.4758 82.6656L9.58374 104.234L132.249 153.517L-9.2212e-05 146.433L0.52535 170.525L129.434 177.431L10.7815 210.99L22.1742 233.913L140.826 200.354L49.7106 269.491L70.3108 287.904L163.789 216.978L114.309 314.95L141.312 325.798L188.737 231.896L187.478 336.56L216.595 338.792L217.928 228.047L270.41 333.646L297.208 326.066L244.725 220.466L342.243 303.254L362.238 287.132L270.076 208.891L387.646 256.126L398.54 234.559L275.874 185.276L408.121 192.359L407.597 168.267L278.689 161.362L397.341 127.802Z"
						fill="url(#paint0_linear_2320_8314)"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_2320_8314"
							x1="391.644"
							y1="116.341"
							x2="-37.6104"
							y2="293.271"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#161C2D" />
							<stop offset="1" stop-color="#0147FF" stop-opacity="0" />
						</linearGradient>
					</defs>
				</svg>
			</div>
		</div>
	</div>
</section>
