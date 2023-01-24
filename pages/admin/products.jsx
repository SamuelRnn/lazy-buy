import React, { useState } from "react";
import AdminLayout from "../../components/Elements_Admin/AdminLayout";
import PaginationAdminProduct from "../../components/Elements_Admin/PaginationAdminProduct";
import ProductComponent from "../../components/Elements_Admin/ProductComponent";
import { useGetAllProductsQuery, useGetProductsQuery } from "../../redux/productsApi";
import adminMiddleware from "../../utils/adminMiddleware";

const Index = () => {
  const [filt, setFilt] = useState({one:"",two:"",pg:0});
  const { data, isLoading:load } = useGetAllProductsQuery(filt);
  //const {data:page,isLoading:load} = useGetProductsQuery({dash:true})
  const handleChange = ({ target: { value } }) => {
    setFilt(state => ({...state,one:value,pg:0}));
  };

  const handleChangeTwo = ({target:{value}}) => {
    setFilt(state => ({...state,two:value,pg:0}));
  }
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold tracking-wider text-fondo-300 capitalize text-center mb-10">
        Products Information
      </h1>
      <br />
      <div className="flex flex-row items-center flex-wrap justify-between pr-5">
        <div>
          <h2 className="text-lg font-bold text-slate-700">
            {!load && (data.count === 0?"No ":data.count)} Products
          </h2>
        </div>
        <div className="flex flex-row items-center justify-center gap-4 ">
          <h2 className="md:block hidden text-lg font-bold text-slate-700">Filters :</h2>
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
      <div className="flex items-center justify-center">

      {!load && <PaginationAdminProduct page={data.count} setFilt={setFilt} pg={filt.pg}/>}
      </div>
      <br />  
      <div className="overflow-auto rounded-lg shadow md:block">
      {!load && <ProductComponent data={data.productDash} />}
      </div>
      <br />
    </AdminLayout>
  );
};
export default Index;
export async function getServerSideProps(context) {
  return await adminMiddleware(context);
}
