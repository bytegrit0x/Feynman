<script>
  import '../app.css';
</script>

<div class="min-h-screen bg-quantum-dark">
  <header class="bg-quantum-gray/60 border-b border-quantum-teal/20 shadow-lg">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <h3 class="text-quantum-light font-bold">
        <span class="text-feynman-red">Feynman</span> Lectures
      </h3>
      
      <nav>
        <ul class="flex space-x-6">
          <li><a href="/" class="text-quantum-light hover:text-quantum-teal">Home</a></li>
          <li><a href="#about" class="text-quantum-light hover:text-quantum-teal">About</a></li>
          <li><a href="#simulations" class="text-quantum-light hover:text-quantum-teal">Simulations</a></li>
        </ul>
      </nav>
    </div>
  </header>
  
  <main>
    <slot />
  </main>
</div>