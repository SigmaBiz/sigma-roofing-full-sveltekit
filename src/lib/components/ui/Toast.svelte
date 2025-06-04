<script>
  import { fade, fly } from 'svelte/transition';
  import { Check, X, Info, AlertTriangle } from 'lucide-svelte';
  import { toast } from '$lib/stores/toast';
  
  const icons = {
    success: Check,
    error: X,
    info: Info,
    warning: AlertTriangle
  };
  
  const colors = {
    success: 'bg-green-50 text-green-900 border-green-200',
    error: 'bg-red-50 text-red-900 border-red-200',
    info: 'bg-blue-50 text-blue-900 border-blue-200',
    warning: 'bg-yellow-50 text-yellow-900 border-yellow-200',
    default: 'bg-white text-gray-900 border-gray-200'
  };
</script>

<div class="fixed bottom-0 right-0 z-50 p-4 space-y-4">
  {#each $toast as item (item.id)}
    <div
      class="flex items-center gap-2 rounded-lg border p-4 shadow-lg {colors[item.type] || colors.default}"
      transition:fly={{ y: 100, duration: 300 }}
    >
      {#if icons[item.type]}
        <svelte:component this={icons[item.type]} size={20} />
      {/if}
      <p class="text-sm font-medium">{item.message}</p>
      <button
        on:click={() => toast.remove(item.id)}
        class="ml-auto hover:opacity-70"
      >
        <X size={16} />
      </button>
    </div>
  {/each}
</div>