import Layout from "../../components/MainLayout";
import Card from "../../components/Elements_Cards/Card";
import Spinner from "../../components/Spinners/Spinner";
import ModalFilters from "../../components/Elements_Filters/ModalFilters";
import OrderSelect from "../../components/Elements_Filters/OrderSelect";
import MiniSpinner from "../../components/Spinners/MiniSpinner";
import Pagination from "../../components/Elements/Pagination";
import { useEffect, useState } from "react";
import { IoMdOptions } from "react-icons/io";
import { useGetProductsQuery } from "../../redux/productsApi";
import camelize from "../../utils/camelize";
import { useDispatch, useSelector } from "react-redux";
import { getPage, setPage } from "../../redux/productsSlice";
import { getPrevFilters, setPrevFilters } from "../../redux/productsSlice";

const Store = (initialParams) => {
  const prevFilters = useSelector(getPrevFilters);
  const selectedPage = useSelector(getPage);
  const dispatch = useDispatch();
  const [filters, setFilters] = useState(
    prevFilters || {
      ...initialParams,
      page: selectedPage,
    }
  );
  const [activeFiltersModal, setActiveFiltersModal] = useState(false);
  const {
    isFetching,
    isLoading,
    data: productos,
  } = useGetProductsQuery(filters);

  useEffect(() => {
    return () => {
      dispatch(setPage(filters.page));
      dispatch(setPrevFilters(filters));
    };
  });
  return (
    <>
      <Layout>
        <section className="main">
          <div className="mt-4 flex justify-between items-center gap-6 max-sm:flex-col max-sm:">
            {initialParams.search && (
              <h2 className="text-lg text-fondo-300 font-medium max-sm:self-start transition-all align-middle">
                {productos ? productos.count : <MiniSpinner />}
                {` result(s) for "${initialParams.search}"`}
              </h2>
            )}
            {initialParams.category && (
              <h2 className="text-lg text-fondo-300 font-bold max-sm:self-start transition-all align-middle">
                {`${camelize(initialParams.category)} `}
                {productos ? `(${productos.count})` : <MiniSpinner />}
              </h2>
            )}
            <div className="flex gap-4 max-sm:w-full max-sm:justify-between">
              <button
                onClick={() => setActiveFiltersModal((state) => !state)}
                className="filter_btn"
                disabled={!productos?.count}
              >
                <p>Filters</p>
                <IoMdOptions />
              </button>
              {/* select filters */}
              <OrderSelect
                setFilters={setFilters}
                disabled={!productos?.count}
              />
            </div>
          </div>
          <hr className="my-4" />
          <div className="bg-zinc-100 w-full rounded-xl mt-6 mb-12">
            <div className="flex flex-col gap-y-10 items-center py-10 min-h-[164px] justify-center overflow-hidden ">
              {/* pagination */}
              {productos && !isLoading && (
                <Pagination
                  count={productos.count}
                  setFilters={setFilters}
                  filters={filters}
                />
              )}
              {isFetching && <Spinner />}
              {productos &&
                !isFetching &&
                productos.results.map((product, index) => (
                  <Card
                    key={product.id}
                    style="wider"
                    product={product}
                    delay={index}
                  />
                ))}
            </div>
          </div>
        </section>
        {/* query filters */}
        <ModalFilters
          active={activeFiltersModal}
          setActive={setActiveFiltersModal}
          setActiveFiltersModal={setActiveFiltersModal}
          setFilters={setFilters}
        />
      </Layout>
    </>
  );
};

export default Store;

export async function getServerSideProps({ query }) {
  return {
    props: {
      search: query.search || null,
      category: query.category || null,
    },
  };
}
