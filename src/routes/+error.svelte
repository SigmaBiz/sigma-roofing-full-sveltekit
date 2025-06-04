<script>
  import { page } from '$app/stores';
  import { AlertCircle } from 'lucide-svelte';
</script>

<svelte:head>
  <title>{$page.status} - {$page.error?.message || 'Error'}</title>
</svelte:head>

<div class="min-h-screen w-full flex items-center justify-center bg-gray-50">
  <div class="bg-white rounded-lg shadow-md w-full max-w-md mx-4 p-6">
    <div class="flex mb-4 gap-2 items-center">
      <AlertCircle size={32} class="text-red-500" />
      <h1 class="text-2xl font-bold text-gray-900">
        {$page.status} {$page.status === 404 ? 'Page Not Found' : 'Error'}
      </h1>
    </div>

    <p class="mt-4 text-gray-600">
      {#if $page.status === 404}
        The page you're looking for doesn't exist.
      {:else}
        {$page.error?.message || 'An error occurred'}
      {/if}
    </p>
    
    <a href="/" class="mt-6 inline-block bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors">
      Go Back Home
    </a>
  </div>
</div>