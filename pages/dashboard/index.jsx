import Layout from "../../components/DashBoard/Layout";
import { useSession, getSession } from "next-auth/react";
import Products from "../../components/DashBoard/views/Products";
import Performance from "../../components/DashBoard/views/Performance";
import { useEffect, useState } from "react";
import Home from "../../components/DashBoard/views/Home";
import Account from "../../components/DashBoard/views/Account";
import Plan from "../../components/DashBoard/views/Plan";

const Dashboard = ({ company }) => {
  const [active, setActive] = useState({
    home: true,
    account: false,
    products: false,
    performance: false,
    plan: false,
  });

  return (
    <Layout setActive={setActive}>
      <Home isActive={active} company={company} />
      <Account isActive={active} company={company} />
      <Products isActive={active} company={company} />
      <Performance isActive={active} />
      <Plan isActive={active} company={company} />
    </Layout>
  );
};

export default Dashboard;

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
