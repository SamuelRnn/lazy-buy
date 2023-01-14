import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import CreationForm from "../../components/Dashboard/Products/CreationForm";
import dashboardMiddleware from "../../utils/dashboardMiddleware";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  useGetCompanyQuery,
  useLazyGetCompanyPlanQuery,
} from "../../redux/companyApi";
import Spinner from "../../components/Spinners/Spinner";

const Products = ({ company: { email } }) => {
  const { isFetching, data: company } = useGetCompanyQuery(email);
  const [fetchCompany, { data: plan }] = useLazyGetCompanyPlanQuery();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (company) {
      fetchCompany(company.plan);
    }
  }, [company]);

  return (
    <DashboardLayout>
      <AnimatePresence>
        {active && <CreationForm setActive={setActive} />}
      </AnimatePresence>
      <div className="bg-zinc-100">
        <div className="flex justify-between">
          <h2>Header</h2>
          <button
            onClick={() => {
              setActive(true);
              document.body.style.overflow = "hidden";
            }}
            className="py-3 bg-fondo-300 text-zinc-100 px-2 rounded-md"
          >
            Create Product
          </button>
        </div>
        {/* products */}
        {isFetching && <Spinner />}
        {company &&
          company.products.map((item) => <div key={item.id}>{item.name}</div>)}
      </div>
    </DashboardLayout>
  );
};

export default Products;

export async function getServerSideProps(context) {
  return await dashboardMiddleware(context);
}
