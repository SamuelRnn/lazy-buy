import { Pie } from "react-chartjs-2";

const PieChart = ({ years }) => {
  const yearsAux = [];
  let yearsLabel = years?.map((y) => y.date);
  yearsLabel = new Set(yearsLabel);
  yearsLabel = Array.from(yearsLabel);

  years?.forEach((e, i) => {
    if (yearsAux[e.date]) yearsAux[e.date] += e.bill;
    else yearsAux[e.date] = e.bill;
  });
  const data = {
    labels: [...yearsLabel],
    datasets: [
      {
        label: "Yearly payments",
        backgroundColor: ["rgba(75,55,100,1)"],
        data: [...yearsAux],
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
      <Pie data={data} options={options} className="m-0" />
    </div>
  );
};

export default PieChart;
