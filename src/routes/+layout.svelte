<script>
  import '../app.css';
</script>

<div class="min-h-screen">
  <header class="bg-white shadow-md">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <h1 class="text-2xl">Feynman Lectures Visualization</h1>
      <nav>
        <ul class="flex space-x-4">
          <li><a href="/" class="hover:text-feynman-red">Home</a></li>
          <li><a href="/about" class="hover:text-feynman-red">About</a></li>
          <li><a href="/simulations" class="hover:text-feynman-red">Simulations</a></li>
        </ul>
      </nav>
    </div>
  </header>
  
  <main class="container mx-auto px-4 py-8">
    <slot />
  </main>
  
  <footer class="bg-gray-900 text-white py-6">
    <div class="container mx-auto px-4">
      <p class="text-center">Feynman Lectures Visualization Project &copy; 2025</p>
    </div>
  </footer>
</div>