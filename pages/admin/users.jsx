import React, { useState } from "react";
import AdminLayout from "../../components/Elements_Admin/AdminLayout";
import PaginationAdminProduct from "../../components/Elements_Admin/PaginationAdminProduct";
import UserComponent from "../../components/Elements_Admin/UserComponent";
import { useGetUserListQuery } from "../../redux/userApi";
import adminMiddleware from "../../utils/adminMiddleware";

const Index = () => {
  const [filt,setFilt] = useState({nd:"",pg:0})
  const { data, isLoading: load } = useGetUserListQuery(filt.pg);

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold tracking-wider text-fondo-300 capitalize text-center mb-10">
        Users Information
      </h1>
      <br />
      <h2 className="text-lg font-bold text-slate-700">
        {!load && (!data.count ? "No" : data.count)} Users
      </h2>
      <br />
      <div className="flex items-center justify-center">
        {!load && <PaginationAdminProduct page={data.count} setFilt={setFilt} pg={filt.pg} />}
      </div>
      <br />
      <div className="overflow-auto rounded-lg shadow md:block">
        {!load && <UserComponent data={data.data} />}
      </div>
      <br />
    </AdminLayout>
  );
};
export default Index;
export async function getServerSideProps(context) {
  return await adminMiddleware(context);
}
