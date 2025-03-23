<script>
  import { onMount } from 'svelte';
  
  let simulations = [
    {
      id: 'newtons-laws',
      title: 'Newton\'s Laws Explorer',
      description: 'Explore the fundamental laws of motion through interactive experiments with various objects and forces.',
      thumbnail: '/images/placeholder-newton.jpg',
      volume: 1,
      chapter: 'Chapters 8-10',
      status: 'In Development',
      progress: 40,
      path: '/simulations/volume1/newtons-laws'
    },
    {
      id: 'harmonic-oscillation',
      title: 'Harmonic Oscillation Systems',
      description: 'Investigate oscillatory motion, from simple springs to coupled oscillators and wave propagation.',
      thumbnail: '/images/placeholder-harmonic.jpg',
      volume: 1,
      chapter: 'Chapters 21-23',
      status: 'Planned',
      progress: 10,
      path: '/simulations/volume1/harmonic-oscillation'
    },
    {
      id: 'gravitational-systems',
      title: 'Gravitational Systems Explorer',
      description: 'Study orbital mechanics, energy conservation, and gravitational effects in an N-body simulation.',
      thumbnail: '/images/placeholder-gravity.jpg',
      volume: 1,
      chapter: 'Chapters 7, 13-14',
      status: 'Planned',
      progress: 5,
      path: '/simulations/volume1/gravitational-systems'
    }
  ];
  
  let filteredSimulations = [...simulations];
  let searchQuery = '';
  let selectedVolume = 'all';
  
  function filterSimulations() {
    filteredSimulations = simulations.filter(sim => {
      const matchesSearch = sim.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           sim.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesVolume = selectedVolume === 'all' || sim.volume === parseInt(selectedVolume);
      return matchesSearch && matchesVolume;
    });
  }
  
  $: {
    searchQuery;
    selectedVolume;
    filterSimulations();
  }
</script>

<div class="max-w-6xl mx-auto">
  <h1 class="mb-6">Physics Simulations</h1>
  
  <div class="bg-white rounded-lg shadow-md p-6 mb-8">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
      <div class="relative flex-grow">
        <input
          type="text"
          placeholder="Search simulations..."
          class="w-full px-4 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-feynman-red"
          bind:value={searchQuery}
        />
        <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
      
      <div class="flex-shrink-0">
        <select
          class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-feynman-red"
          bind:value={selectedVolume}
        >
          <option value="all">All Volumes</option>
          <option value="1">Volume I</option>
          <option value="2">Volume II</option>
          <option value="3">Volume III</option>
        </select>
      </div>
    </div>
    
    {#if filteredSimulations.length === 0}
      <div class="text-center py-8">
        <p class="text-gray-500">No simulations match your search criteria.</p>
      </div>
    {:else}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each filteredSimulations as simulation}
          <div class="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div class="h-40 bg-gray-200 flex items-center justify-center">
              <p class="text-gray-500">Simulation preview</p>
            </div>
            <div class="p-4">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-lg font-semibold">{simulation.title}</h3>
                <span class="text-xs px-2 py-1 bg-gray-100 rounded-full">{simulation.status}</span>
              </div>
              <p class="text-sm text-gray-600 mb-1">Volume {simulation.volume} • {simulation.chapter}</p>
              <p class="text-sm text-gray-700 mb-4">{simulation.description}</p>
              
              <div class="mb-4">
                <div class="h-2 bg-gray-200 rounded-full">
                  <div 
                    class="h-full bg-feynman-red rounded-full" 
                    style="width: {simulation.progress}%"
                  ></div>
                </div>
                <p class="text-xs text-right mt-1 text-gray-500">{simulation.progress}% complete</p>
              </div>
              
              <a 
                href={simulation.path} 
                class="block text-center py-2 bg-feynman-red text-white rounded hover:bg-red-700 transition-colors"
              >
                {simulation.status === 'In Development' ? 'Preview' : 'Learn More'}
              </a>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
  
  <div class="bg-white rounded-lg shadow-md p-6">
    <h2 class="mb-4">About Our Simulations</h2>
    <p class="mb-4">
      Each simulation in the Feynman Lectures Visualization Project is designed to illustrate key physics concepts while maintaining Feynman's intuitive approach to teaching. Our simulations include:
    </p>
    <ul class="list-disc pl-6 space-y-2">
      <li>Interactive 3D environments with full camera controls</li>
      <li>Real-time adjustment of physical parameters</li>
      <li>Multiple visualization modes for each concept</li>
      <li>Educational overlays connecting to Feynman's original text</li>
      <li>Challenge problems for deeper learning</li>
    </ul>
  </div>
</div>