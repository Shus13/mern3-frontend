
const Card = () => {
  return (
    <>
        <div class="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
  
  <img 
    class="w-full h-56 object-cover"
    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    alt="Card Image"
  />

  <div class="p-6">
    
    <h2 class="text-2xl font-bold text-gray-800 mb-2">
      Web Development
    </h2>

    <p class="text-gray-600 mb-4">
      Learn modern web development with React, Tailwind CSS, Node.js, and MongoDB.
    </p>

    <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
      Read More
    </button>

  </div>
</div>
    </>
  )
}

export default Card