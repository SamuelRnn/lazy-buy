import React, { useState } from "react";
import AdminLayout from "../../components/Elements_Admin/AdminLayout";
import ProductComponent from "../../components/Elements_Admin/ProductComponent";
import { useGetAllProductsQuery } from "../../redux/productsApi";
import adminMiddleware from "../../utils/adminMiddleware";

const Index = () => {
  const [filt, setFilt] = useState({one:"",two:""});
  const { data, isLoading } = useGetAllProductsQuery(filt);

  const handleChange = ({ target: { value } }) => {
    setFilt(state => ({...state,one:value}));
  };

  const handleChangeTwo = ({target:{value}}) => {
    setFilt(state => ({...state,two:value}));
  }
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold tracking-wider text-fondo-300 capitalize text-center mb-10">
        Products Information
      </h1>
      <br />
      <div className="flex flex-row items-center justify-between pr-5">
        <div>
          <h2 className="text-lg font-bold text-slate-700">
            {data && data.length} Products
          </h2>
        </div>
        <div className="flex flex-row items-center justify-center gap-4 ">
          <h2 className="text-lg font-bold text-slate-700">Filters :</h2>
          <select className="filter_btn" onChange={handleChangeTwo}>
            <option value="All">All</option>
            <option value="true" >Active</option>
            <option value="false">Banned</option>
          </select>
          <select className="filter_btn" onChange={handleChange}>
            <option value="All">All Products</option>
            <option value="Electronics">Electronics</option>
            <option value="Handicraft">Handicraft</option>
            <option value="Textile">Textile</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>
      </div>

      <br />
      <div className="overflow-auto rounded-lg shadow md:block">
        <ProductComponent data={data} />
      </div>
      <br />
    </AdminLayout>
  );
};
export default Index;
export async function getServerSideProps(context) {
  return await adminMiddleware(context);
}
