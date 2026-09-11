function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
          alt="Laptop"
          className="w-full h-52 object-cover"
        />

        <div className="p-6">

          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Learn Tailwind CSS
          </h2>

          <p className="text-gray-600 mb-5">
            Build beautiful and responsive websites faster using Tailwind CSS
            utility classes.
          </p>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Learn More
          </button>

        </div>

      </div>

    </div>
  )
}

export default App