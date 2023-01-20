import React from "react";
import AdminLayout from "../../components/Elements_Admin/AdminLayout";
import { Companies } from "../../components/Elements_Admin/Companies";
import adminMiddleware from "../../utils/adminMiddleware";
import { useGetCompaniesQuery } from "../../redux/companyApi";

const Index = ({ user }) => {
  const { isLoading, data } = useGetCompaniesQuery();

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold tracking-wider text-fondo-300 capitalize text-center mb-10">
        Companies Information
      </h1>
      <br />

      <h2 className="text-lg font-bold text-slate-700">
        {data && data.length} Companies
      </h2>
      
      <br />
      <div className="overflow-auto rounded-lg shadow md:block">
        <Companies data={data} />
      </div>
    </AdminLayout>
  );
};
export default Index;
export async function getServerSideProps(context) {
  return await adminMiddleware(context);
}
