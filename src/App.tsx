import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./Pages/Nav";
import New from "./Pages/New";
import { useState } from "react";
import ExpensesList from "./data/expense";
import "./index.css";
// import Test from "./Pages/calculator";

import ExpenseChart from "./components/ExpenseChart";

function App() {
  const [expenseList, setExpenseList] = useState(ExpensesList);

  return (
    <div className="max-w-[500px] h-auto mx-auto ">
      <Nav />

      <Routes>
        <Route path="/" element={<Home expenseList={expenseList} />} />
        <Route path="/expense" element={<ExpenseChart expenseList={expenseList} />} />
        <Route
          path="/new"
          element={
            <New setExpenseList={setExpenseList} expenseList={expenseList} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
