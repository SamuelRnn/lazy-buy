const SearchBar = () => {
  return (
    <form className="flex items-center justify-center gap-2 w-96 bg-white rounded-lg overflow-hidden">
      <input
        type="text"
        className="outline-none p-2 w-full"
        placeholder="Buscar"
      />
      <div className="px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600 cursor-pointer hover:text-fondo-400 transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </form>
  );
};

export default SearchBar;
