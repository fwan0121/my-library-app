function SearchBar() {
    return (
      <div className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">Welcome to Our Library</h2>
          <p className="mb-6">Explore a vast collection of books and resources.</p>
          <input
            type="text"
            placeholder="Search for books"
            className="px-4 py-2 w-full max-w-md rounded border border-gray-400"
          />
        </div>
      </div>
    );
  }
  
  export default SearchBar;