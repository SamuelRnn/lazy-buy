import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import { motion } from "framer-motion";
import dashboardMiddleware from "../../utils/dashboardMiddleware";
import HomeHeader from "../../components/DashBoard/HomeHeader";

const Home = ({ company }) => {
  console.log(company);
  return (
    <DashboardLayout>
      <motion.div
        initial={{ x: -400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 400, opacity: 0 }}
        className="bg-fondo-50 h-screen"
      >
        <HomeHeader/>
      </motion.div>
    </DashboardLayout>
  );
};

export default Home;
export async function getServerSideProps(context) {
  return await dashboardMiddleware(context);
}
