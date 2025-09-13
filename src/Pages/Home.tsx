import Breakdown from "../components/Breakdown";
import TotalExpense from "../components/TotalExpense";

import type { ExpenseListProps } from "../type";

const Home = ({ expenseList }: ExpenseListProps) => {
  return (
    <main className="flex flex-col mx-4 justify-center rounded-lg">
      <div className="w=11/12 py-4 shadow-md">
        <TotalExpense expenseList={expenseList} />
        <Breakdown expenseList={expenseList} />
      </div>
    </main>
  );
};

export default Home;
