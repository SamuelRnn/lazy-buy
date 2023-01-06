const OrderSelect = () => {
  return (
    <select
      onChange={({ target }) => console.log(target.value)}
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
