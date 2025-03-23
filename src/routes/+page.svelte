<script>
  import { onMount } from 'svelte';
  
  // Particle animation data
  let particles = [];
  const numParticles = 50;
  
  // Animated background
  onMount(() => {
    // Initialize particles
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 5 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        opacity: Math.random() * 0.5 + 0.1
      });
    }
    
    // Animation setup would go here (omitted for simplicity)
  });
</script>

<div class="relative min-h-screen">
  <!-- Quantum effect background overlay (static version) -->
  <div class="absolute inset-0 bg-quantum-dark bg-opacity-50 overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-quantum-purple/20 via-quantum-dark to-quantum-dark"></div>
  </div>
  
  <div class="container relative z-10 mx-auto px-4 py-12">
    <header class="mb-12 text-center">
      <h1 class="text-5xl mb-3 font-bold bg-clip-text text-transparent bg-gradient-to-r from-feynman-red via-quantum-teal to-quantum-purple">
        Feynman Lectures Visualization
      </h1>
      <p class="mt-4 text-xl text-quantum-light max-w-3xl mx-auto">
        Experience quantum physics through Richard Feynman's legendary lectures in an interactive, immersive 3D environment.
      </p>
    </header>
    
    <main class="max-w-4xl mx-auto">
      <div class="card p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-3">Project Status</h2>
        <p class="mb-4">We're currently in <strong class="text-quantum-teal">Phase 1: Foundation</strong> (Milestone 1), building the core infrastructure for quantum simulations.</p>
        
        <div class="bg-quantum-dark/50 rounded p-4 border border-quantum-blue/30">
          <h3 class="text-lg font-medium mb-2">Milestone 1 Progress</h3>
          <div class="space-y-2">
            <div>
              <div class="flex items-center">
                <div class="w-full bg-quantum-dark rounded-full h-2.5 border border-quantum-teal/20">
                  <div class="bg-gradient-to-r from-quantum-blue to-quantum-purple h-2.5 rounded-full" style="width: 25%"></div>
                </div>
                <span class="ml-2 text-sm">25%</span>
              </div>
              <p class="text-sm text-quantum-light/70 mt-1">Building quantum simulation foundation</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="card group hover:border-quantum-teal transition-all duration-300">
          <div class="h-36 bg-gradient-to-br from-quantum-dark to-quantum-blue flex items-center justify-center overflow-hidden relative">
            <span class="text-5xl text-quantum-light font-bold opacity-20 absolute text-9xl">I</span>
            <div class="z-10 text-center">
              <span class="text-3xl font-bold text-quantum-light">Volume I</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="font-bold text-lg mb-2">Mechanics</h3>
            <p class="text-quantum-light/70 mb-4">Mechanics, Radiation, and Heat</p>
            <a href="#" class="bg-quantum-blue text-white py-2 px-4 rounded block text-center group-hover:bg-quantum-purple transition-colors">Coming Soon</a>
          </div>
        </div>
        
        <div class="card group hover:border-quantum-purple transition-all duration-300">
          <div class="h-36 bg-gradient-to-br from-quantum-dark to-quantum-purple flex items-center justify-center overflow-hidden relative">
            <span class="text-5xl text-quantum-light font-bold opacity-20 absolute text-9xl">II</span>
            <div class="z-10 text-center">
              <span class="text-3xl font-bold text-quantum-light">Volume II</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="font-bold text-lg mb-2">Electromagnetism</h3>
            <p class="text-quantum-light/70 mb-4">Electromagnetism and Matter</p>
            <a href="#" class="bg-quantum-gray/50 text-quantum-light/50 py-2 px-4 rounded block text-center cursor-not-allowed">Future Phase</a>
          </div>
        </div>
        
        <div class="card group hover:border-feynman-red transition-all duration-300">
          <div class="h-36 bg-gradient-to-br from-quantum-dark to-feynman-red flex items-center justify-center overflow-hidden relative">
            <span class="text-5xl text-quantum-light font-bold opacity-20 absolute text-9xl">III</span>
            <div class="z-10 text-center">
              <span class="text-3xl font-bold text-quantum-light">Volume III</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="font-bold text-lg mb-2">Quantum Mechanics</h3>
            <p class="text-quantum-light/70 mb-4">Quantum Mechanics</p>
            <a href="#" class="bg-quantum-gray/50 text-quantum-light/50 py-2 px-4 rounded block text-center cursor-not-allowed">Future Phase</a>
          </div>
        </div>
      </div>
      
      <div class="mt-12 text-center">
        <p class="text-quantum-light/60 text-sm">
          The Feynman Lectures Visualization Project © 2025
        </p>
      </div>
    </main>
  </div>
</div>