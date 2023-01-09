const Filters = ({ setFilters, setActiveFiltersModal }) => {
  const applyFilters = (event) => {
    event.preventDefault();
    console.log(event.target);
    setActiveFiltersModal(false);
  };
  return (
    <div className="p-4 flex items-around">
      <form onSubmit={applyFilters}>
        <div className="h-full">
          {/* <select name="">
            <option value="a"></option>
            <option value="b"></option>
            <option value="c"></option>
            <option value="d"></option>
          </select> */}
          <input type="number" name="min" placeholder="min. price" />
          <input type="number" name="max" placeholder="max. price" />
        </div>
        <button
          type="submit"
          className="w-full bg-zinc-700 text-zinc-50 rounded h-10 mt-4"
        >
          Apply Filters
        </button>
      </form>
    </div>
  );
};
export default Filters;
