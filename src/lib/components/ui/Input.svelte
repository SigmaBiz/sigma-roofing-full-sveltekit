<script>
  export let type = 'text';
  export let placeholder = '';
  export let value = '';
  export let disabled = false;
  export let className = '';
  export let id = undefined;
  export let name = undefined;
  export let required = false;
  
  const baseClasses = "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
</script>

<input
  {id}
  {name}
  {type}
  {placeholder}
  {disabled}
  {required}
  bind:value
  class="{baseClasses} {className}"
  on:input
  on:change
  on:blur
  on:focus
  {...$$restProps}
/>