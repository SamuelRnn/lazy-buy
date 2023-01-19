import React from "react";
import AdminLayout from "../../components/Elements_Admin/AdminLayout";
import adminMiddleware from "../../utils/adminMiddleware";

const index = () => {
  return (
    <AdminLayout>
      <h1>Reviews</h1>
    </AdminLayout>
  );
};
export default index;
export async function getServerSideProps(context) {
  return await adminMiddleware(context);
}
