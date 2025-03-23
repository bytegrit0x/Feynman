<script>
  import { onMount } from 'svelte';
  
  let introVisible = false;
  
  onMount(() => {
    introVisible = true;
  });
</script>

<div class="max-w-4xl mx-auto">
  <section class="mb-12">
    <div class="text-center mb-8">
      <h1 class="mb-4 transition-opacity duration-1000 {introVisible ? 'opacity-100' : 'opacity-0'}">
        The Feynman Lectures Visualized
      </h1>
      <p class="text-xl transition-opacity duration-1000 delay-300 {introVisible ? 'opacity-100' : 'opacity-0'}">
        Experience Richard Feynman's legendary physics lectures in an interactive, immersive 3D environment.
      </p>
    </div>
    
    <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-opacity duration-1000 delay-500 {introVisible ? 'opacity-100' : 'opacity-0'}">
      <div class="h-64 bg-gray-200 flex items-center justify-center">
        <p class="text-lg text-gray-500">Interactive visualization preview will appear here</p>
      </div>
      <div class="p-6">
        <h2 class="mb-2">Explore Physics Through Interaction</h2>
        <p class="text-gray-700">
          Manipulate variables, observe outcomes, and develop intuition about physical laws through hands-on experimentation.
        </p>
      </div>
    </div>
  </section>
  
  <section class="mb-12 transition-opacity duration-1000 delay-700 {introVisible ? 'opacity-100' : 'opacity-0'}">
    <h2 class="mb-4 text-center">Choose Your Learning Path</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="h-40 bg-red-100 flex items-center justify-center">
          <span class="text-5xl text-feynman-red">I</span>
        </div>
        <div class="p-4">
          <h3 class="mb-2">Volume I</h3>
          <p class="text-gray-700 mb-4">Mechanics, Radiation, and Heat</p>
          <a href="/simulations/volume1" class="block text-center py-2 bg-feynman-red text-white rounded hover:bg-red-700 transition-colors">
            Explore
          </a>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow-md overflow-hidden opacity-50">
        <div class="h-40 bg-blue-100 flex items-center justify-center">
          <span class="text-5xl text-blue-600">II</span>
        </div>
        <div class="p-4">
          <h3 class="mb-2">Volume II</h3>
          <p class="text-gray-700 mb-4">Electromagnetism and Matter</p>
          <button disabled class="block w-full py-2 bg-gray-400 text-white rounded cursor-not-allowed">
            Coming Soon
          </button>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow-md overflow-hidden opacity-50">
        <div class="h-40 bg-purple-100 flex items-center justify-center">
          <span class="text-5xl text-purple-600">III</span>
        </div>
        <div class="p-4">
          <h3 class="mb-2">Volume III</h3>
          <p class="text-gray-700 mb-4">Quantum Mechanics</p>
          <button disabled class="block w-full py-2 bg-gray-400 text-white rounded cursor-not-allowed">
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  </section>
  
  <section class="transition-opacity duration-1000 delay-900 {introVisible ? 'opacity-100' : 'opacity-0'}">
    <h2 class="mb-4 text-center">Project Milestone 1</h2>
    <p class="text-center text-gray-700 mb-6">
      We're currently in the initial phase of development, building the foundation for Feynman's interactive visualizations.
    </p>
    
    <div class="bg-white rounded-lg shadow-md p-6">
      <ul class="space-y-2">
        <li class="flex items-start">
          <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Project foundation established</span>
        </li>
        <li class="flex items-start">
          <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Core technology stack implemented</span>
        </li>
        <li class="flex items-start">
          <svg class="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>First simulation prototype in development</span>
        </li>
        <li class="flex items-start">
          <svg class="h-6 w-6 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>Content processing pipeline (coming soon)</span>
        </li>
      </ul>
    </div>
  </section>
</div>