<script lang="ts">
  // Component props
  export let title: string = '';
  export let className: string = '';

  // Local state
  let isActive = false;

  // Lifecycle
  import { onMount } from 'svelte';

  onMount(() => {
    // Component initialization code
    console.log('Component mounted');
  });

  // Methods
  function toggleActive() {
    isActive = !isActive;
  }
</script>

<!-- Component markup -->
<div class="component {className} {isActive ? 'active' : ''}">
  {#if title}
    <h3 class="component-title">{title}</h3>
  {/if}
  
  <div class="component-content">
    <slot><!-- Default content --></slot>
  </div>
  
  <button on:click={toggleActive}>
    Toggle Active State
  </button>
</div>

<!-- Component styles -->
<style>
  .component {
    border: 1px solid #e2e8f0;
    border-radius: 0.375rem;
    padding: 1rem;
    margin-bottom: 1rem;
    background-color: white;
    transition: all 0.2s ease;
  }
  
  .component.active {
    border-color: var(--feynman-red, #d9381e);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
  
  .component-title {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }
  
  .component-content {
    margin-bottom: 1rem;
  }
  
  button {
    padding: 0.5rem 1rem;
    background-color: var(--feynman-red, #d9381e);
    color: white;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    font-size: 0.875rem;
    transition: background-color 0.2s ease;
  }
  
  button:hover {
    background-color: #b91c1c;
  }
</style>