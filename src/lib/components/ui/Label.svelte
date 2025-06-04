<script>
  export let className = '';
  export let forId = undefined;
</script>

<label
  for={forId}
  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 {className}"
  {...$$restProps}
>
  <slot />
</label>