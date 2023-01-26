import DashboardLayout from "../../components/Elements_Dashboard/DashboardLayout";
import Chart from "chart.js/auto";
import dashboardMiddleware from "../../utils/dashboardMiddleware";
import BarChart from "../../components/Elements_Dashboard/Performance/BarChart";
import LineChart from "../../components/Elements_Dashboard/Performance/LineChart";
import PieChart from "../../components/Elements_Dashboard/Performance/PieChart";
import { useGetCompanyQuery } from "../../redux/companyApi";
import { useSelector } from "react-redux";

const Performance = () => {
  const account = useSelector((state) => state.account?.session);
  const { isLoading, data: company } = useGetCompanyQuery(account.email);

  const days = company?.transactions.map((t) => {
    return {
      date: new Date(t.createdAt).getDay(),
      bill: t.product.price * t.productAmount,
    };
  });
  const months = company?.transactions.map((t) => {
    return {
      date: new Date(t.createdAt).getMonth(),
      bill: t.product.price * t.productAmount,
    };
  });
  const years = company?.transactions.map((t) => {
    return {
      date: new Date(t.createdAt).getFullYear(),
      bill: t.product.price * t.productAmount,
    };
  });

  return (
    <DashboardLayout>
      <div className="grid gap-10 place-items-center">
        <div className="w-[320px] md:w-[720px] lg:w-[920px]">
          <BarChart days={days} />
        </div>
        <div className="w-[320px] md:w-[720px] lg:w-[920px]">
          <LineChart months={months} />
        </div>
        <div className="w-[320px] md:w-[720px] mb-1 ">
          <PieChart years={years} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Performance;
export async function getServerSideProps(context) {
  return await dashboardMiddleware(context);
}
