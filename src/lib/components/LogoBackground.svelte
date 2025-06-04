<script>
  import { onMount } from 'svelte';
  
  onMount(() => {
    // Try to get logo pattern from localStorage or use default
    const storedLogo = localStorage.getItem('logoPattern');
    
    if (storedLogo) {
      document.documentElement.style.setProperty('--logo-pattern', `url('${storedLogo}')`);
    } else {
      // Use default sigma logo
      document.documentElement.style.setProperty('--logo-pattern', `url('/sigma-logo.png')`);
    }
  });
</script>