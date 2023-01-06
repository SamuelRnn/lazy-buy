import Layout from "../../components/DashBoard/Layout";

const Dashboard = () => {
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
