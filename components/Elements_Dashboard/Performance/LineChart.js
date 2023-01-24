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
        label: "Bill",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "black",
        data: [...monthsAux],
      },
    ],
  };
  const options = {
    mainAspectRatio: false,
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
