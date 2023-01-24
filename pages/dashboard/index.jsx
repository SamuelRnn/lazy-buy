import DashboardLayout from "../../components/Elements_Dashboard/DashboardLayout";
import { motion } from "framer-motion";
import dashboardMiddleware from "../../utils/dashboardMiddleware";
import HomeHeader from "../../components/Elements_Dashboard/HomeHeader";
import DashboardNav from "../../components/Elements_Dashboard/DashboardNav";

const Home = ({ company }) => {
  return (
    <DashboardLayout>
      <div>
        <DashboardNav/>
        <HomeHeader />
      </div>
    </DashboardLayout>
  );
};

export default Home;
export async function getServerSideProps(context) {
  return await dashboardMiddleware(context);
}
