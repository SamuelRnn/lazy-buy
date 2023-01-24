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
        <div className="h-full flex-col flex text-zinc-600 gap-y-4">
          <label className="mb-2">
            Min. price
            <input type="number" name="min" placeholder="0" />
          </label>
          <label className="mb-2">
            Max. price
            <input type="number" name="max" placeholder="9999" />
          </label>
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
