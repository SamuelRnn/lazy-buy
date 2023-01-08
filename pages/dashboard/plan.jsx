import DashboardLayout from "../../components/DashBoard/Layout";
import { getSession } from "next-auth/react";
const Plan = ({ company }) => {
  return (
    <DashboardLayout>
      <div>
        <h1 className="font-bold">{company.plan}</h1>
      </div>
    </DashboardLayout>
  );
};

export default Plan;

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
