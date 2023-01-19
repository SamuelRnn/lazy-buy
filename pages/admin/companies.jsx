import React from "react";
import AdminLayout from "../../components/Elements_Admin/AdminLayout";
import { Companies } from "../../components/Elements_Admin/Companies";
import adminMiddleware from "../../utils/adminMiddleware";

const index = ({ user }) => {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold tracking-wider text-fondo-300 capitalize text-center mb-10">
        Companies Information
      </h1>

      <div className="overflow-auto rounded-lg shadow md:block">
        <Companies />
      </div>
    </AdminLayout>
  );
};
export default index;
export async function getServerSideProps(context) {
  return await adminMiddleware(context);
}
