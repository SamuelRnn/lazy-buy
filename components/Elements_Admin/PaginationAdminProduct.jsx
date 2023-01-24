import React from "react";

const PaginationAdminProduct = ({ page, setFilt,pg }) => {
  /* ${active ? "bg-red-500 text-white" : "text-red-500"}
      ${
        !disabled
          ? "bg-white hover:bg-red-500 hover:text-white"
          : "text-red-300 bg-white cursor-not-allowed"
      } */
  let array = [];
  for (let i = 0; i < Math.ceil(page / 10); i++) {
    array.push(i + 1);
  }

  function onClick(pg) {
    setFilt((state) => ({
      ...state,
      pg: (pg - 1) * 10,
    }));
  }
  return (
    <>
      {array.length &&
        array.map((e) => (
          <button
            key={e}
            className={` hover:bg-red-500 ${(pg/10 + 1  === e) ? "bg-red-500 text-white" : "text-red-500 bg-gray-100"} hover:text-white  flex flex-col cursor-pointer items-center justify-center w-9 h-9 shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-sm font-normal transition-colors rounded-lg `}
            onClick={() => onClick(e)}
          >
            {e}
          </button>
        ))}
    </>
  );
};

export default PaginationAdminProduct;
