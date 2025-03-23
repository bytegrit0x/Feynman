<script>
  import { onMount } from 'svelte';
  import ThreeScene from '$lib/components/ThreeScene.svelte';
  import * as THREE from 'three';
  
  let threeScene;
  let time = 0;
  let isPlaying = false;
  let timeStep = 1;
  
  // Simulation parameters
  let gravity = 9.8;
  let applyingForce = false;
  let forceStrength = 10;
  let selectedObject = 0;
  let forceDirection = { x: 0, y: 0, z: 1 };
  
  // UI states
  let activeTab = 'simulation';
  let showVectors = true;
  
  function togglePlay() {
    isPlaying = !isPlaying;
  }
  
  function resetSimulation() {
    if (threeScene) {
      threeScene.resetScene();
      time = 0;
    }
  }
  
  function stepForward() {
    time += timeStep;
  }
  
  function stepBackward() {
    time = Math.max(0, time - timeStep);
  }
  
  function updateGravity() {
    if (threeScene) {
      threeScene.applyGravity(gravity);
    }
  }
  
  function handleForcePointerDown() {
    applyingForce = true;
  }
  
  function handleForcePointerUp() {
    applyingForce = false;
  }
  
  $: if (threeScene && applyingForce) {
    const forceVector = new THREE.Vector3(
      forceDirection.x * forceStrength,
      forceDirection.y * forceStrength,
      forceDirection.z * forceStrength
    );
    threeScene.applyForce(selectedObject, forceVector);
  }
  
  $: if (threeScene) {
    updateGravity();
  }
</script>

