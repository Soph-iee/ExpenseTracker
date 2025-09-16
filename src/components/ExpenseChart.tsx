import { Bar } from "react-chartjs-2";
// import ExpensesList from "../data/expense";
import type { ExpenseListProps } from "../type";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);


type GroupedDataProps = Record<string, number>;

const ExpenseChart = ({ expenseList }: ExpenseListProps) => {
  // const [view, setView] = useState(Bar);

  const groupedData = expenseList.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
    return acc;
  }, {} as GroupedDataProps);

  const labels = Object.keys(groupedData);
  const data = Object.values(groupedData);
  console.log(labels, data);

  return (
    <div className="text-center font-bold text-gray-600 ">
      <button className="border border-blue-200 text-xs  my-5  py-1 px-2 rounded-xl bg-blue-200 ">
        ChangeView
      </button>
      <h1> A chart of your expense</h1>
      <Bar
        data={{
          labels: labels.map((label) => label),
          datasets: [
            {
              label: "Expense Chart",
              data: data.map((label) => label),
              // backgroundColor: [
              //   "#323eee",
              //   "#444789",
              //   "#44eab9",
              //   "#92345a",
              //   "#33e456",
              //   "#455553",
              // ],
            },
          ],
        }}
      />
    </div>
  );
};

export default ExpenseChart;
