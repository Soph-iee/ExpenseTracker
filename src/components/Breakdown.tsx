import Category from "../data/category";
import type { CategoryItem } from "../type";
import type { ExpenseListProps } from "../type";

const Breakdown = ({
  expenseList,
}: ExpenseListProps & {
  icons?: CategoryItem[];
}) => {
  return (
    <section className=" w-full shadow-lg text-gray-700">
      <p className="pl-3 font-bold text-lg">Expenses</p>
      <div className=" bg-gradient-to-bl fromblue-50  to-blue-100 p-4 rounded-lg shadow-lg">
        {expenseList.map((item) => {
          return <Expense key={item.id} {...item} icons={Category} />;
        })}
      </div>
    </section>
  );
};

type ExpenseItem = { category: string; amount: number; description: string };

type ExpensesProps = ExpenseItem & {
  icons: CategoryItem[];
};
const Expense = ({ category, description, amount, icons }: ExpensesProps) => {
  return (
    <div className="flex justify-between mb-3 text-base h-auto ">
      <p className="category">
        {icons.map((item, index) => {
          if (item.category === category) {
            return (
              <span
                key={index}
                className="h-10 w-10 border border-gray-400 rounded-full bg-blue-200 flex items-center justify-center"
              >
                {
                  <item.icon className="text-xl text-gray-800 place-self-center " />
                }
              </span>
            );
          }
        })}
      </p>
      <p className="description text-lg">{description}</p>
      <p className="amount">{amount}</p>
    </div>
  );
};

export default Breakdown;
