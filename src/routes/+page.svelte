<script>
  // You can import TypeScript interfaces and use them to type your data
  import { onMount } from 'svelte';
  
  // This will run client-side after the component is mounted
  onMount(() => {
    console.log('Page is mounted and ready');
  });
</script>

<div class="container mx-auto px-4 py-8">
  <header class="mb-8 text-center">
    <h1 class="text-4xl font-bold text-feynman-red">Feynman Lectures Visualization</h1>
    <p class="mt-2 text-xl">Experience Richard Feynman's legendary physics lectures in an interactive, immersive 3D environment.</p>
  </header>
  
  <main class="max-w-3xl mx-auto">
    <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 class="text-2xl font-semibold mb-3">Project Status</h2>
      <p class="mb-4">We're currently in <strong>Phase 1: Foundation</strong> (Milestone 1), building the core infrastructure and initial simulations.</p>
      
      <div class="bg-gray-100 rounded p-4">
        <h3 class="text-lg font-medium mb-2">Milestone 1 Progress</h3>
        <div class="space-y-2">
          <div>
            <div class="flex items-center">
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-feynman-red h-2.5 rounded-full" style="width: 25%"></div>
              </div>
              <span class="ml-2 text-sm">25%</span>
            </div>
            <p class="text-sm text-gray-600">Building foundation technology</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white rounded-lg shadow overflow-hidden">
        <div class="p-6">
          <h3 class="font-bold text-lg mb-2">Volume I</h3>
          <p class="text-gray-700 mb-4">Mechanics, Radiation, and Heat</p>
          <a href="#" class="bg-feynman-red text-white py-2 px-4 rounded block text-center">Coming Soon</a>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow overflow-hidden opacity-50">
        <div class="p-6">
          <h3 class="font-bold text-lg mb-2">Volume II</h3>
          <p class="text-gray-700 mb-4">Electromagnetism and Matter</p>
          <a href="#" class="bg-gray-400 text-white py-2 px-4 rounded block text-center cursor-not-allowed">Future Phase</a>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow overflow-hidden opacity-50">
        <div class="p-6">
          <h3 class="font-bold text-lg mb-2">Volume III</h3>
          <p class="text-gray-700 mb-4">Quantum Mechanics</p>
          <a href="#" class="bg-gray-400 text-white py-2 px-4 rounded block text-center cursor-not-allowed">Future Phase</a>
        </div>
      </div>
    </div>
  </main>
</div>