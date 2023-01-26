import { Bar } from "react-chartjs-2";

const BarChart = ({ days }) => {
  const daysAux = [];

  days?.forEach((e, i) => {
    if (daysAux[e.date]) daysAux[e.date] += e.bill;
    else daysAux[e.date] = e.bill;
  });

  const data = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Daily payments",
        backgroundColor: "rgb(255, 99, 132)",
        data: [...daysAux],
      },
    ],
  };
  const options = {
    maintainAspectRatio: true,
    responsive: true,
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
    <div>
      <Bar data={data} options={options} className="m-0" />
    </div>
  );
};

export default BarChart;