<div class="max-w-6xl mx-auto">
  <header class="mb-6">
    <h1 class="mb-2">Newton's Laws Explorer</h1>
    <p class="text-gray-700">
      Investigate Newton's Laws of Motion through interactive experiments with various objects and forces.
    </p>
  </header>
  
  <div class="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
    <div class="border-b border-gray-200">
      <div class="flex">
        <button 
          class="px-4 py-2 focus:outline-none {activeTab === 'simulation' ? 'bg-feynman-red text-white' : 'hover:bg-gray-100'}"
          on:click={() => activeTab = 'simulation'}
        >
          Simulation
        </button>
        <button 
          class="px-4 py-2 focus:outline-none {activeTab === 'concepts' ? 'bg-feynman-red text-white' : 'hover:bg-gray-100'}"
          on:click={() => activeTab = 'concepts'}
        >
          Key Concepts
        </button>
        <button 
          class="px-4 py-2 focus:outline-none {activeTab === 'challenges' ? 'bg-feynman-red text-white' : 'hover:bg-gray-100'}"
          on:click={() => activeTab = 'challenges'}
        >
          Challenges
        </button>
      </div>
    </div>
    
    <div class="p-4">
      {#if activeTab === 'simulation'}
        <div class="flex flex-col lg:flex-row gap-6">
          <div class="lg:w-3/4">
            <div class="rounded-lg overflow-hidden border border-gray-200">
              <ThreeScene bind:this={threeScene} height="500px" />
            </div>
            
            <div class="mt-4 flex items-center justify-between border-t border-b py-3">
              <div class="flex space-x-2">
                <button 
                  class="p-2 rounded hover:bg-gray-100" 
                  on:click={stepBackward}
                  disabled={!threeScene}
                >
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  class="p-2 rounded hover:bg-gray-100" 
                  on:click={togglePlay}
                  disabled={!threeScene}
                >
                  {#if isPlaying}
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  {:else}
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  {/if}
                </button>
                
                <button 
                  class="p-2 rounded hover:bg-gray-100" 
                  on:click={stepForward}
                  disabled={!threeScene}
                >
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                </button>
                
                <button 
                  class="p-2 rounded hover:bg-gray-100" 
                  on:click={resetSimulation}
                  disabled={!threeScene}
                >
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="flex items-center">
                  <label class="mr-2 text-sm">Time:</label>
                  <span class="bg-gray-100 px-2 py-1 rounded text-sm">{time.toFixed(1)}s</span>
                </div>
                
                <div class="flex items-center">
                  <label class="mr-2 text-sm">Speed:</label>
                  <select 
                    class="text-sm border rounded p-1"
                    bind:value={timeStep}
                  >
                    <option value={0.25}>0.25x</option>
                    <option value={0.5}>0.5x</option>
                    <option value={1}>1x</option>
                    <option value={2}>2x</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          <div class="lg:w-1/4 bg-gray-50 p-4 rounded-lg">
            <h3 class="font-semibold mb-4">Simulation Controls</h3>
            
            <div class="space-y-6">
              <div>
                <h4 class="text-sm font-medium mb-2">Environment</h4>
                <div class="space-y-3">
                  <div>
                    <label class="block text-sm text-gray-700 mb-1">Gravity</label>
                    <div class="flex items-center space-x-2">
                      <input 
                        type="range" 
                        min="0" 
                        max="20" 
                        step="0.1" 
                        class="flex-grow"
                        bind:value={gravity}
                      />
                      <span class="text-sm bg-gray-100 px-2 py-1 rounded w-12 text-center">
                        {gravity.toFixed(1)}
                      </span>
                    </div>
                  </div>
                  
                  <div class="flex items-center">
                    <input 
                      type="checkbox" 
                      id="showVectors" 
                      bind:checked={showVectors}
                      class="mr-2"
                    />
                    <label for="showVectors" class="text-sm">Show force vectors</label>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 class="text-sm font-medium mb-2">Apply Force</h4>
                <div class="space-y-3">
                  <div>
                    <label class="block text-sm text-gray-700 mb-1">Select Object</label>
                    <select 
                      class="w-full p-2 border rounded"
                      bind:value={selectedObject}
                    >
                      <option value={0}>Blue Cube (1kg)</option>
                      <option value={1}>Pink Sphere (0.5kg)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label class="block text-sm text-gray-700 mb-1">Force Direction</label>
                    <div class="grid grid-cols-3 gap-2">
                      <button 
                        class="p-2 bg-gray-200 rounded hover:bg-gray-300 text-sm"
                        on:click={() => forceDirection = { x: -1, y: 0, z: 0 }}
                      >
                        -X
                      </button>
                      <button 
                        class="p-2 bg-gray-200 rounded hover:bg-gray-300 text-sm"
                        on:click={() => forceDirection = { x: 0, y: 1, z: 0 }}
                      >
                        +Y
                      </button>
                      <button 
                        class="p-2 bg-gray-200 rounded hover:bg-gray-300 text-sm"
                        on:click={() => forceDirection = { x: 1, y: 0, z: 0 }}
                      >
                        +X
                      </button>
                      <button 
                        class="p-2 bg-gray-200 rounded hover:bg-gray-300 text-sm"
                        on:click={() => forceDirection = { x: 0, y: 0, z: -1 }}
                      >
                        -Z
                      </button>
                      <button 
                        class="p-2 bg-gray-200 rounded hover:bg-gray-300 text-sm"
                        on:click={() => forceDirection = { x: 0, y: -1, z: 0 }}
                      >
                        -Y
                      </button>
                      <button 
                        class="p-2 bg-gray-200 rounded hover:bg-gray-300 text-sm"
                        on:click={() => forceDirection = { x: 0, y: 0, z: 1 }}
                      >
                        +Z
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label class="block text-sm text-gray-700 mb-1">Force Strength</label>
                    <div class="flex items-center space-x-2">
                      <input 
                        type="range" 
                        min="1" 
                        max="50" 
                        step="1" 
                        class="flex-grow"
                        bind:value={forceStrength}
                      />
                      <span class="text-sm bg-gray-100 px-2 py-1 rounded w-12 text-center">
                        {forceStrength}N
                      </span>
                    </div>
                  </div>
                  
                  <button 
                    class="w-full py-2 bg-feynman-red text-white rounded hover:bg-red-700 transition-colors"
                    on:mousedown={handleForcePointerDown}
                    on:mouseup={handleForcePointerUp}
                    on:mouseleave={handleForcePointerUp}
                  >
                    Apply Force
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      {:else if activeTab === 'concepts'}
        <div class="space-y-6">
          <div>
            <h2 class="text-xl font-semibold mb-2">Newton's First Law</h2>
            <div class="bg-gray-50 p-4 rounded-lg mb-3">
              <p class="italic">
                "An object at rest stays at rest, and an object in motion stays in motion with the same speed and direction, unless acted upon by an external force."
              </p>
            </div>
            <p class="text-gray-700 mb-2">
              In the absence of external forces, an object will maintain its state of motion. This property is called inertia.
            </p>
            <p class="text-gray-700">
              In our simulation, you can observe this by turning gravity to zero and noticing how objects continue moving in a straight line at constant velocity.
            </p>
          </div>
          
          <div>
            <h2 class="text-xl font-semibold mb-2">Newton's Second Law</h2>
            <div class="bg-gray-50 p-4 rounded-lg mb-3">
              <p class="italic">
                "The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass."
              </p>
              <p class="font-mono mt-2">F = ma</p>
            </div>
            <p class="text-gray-700 mb-2">
              This law provides the mathematical relationship between force, mass, and acceleration. It explains why heavier objects require more force to accelerate at the same rate as lighter objects.
            </p>
            <p class="text-gray-700">
              Experiment with applying the same force to objects of different masses and observe the different accelerations.
            </p>
          </div>
          
          <div>
            <h2 class="text-xl font-semibold mb-2">Newton's Third Law</h2>
            <div class="bg-gray-50 p-4 rounded-lg mb-3">
              <p class="italic">
                "For every action, there is an equal and opposite reaction."
              </p>
            </div>
            <p class="text-gray-700 mb-2">
              When one object exerts a force on another, the second object exerts an equal and opposite force on the first.
            </p>
            <p class="text-gray-700">
              Observe this principle during collisions between objects in the simulation, where both objects experience forces of equal magnitude but opposite direction.
            </p>
          </div>
        </div>
      {:else if activeTab === 'challenges'}
        <div class="space-y-6">
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-semibold mb-2">Challenge 1: Conservation of Momentum</h3>
            <p class="mb-3">
              Set up a collision between the cube and sphere. Verify that momentum is conserved before and after the collision.
            </p>
            <p class="text-sm text-gray-600">
              Hint: Momentum = mass × velocity. Calculate the total momentum of both objects before and after the collision.
            </p>
          </div>
          
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-semibold mb-2">Challenge 2: Equal and Opposite Forces</h3>
            <p class="mb-3">
              Apply a force to the cube in the direction of the sphere. Observe what happens during the collision and verify Newton's Third Law.
            </p>
            <p class="text-sm text-gray-600">
              Hint: Watch how the forces affect both objects during the collision.
            </p>
          </div>
          
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-semibold mb-2">Challenge 3: Force and Acceleration</h3>
            <p class="mb-3">
              Apply the same force to both the cube and sphere. Compare their accelerations and verify Newton's Second Law.
            </p>
            <p class="text-sm text-gray-600">
              Hint: The acceleration should be inversely proportional to the mass (a = F/m).
            </p>
          </div>
          
          <div class="text-center mt-4">
            <button class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors">
              More challenges coming soon
            </button>
          </div>
        </div>
      {/if}
    </div>
  </div>
  
  <div class="bg-white rounded-lg shadow-md p-6 mb-8">
    <h2 class="text-xl font-semibold mb-4">Connection to Feynman Lectures</h2>
    <div class="flex flex-col md:flex-row gap-6">
      <div class="md:w-2/3">
        <p class="mb-4">
          In Volume I, Chapters 8-10 of the Feynman Lectures on Physics, Richard Feynman explains Newton's Laws with his characteristic clarity and insight. He emphasizes the fundamental nature of these laws and how they form the foundation of classical mechanics.
        </p>
        <p class="mb-4">
          Feynman notes that Newton's laws are not simply definitions but are fundamental observations about nature that have been verified through countless experiments. He emphasizes how these simple laws can explain an enormous range of phenomena when correctly applied.
        </p>
        <p>
          This simulation allows you to experiment with these laws directly, building the physical intuition that Feynman sought to develop in his students.
        </p>
      </div>
      <div class="md:w-1/3 bg-gray-50 p-4 rounded-lg">
        <h3 class="font-semibold mb-2">From the Lectures</h3>
        <blockquote class="italic text-gray-700 border-l-4 border-feynman-red pl-4">
          "Newton was originally called by Nature, by the world, to observe the world—to make experiments and observations on the world. But that wasn't enough. He had to understand it..."
        </blockquote>
        <p class="text-right text-sm text-gray-600 mt-2">
          — Volume I, Chapter 8
        </p>
      </div>
    </div>
  </div>
  
  <div class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-xl font-semibold mb-4">Additional Learning Resources</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <h3 class="font-semibold mb-2">Video Explanations</h3>
        <ul class="list-disc pl-5 space-y-1 text-gray-700">
          <li>Feynman's explanation of Newton's Laws</li>
          <li>Inertia and mass demonstration</li>
          <li>Collisions and momentum visualization</li>
        </ul>
        <p class="text-sm text-gray-500 mt-2">Coming soon</p>
      </div>
      
      <div>
        <h3 class="font-semibold mb-2">Interactive Problems</h3>
        <ul class="list-disc pl-5 space-y-1 text-gray-700">
          <li>Force and motion challenges</li>
          <li>Momentum conservation problems</li>
          <li>Real-world applications</li>
        </ul>
        <p class="text-sm text-gray-500 mt-2">Coming soon</p>
      </div>
      
      <div>
        <h3 class="font-semibold mb-2">Related Simulations</h3>
        <ul class="list-disc pl-5 space-y-1 text-gray-700">
          <li>Harmonic Oscillation Systems</li>
          <li>Gravitational Systems Explorer</li>
          <li>Rotational Dynamics Laboratory</li>
        </ul>
        <p class="text-sm text-gray-500 mt-2">In development</p>
      </div>
    </div>
  </div>
</div>