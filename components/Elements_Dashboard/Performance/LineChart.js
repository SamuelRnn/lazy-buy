import { Line } from "react-chartjs-2";

const LineChart = ({ months }) => {
  const monthsAux = [];

  months?.forEach((e, i) => {
    if (monthsAux[e.date]) monthsAux[e.date] += e.bill;
    else monthsAux[e.date] = e.bill;
  });
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Monthly payments",
        backgroundColor: "rgb(71 85 105)",
        data: [...monthsAux],
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
      <Line data={data} options={options} className="m-0" />
    </div>
  );
};

export default LineChart;
