import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineSearch } from "react-icons/ai";

function slugify(str) {
  return str.toLowerCase().split(" ").join("-");
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
    window.location.href = `/products?search=${slugify(search)}`;
  };
  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center justify-center gap-2 w-80 bg-zinc-50 rounded-full overflow-hidden"
    >
      <input
        onChange={({ target: { value } }) => setSearch(value)}
        type="text"
        className="outline-none py-2 px-4 w-full bg-transparent"
        placeholder="Search"
        value={search}
      />
      <button type="submit" className="pr-3">
        <AiOutlineSearch className="text-2xl text-zinc-500" />
      </button>
    </form>
  );
};

export default SearchBar;
