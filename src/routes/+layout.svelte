<script>
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import LogoBackground from '$lib/components/LogoBackground.svelte';
</script>

<LogoBackground />

<div class="min-h-screen flex flex-col">
  <Header />
  <main class="flex-grow">
    <slot />
  </main>
  <Footer />
</div>