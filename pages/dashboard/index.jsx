import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import { motion } from "framer-motion";
import dashboardMiddleware from "../../utils/dashboardMiddleware";

const Home = ({ company }) => {
  console.log(company);
  return (
    <DashboardLayout>
      <motion.div
        initial={{ x: -400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 400, opacity: 0 }}
        className="bg-zinc-200 min-h-screen"
      >
        <div>
          <h1>Home</h1>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default Home;
export async function getServerSideProps(context) {
  return await dashboardMiddleware(context);
}
