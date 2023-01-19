import React from "react";
import AdminLayout from "../../components/Elements_Admin/AdminLayout";
import UserComponent from "../../components/Elements_Admin/UserComponent";
import { useGetUserListQuery } from "../../redux/userApi";
import adminMiddleware from "../../utils/adminMiddleware";

const Index = () => {
  const { data, isLoading } = useGetUserListQuery();

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold tracking-wider text-fondo-300 capitalize text-center mb-10">
        Users Information
      </h1>
      <br />
      <h2 className="text-lg font-bold text-slate-700">
        {data && data.length} Users
      </h2>
      <br />
      <div className="overflow-auto rounded-lg shadow md:block">
        <UserComponent />
      </div>
    </AdminLayout>
  );
};
export default Index;
export async function getServerSideProps(context) {
  return await adminMiddleware(context);
}
