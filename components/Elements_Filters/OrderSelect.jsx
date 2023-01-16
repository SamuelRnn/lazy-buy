import { useRouter } from "next/router";

const OrderSelect = ({ setFilters, disabled }) => {
  const router = useRouter();
  router.query;
  const handleChange = ({ target }) => {
    setFilters((state) => {
      return {
        ...state,
        sort: target.value,
      };
    });
  };
  return (
    <div>
      <select
        disabled={disabled}
        onChange={handleChange}
        name=""
        id=""
        className="filter_btn"
        defaultValue="priority"
      >
        <option value="priority" className="text-zinc-600">
          Recomendados
        </option>
        <option value="price_desc" className="text-zinc-600">
          Mayor precio
        </option>
        <option value="price_asc" className="text-zinc-600">
          Menor precio
        </option>
        <option value="rating" className="text-zinc-600">
          Mejor puntuación
        </option>
      </select>
    </div>
  );
};

export default OrderSelect;
