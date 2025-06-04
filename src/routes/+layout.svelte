<script>
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import LogoBackground from '$lib/components/LogoBackground.svelte';
  import Toast from '$lib/components/ui/Toast.svelte';
</script>

<LogoBackground />
<Toast />

<div class="min-h-screen flex flex-col">
  <Header />
  <main class="flex-grow">
    <slot />
  </main>
  <Footer />
</div>