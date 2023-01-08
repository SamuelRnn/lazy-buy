const OrderSelect = () => {
  const handleChange = ({ target }) => {
    r;
  };
  return (
    <select
      onChange={handleChange}
      name=""
      id=""
      className="filter_btn"
      defaultValue="priority"
    >
      <option value="priority">Recomendados</option>
      <option value="price_des">Mayor precio</option>
      <option value="price_asc">Menor precio</option>
      <option value="rating">Mejor puntuación</option>
    </select>
  );
};

export default OrderSelect;
