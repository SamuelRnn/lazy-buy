import { useState } from "react";
import { toast } from "react-hot-toast";

function slugify(str) {
  return str.split(" ").join("-");
}

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    event.preventDefault();
    if (!search) {
      event.target[0].blur();
      return toast.error("There's nothing to search for!", {
        duration: 2300,
      });
    }
    window.location.href = `/products?search=${slugify(search)}&page=1`;
  };
  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center justify-center gap-2 w-80 bg-zinc-50 rounded-lg overflow-hidden"
    >
      <input
        onChange={({ target: { value } }) => setSearch(value)}
        type="text"
        className="outline-none p-2 w-full bg-transparent"
        placeholder="Search"
        value={search}
      />
      <button type="submit" className="px-2">
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
      </button>
    </form>
  );
};

export default SearchBar;
