const Navbar = () => {
  return (
    <>
      <nav class="bg-gray-900 text-white shadow-lg">
  <div class="max-w-7xl mx-auto px-4">
    
    <div class="flex justify-between items-center h-16">
      
      <div class="text-2xl font-bold">
        CyberNest
      </div>

      <div class="hidden md:flex space-x-6">
        <a href="#" class="hover:text-blue-400 transition">Home</a>
        <a href="#" class="hover:text-blue-400 transition">About</a>
        <a href="#" class="hover:text-blue-400 transition">Services</a>
        <a href="#" class="hover:text-blue-400 transition">Contact</a>
      </div>

      <div class="hidden md:block">
        <button class="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition">
          Login
        </button>
      </div>

      <div class="md:hidden">
        <button class="text-white text-2xl">
          ☰
        </button>
      </div>

    </div>

  </div>
</nav>
    </>
  );
};

export default Navbar;
