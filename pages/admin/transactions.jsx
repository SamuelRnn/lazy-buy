import React from "react";
import AdminLayout from "../../components/Elements_Admin/AdminLayout";
import { Transactions } from "../../components/Elements_Admin/Transactions";
import adminMiddleware from "../../utils/adminMiddleware";
import { useGetTransactionsQuery } from "../../redux/transactionApi";

const Index = () => {
  const { isLoading, data: transactions } = useGetTransactionsQuery();
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold tracking-wider text-fondo-300 capitalize text-center mb-10">
        Transactions Information
      </h1>
      <br />

      <h2 className="text-lg font-bold text-slate-700">
        {transactions && transactions.length} Transactions
      </h2>

      <br />
      <div className="overflow-auto rounded-lg shadow md:block">
        <Transactions transactions={transactions} />
      </div>
    </AdminLayout>
  );
};
export default Index;
export async function getServerSideProps(context) {
  return await adminMiddleware(context);
}
