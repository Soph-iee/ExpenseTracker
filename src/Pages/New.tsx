import Keyboard from "../components/Keyboard";
import Category from "../data/category";

import { useState, useRef, useEffect } from "react";
import ExpenseCategory from "../components/ExpenseCategory";
import { useNavigate } from "react-router-dom";
import type { Expense } from "../type";
import type { ExpenseListProps } from "../type";

const New = ({ setExpenseList }: ExpenseListProps) => {
  const id = Date.now();
  const navigate = useNavigate();
  const dateInputRef = useRef<HTMLInputElement>(null);

  const [newExpense, setNewExpense] = useState<Expense>({
    id: 0,
    description: "",
    amount: 0,
    category: "",
    date: "",
  });
  const [input, setInput] = useState("");
  const [, setResult] = useState("");
  const operators = ["+", "-"];

  function isExpression(value: string) {
    return /[+\-*/]/.test(value);
  }

  useEffect(() => {
    if (
      newExpense.date !== "" &&
      newExpense.amount !== 0 &&
      newExpense.category !== "" &&
      newExpense.id !== 0
    ) {
      console.log(newExpense);
      setExpenseList?.((prev) => [...prev, newExpense]);
      navigate("/");
    }
  }, [newExpense]);

  //   Calculator function
  const handleNumberPress = (val: number | string) => {
    // evaluating the expression
    if (val === "action") {
      if (isExpression(input)) {
        try {
          const evalResult = eval(input);
          setResult(evalResult);
          setInput(evalResult.toString());
        } catch {
          console.log("error");
          setResult("error");
          setInput("Error");
        }
      } else if (!isNaN(Number(input)) && input.trim() !== "") {
        setNewExpense((prev) => ({ ...prev, amount: Number(input) }));
        setNewExpense((prev) => ({ ...prev, id: id }));
      }
    } else if (val === "date") {
      dateInputRef.current?.showPicker();
    } else if (val === "delete") {
      const newNumber = input.slice(0, -1);
      setInput(newNumber);
    } else if (operators.includes(val.toString())) {
      if (operators.includes(input.slice(-1))) {
        setInput((prev) => prev.slice(0, -1) + val);
      } else if (input !== "") {
        setInput((prev) => prev + val);
      }
    } else setInput((prev) => prev + val);
  };
  //this function checks if the string in the input feild is an arithmetic exp/number

  return (
    <div>
      <ExpenseCategory Category={Category} setNewExpense={setNewExpense} />

      <form action="" className="w-11/12 mx-auto flex flex-col gap-3">
        <div>
          <label htmlFor="amount"></label>
          <input
            type="text"
            id="amount"
            value={input}
            readOnly
            className=" bg-blue-100 p-2 w-full rounded-xl  text-lg font-bold text-blue-950 outline-gray-300"
            placeholder="Enter Amount"
          />
        </div>
        <div>
          <label htmlFor="description"></label>
          <input
            type="text"
            id="description"
            name="description"
            className=" bg-blue-100 p-2 w-full rounded-xl 
            text-blue-950 outline-gray-300"
            onChange={(e) => {
              const description = e.target.value;
              setNewExpense((prev) => ({ ...prev, description: description }));
              console.log(description);
            }}
            placeholder="Enter Description..."
          />
        </div>
        <Keyboard
          handleNumberPress={handleNumberPress}
          setNewExpense={setNewExpense}
          dateInputRef={dateInputRef}
          isExpression={isExpression}
          input={input}
        />
      </form>
    </div>
  );
};

export default New;
