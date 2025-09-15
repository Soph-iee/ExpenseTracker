import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./Pages/Nav";
import New from "./Pages/New";
import { useState } from "react";
import ExpensesList from "./data/expense";
import "./index.css";
// import Test from "./Pages/calculator";

function App() {
  const [expenseList, setExpenseList] = useState(ExpensesList);

  return (
    <div className="max-w-[500px] h-screen mx-auto ">
      <Nav />
      {/* <Test/> */}
      <Routes>
        <Route path="/" element={<Home expenseList={expenseList} />} />
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
