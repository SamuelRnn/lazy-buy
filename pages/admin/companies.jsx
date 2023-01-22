import React, { useState } from "react";
import AdminLayout from "../../components/Elements_Admin/AdminLayout";
import { Companies } from "../../components/Elements_Admin/Companies";
import adminMiddleware from "../../utils/adminMiddleware";
import { useGetCompaniesQuery } from "../../redux/companyApi";
import PaginationAdminProduct from "../../components/Elements_Admin/PaginationAdminProduct";

const Index = ({ user }) => {
  const [filt,setFilt] = useState({nth:"",pg:0})
  const { isLoading:load, data } = useGetCompaniesQuery(filt.pg);

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold tracking-wider text-fondo-300 capitalize text-center mb-10">
        Companies Information
      </h1>
      <br />

      <h2 className="text-lg font-bold text-slate-700">
        {!load && (!data.count? "No": data.count)} Companies
      </h2>
      
      <br />
      <div className="flex items-center justify-center">

      {!load && <PaginationAdminProduct page={data.count} setFilt={setFilt} pg={filt.pg}/>}
      </div>
      <br />  
      <div className="overflow-auto rounded-lg shadow md:block">
        {!load && <Companies data={data.data} />}
      </div>
    </AdminLayout>
  );
};
export default Index;
export async function getServerSideProps(context) {
  return await adminMiddleware(context);
}
