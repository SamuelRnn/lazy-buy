import React from "react";

function getPageLabels(count, perPage) {
  const pages = Math.ceil(count / perPage);
  const aux = [];
  for (let i = pages; i > 0; i--) {
    aux.unshift(i);
  }
  return [aux, pages];
}

const Pagination = ({ count, filters, setFilters }) => {
  console.log(count, filters, setFilters);
  if (count == 0) {
    return <div className="text-gray-500">No products found!</div>;
  }
  const ITEMS_PER_PAGE = 10;
  let [pageLabels, maxPages] = getPageLabels(count, ITEMS_PER_PAGE);

  const goToPage = (num) => {
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
      <nav aria-label="Page navigation example">
        <ul className="flex gap-2 list-style-none">
          <button
            className="block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-500 pointer-events-none focus:shadow-none"
            tabIndex="-1"
            onClick={prevPage}
            disabled={filters.page === 1}
          >
            Previous
          </button>
          {pageLabels?.map((e) => (
            <li key={e} className="page-item">
              <button
                className={`block h-8 w-8 border-0 outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none ${
                  parseInt(filters.page) === e ? "bg-zinc-400" : ""
                }`}
                onClick={() => goToPage(e)}
              >
                {e}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button
              className="block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              onClick={nextPage}
              disabled={filters.page === maxPages}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
