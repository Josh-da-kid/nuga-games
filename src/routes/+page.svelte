<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import HeroSlider from '$lib/components/HeroSlider.svelte';
	import MetricsSection from '$lib/components/MetricsSection.svelte';
	import CountdownCard from '$lib/components/CountdownCard.svelte';
	import WelcomeSection from '$lib/components/WelcomeSection.svelte';
	import MediaPortfolio from '$lib/components/MediaPortfolio.svelte';
	import SportsCategory from '$lib/components/SportCategory.svelte';
	import NugaRegistry from '$lib/components/NugaRegistry.svelte';
	import NugaVolunteer from '$lib/components/NugaVolunteer.svelte';
	import NugamesStore from '$lib/components/NugamesStore.svelte';
	import VarsityGames from '$lib/components/VarsityGames.svelte';
	import Partners from '$lib/components/Partners.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import NewsLetter from '$lib/components/NewsLetter.svelte';
</script>

<svelte:head>
	<title>NUGA 2026 - Nigerian University Games Association</title>
	<meta
		name="description"
		content="The official landing page for NUGA 2026 - Nigerian University Games Association hosted by the University of Calabar. Join student athletes from across Nigeria for the 28th edition of this prestigious multi-sport event."
	/>
	<meta
		name="keywords"
		content="NUGA, Nigerian University Games, University of Calabar, sports, athletics, 2026"
	/>
	<meta property="og:title" content="NUGA 2026 - Nigerian University Games Association" />
	<meta
		property="og:description"
		content="The 28th edition of Nigeria's premier university sports competition at the University of Calabar."
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<div class="min-h-screen bg-white">
	<Navbar />
	<main>
		<HeroSlider />
		<MetricsSection />
		<CountdownCard />
		<WelcomeSection />
		<MediaPortfolio />
		<SportsCategory />
		<NugaRegistry />
		<NugamesStore />
		<NugaVolunteer />
		<VarsityGames />
		<Partners />
	</main>

	<NewsLetter />
	<Footer />
</div>
