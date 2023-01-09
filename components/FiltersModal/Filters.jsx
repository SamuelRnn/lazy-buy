const Filters = ({ setFilters, setActiveFiltersModal }) => {
  const applyFilters = (event) => {
    event.preventDefault();
    let price_range = ["min", "max"];
    if (event.target[0].value !== "") {
      price_range[0] = event.target[0].value;
    }
    if (event.target[1].value !== "") {
      price_range[1] = event.target[1].value;
    }
    setFilters((state) => ({
      ...state,
      price_range,
    }));
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
