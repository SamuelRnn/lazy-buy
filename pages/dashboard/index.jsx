import { motion } from "framer-motion";
import { getSession } from "next-auth/react";
import DashboardLayout from "../../components/Dashboard/Layout";

const Home = ({ company }) => {
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
  //TODO: move logic to redux Api
  const { req } = context;
  const session = await getSession({
    req,
  });

  let dataCompany;
  let company;

  // if user isn't is auth
  if (!session) return { redirect: { destination: "/", permanent: false } };

  await fetch(`http://localhost:3000/api/get/company`)
    .then((res) => res.json())
    .then((data) => (dataCompany = data));

  dataCompany.forEach((c) => {
    if (c.email === session.user.email) return (company = c);
  });
  //console.log(company.products)
  // if user is is auth
  return {
    props: { company },
  };
}
