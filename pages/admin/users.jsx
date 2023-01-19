import React from "react";
import AdminLayout from "../../components/Elements_Admin/AdminLayout";
import { useGetUserListQuery } from "../../redux/userApi";
import adminMiddleware from "../../utils/adminMiddleware";

const index = () => {
  const {data , isLoading} = useGetUserListQuery()
console.log(data)
  return (
    <AdminLayout>
      <h1>Users</h1>
    </AdminLayout>
  );
};
export default index;
export async function getServerSideProps(context) {
  return await adminMiddleware(context);
}
