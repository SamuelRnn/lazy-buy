import { motion } from "framer-motion";
import DashboardLayout from "../../components/DashBoard/Layout";
import { getSession } from "next-auth/react";

const Account = ({ company }) => {
  return (
    <DashboardLayout>
      <motion.div
        initial={{ x: -400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 400, opacity: 0 }}
      >
        <h1>Account</h1>
        <div className="mt-10">
          <h2>{company.owner}</h2>
          <p>{company.country}</p>
          <picture>
            <img src={company.profilePicture.url} alt={company.name} />
          </picture>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default Account;

export async function getServerSideProps(context) {
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
