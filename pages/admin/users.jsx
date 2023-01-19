import React from "react";
import AdminLayout from "../../components/Elements_Admin/AdminLayout";
import UserComponent from "../../components/Elements_Admin/UserComponent";
import adminMiddleware from "../../utils/adminMiddleware";

const Index = () => {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold tracking-wider text-fondo-300 capitalize text-center mb-10">
        Users Information
      </h1>
      <br />
      
      
        <UserComponent />
     
    </AdminLayout>
  );
};
export default Index;
export async function getServerSideProps(context) {
  return await adminMiddleware(context);
}
