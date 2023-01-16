import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function getPageLabels(count, perPage) {
  const pages = Math.ceil(count / perPage);
  let aux = [];
  for (let i = pages; i > 0; i--) {
    if (i === 4) {
      aux.unshift("...");
      continue;
    }
    if (i > 4) continue;
    aux.unshift(i);
  }
  aux.push(pages);
  return [aux, pages];
}

const Pagination = ({ count, filters, setFilters }) => {
  if (+count == 0) {
    return <div className="text-gray-500">No products found!</div>;
  }
  const ITEMS_PER_PAGE = 10;
  let [pageLabels, maxPages] = getPageLabels(count, ITEMS_PER_PAGE);

  const goToPage = (num) => {
    if (num === "...") return;
    setFilters({
      ...filters,
      page: num,
    });
  };
  const nextPage = () => {
    if (parseInt(filters.page) === maxPages) return;
    setFilters({
      ...filters,
      page: parseInt(filters.page) + 1,
    });
  };
  const prevPage = () => {
    if (parseInt(filters.page) === 1) return;
    setFilters({
      ...filters,
      page: parseInt(filters.page) - 1,
    });
  };
  return (
    <div className="flex justify-center ">
      <nav className="flex gap-2 items-center">
        <button
          className={`grid place-content-center h-10 w-10 transition-colors rounded-full text-fondo-500 
            hover:bg-gray-200 ${
              parseInt(filters.page) === 1
                ? "pointer-events-none text-zinc-400"
                : ""
            }`}
          onClick={prevPage}
          disabled={filters.page === 1}
        >
          <HiChevronLeft size="22px" />
        </button>
        {pageLabels?.map((e) => {
          if (e === "...") {
            console.log(maxPages);
            return (
              <button
                key={e}
                className={`h-10 w-10 transition-colors rounded-full hover:bg-gray-200 ${
                  filters.page > 3 && filters.page !== maxPages
                    ? "bg-fondo-200 pointer-events-none text-zinc-100"
                    : "text-gray-800"
                }`}
              >
                {filters.page < 4 || filters.page === maxPages
                  ? e
                  : filters.page}
              </button>
            );
          }
          return (
            <button
              key={e}
              className={`h-10 w-10 transition-colors rounded-full hover:bg-gray-200 ${
                parseInt(filters.page) === e
                  ? "bg-fondo-200 pointer-events-none text-zinc-100"
                  : "text-gray-800"
              }`}
              onClick={() => goToPage(e)}
            >
              {e}
            </button>
          );
        })}
        <button
          className={`grid place-content-center h-10 w-10 transition-colors rounded-full text-fondo-500 
          hover:bg-gray-200 ${
            parseInt(filters.page) === maxPages
              ? "pointer-events-none text-zinc-400"
              : ""
          }`}
          onClick={nextPage}
          disabled={filters.page === maxPages}
        >
          <HiChevronRight size="22px" />
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
