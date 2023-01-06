import { useEffect, useState } from "react";

const Filters = ({ setProducts, products }) => {



  const handleChange = (e) => {
    e.preventDefault()
    let value = e.target.value
    let productFiletered = products.filter(p => {
      return p.category === value
    })
    setProducts(productFiletered)
  }



  return (
    <>
      <h2>FILTROS: </h2>
      <form action="">
        <select onChange={handleChange} class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
          <option value="men's clothing">Men's clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="women's clothing">Women's clothing</option>
          <option value="Electronics">Electronics</option>
        </select>
      </form>
    </>
  );
};
//logica de los filtros y RTK query
export default Filters;
