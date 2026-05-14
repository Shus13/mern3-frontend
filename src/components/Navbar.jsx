const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-900 text-white shadow-lg">
  <div className="max-w-7xl mx-auto px-4">
    
    <div className="flex justify-between items-center h-16">
      
      <div className="text-2xl font-bold">
        CyberNest
      </div>

      <div className="hidden md:flex space-x-6">
        <a href="#" className="hover:text-blue-400 transition">Home</a>
        <a href="#" className="hover:text-blue-400 transition">About</a>
        <a href="#" className="hover:text-blue-400 transition">Services</a>
        <a href="#" className="hover:text-blue-400 transition">Contact</a>
      </div>

      <div className="hidden md:block">
        <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition">
          Login
        </button>
      </div>

      <div className="md:hidden">
        <button className="text-white text-2xl">
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
