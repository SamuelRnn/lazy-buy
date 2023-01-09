import React from "react";

const Pagination = ({ pages }) => {
  let array = [];
  for (let i = 0; i < pages; i += 10) {
    array.push(i);
  }

  return (
    <div className="flex justify-center ">
      <nav aria-label="Page navigation example">
        <ul className="flex gap-2 list-style-none">
          <li className="page-item disabled">
            <a
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-500 pointer-events-none focus:shadow-none"
              href="#"
              tabIndex="-1"
              aria-disabled="true"
            >
              Previous
            </a>
          </li>
          {array?.map((e, i) => (
            <li key={i} className="page-item">
              <a
                className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                href="#"
              >
                {i + 1}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href="#"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
