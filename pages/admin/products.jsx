import React from "react";
import AdminLayout from "../../components/Elements_Admin/AdminLayout";
import ProductComponent from "../../components/Elements_Admin/ProductComponent";
import { useGetAllProductsQuery } from "../../redux/productsApi";
import adminMiddleware from "../../utils/adminMiddleware";

const Index = () => {
  const {data, isLoading} = useGetAllProductsQuery()
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold tracking-wider text-fondo-300 capitalize text-center mb-10">
        Products Information
      </h1>
      <br />

      <h2 className="text-lg font-bold text-slate-700">
        {data && data.length} Products
      </h2>

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
