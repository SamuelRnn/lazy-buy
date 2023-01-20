import React from "react";
import AdminLayout from "../../components/Elements_Admin/AdminLayout";
import adminMiddleware from "../../utils/adminMiddleware";

const Index = ({ user }) => {
  return (
    <AdminLayout>
      <h1>Home</h1>
    </AdminLayout>
  );
};
export default Index;
export async function getServerSideProps(context) {
  return await adminMiddleware(context);
}
