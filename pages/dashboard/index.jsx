import Layout from "../../components/DashBoard/Layout";
import { useSession, getSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();

  return (
    <Layout>
      <>
        <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>

        <div className="grid lg:grid-cols-3 gap-5 mb-16">
          <div className="rounded bg-gray-900 h-40 shadow-sm"></div>
          <div className="rounded bg-gray-900 h-40 shadow-sm"></div>
          <div className="rounded bg-gray-900 h-40 shadow-sm"></div>
        </div>
        <div className="grid col-1 bg-gray-900 h-96 shadow-sm"></div>
      </>
    </Layout>
  );
};

export default Dashboard;

// export async function getServerSideProps(context) {
//   const { req } = context;
//   const session = await getSession({
//     req,
//   });

//   // if user isn't is auth
//   if (!session)
//     return { redirect: { destination: "/login", permanent: false } };

//   // if user is is auth
//   return {
//     props: { session },
//   };
// }
