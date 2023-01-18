import DashboardLayout from "../../components/Elements_Dashboard/DashboardLayout";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import dashboardMiddleware from "../../utils/dashboardMiddleware";

const Performance = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Bill",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [1, 10, 5, 2, 13, 21, 11],
      },
    ],
  };
  const options = {
    mainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      labels: {
        fontSize: 22,
      },
    },
  };

  return (
    <DashboardLayout>
      <div>
        {/* <Bar data={data} options={options} height={200} /> */}
        Chart
      </div>
    </DashboardLayout>
  );
};

export default Performance;
export async function getServerSideProps(context) {
  return await dashboardMiddleware(context);
}
