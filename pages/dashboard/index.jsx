import DashboardLayout from "../../components/Elements_Dashboard/DashboardLayout";
import { motion } from "framer-motion";
import dashboardMiddleware from "../../utils/dashboardMiddleware";
import HomeHeader from "../../components/Elements_Dashboard/HomeHeader";

const Home = ({ company }) => {
  console.log(company);
  return (
    <DashboardLayout>
      <div>
        <HomeHeader />
      </div>
    </DashboardLayout>
  );
};

export default Home;
export async function getServerSideProps(context) {
  return await dashboardMiddleware(context);
}
