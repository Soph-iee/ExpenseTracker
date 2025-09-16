// import { Doughnut, Bar } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";
// // import sourceData from "../data/sourceData.json";
// import ExpensesList from "../data/expense";
// const Test = () => {
//   const grouped = ExpensesList.reduce((acc, curr) => {
//     acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
//     return acc;
//   }, {});

//   const labels = Object.keys(grouped);
//   const data = Object.values(grouped);
//   console.log(ExpensesList);
//   console.log(labels, data);
//   return (
//     <div className="grid grid-flow-col grid-rows-2 gap-4 h-screen">
//       <div className="col-span-2 ">
//         <Bar
//           data={{
//             labels: labels.map((label) => label),
//             datasets: [
//               {
//                 label: "Expense",
//                 data: data.map((label) => label),
//                 backgroundColor: [
//                   "#444789",
//                   "#44eab9",
//                   "#92345a",
//                   "#33e456",
//                   "#455553",
//                 ],
//               },
//             ],
//           }}
//         />
//       </div>
//       <div className="col-span-1">02</div>
//       <div className="col-span-1 row-span-1">03</div>
//     </div>
//   );
// };

// export default Test;
