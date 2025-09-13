import { useState, type Dispatch, type SetStateAction } from "react";
import type { CategoryItem} from "../type";
import type { Expense } from "../type";

type ExpenseCategoryProps = {
  Category: CategoryItem[];
  setNewExpense: Dispatch<SetStateAction<Expense>>;
};
const ExpenseCategory = ({ Category, setNewExpense }: ExpenseCategoryProps) => {
  const [activeBtn, setActiveBtn] = useState('');
  const handleClick = (id:string) => {
    setActiveBtn(id);
    // console.log(id);
    // console.log(activeBtn);
  };
  return (
    <div>
      <section className="category grid grid-cols-4 py-8 px-4 gap-y-5">
        {Category.map((item) => {
          return (
            <p
              key={item.id}
              onClick={() => {
                setNewExpense((prev) => ({ ...prev, category: item.category }));
                handleClick(item.category);
              }}
              className="text-xs capitalize items-center flex flex-col text-gray-800 "
            >
              <span
                className={`text-xl  h-10 w-10 flex items-center justify-center rounded-full ${
                  item.category === activeBtn
                    ? "text-white bg-blue-800"
                    : "text-blue-800 bg-blue-100"
                }`}
              >
                <item.icon />
              </span>
              {item.category}
            </p>
          );
        })}
      </section>
    </div>
  );
};

export default ExpenseCategory;
