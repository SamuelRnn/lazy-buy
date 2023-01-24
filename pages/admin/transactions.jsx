import React, { useState } from "react";
import AdminLayout from "../../components/Elements_Admin/AdminLayout";
import { Transactions } from "../../components/Elements_Admin/Transactions";
import adminMiddleware from "../../utils/adminMiddleware";
import { useGetTransactionsQuery } from "../../redux/transactionApi";
import PaginationAdminProduct from "../../components/Elements_Admin/PaginationAdminProduct";

const Index = () => {
  const [filt, setFilt] = useState({ nd: "", pg: 0 });
  const { isLoading: load, data } = useGetTransactionsQuery(filt.pg);
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold tracking-wider text-fondo-300 capitalize text-center mb-10">
        Transactions Information
      </h1>
      <br />

      <h2 className="text-lg font-bold text-slate-700">
        {!load && (!data.count ? "No" : data.count)} Transactions
      </h2>

      <br />
      <div className="flex items-center justify-center">
        {!load && (
          <PaginationAdminProduct
            setFilt={setFilt}
            page={data.count}
            pg={filt.pg}
          />
        )}
      </div>
      <br />
      <div className="overflow-auto rounded-lg shadow md:block">
        {!load && <Transactions transactions={data.data} />}
      </div>
      <br />
    </AdminLayout>
  );
};
export default Index;
export async function getServerSideProps(context) {
  return await adminMiddleware(context);
}
