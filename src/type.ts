import type { Dispatch, SetStateAction } from "react";
import type { IconType } from "react-icons";

export type ButtonsItem = {
  id: number;
  value: string | number;
  label: string | number | IconType;
  type?: string;
};
export type Expense = {
  id: number;
  description: string;
  amount: number;
  category: string;
  date: string;
};
export type ExpenseListProps = {
  expenseList: Expense[];
  setExpenseList?: Dispatch<SetStateAction<Expense[]>>;
  // ExpensesList: Expense[];
};

export type CategoryItem = {
  id: number;
  category: string;
  icon: IconType;
};

// setExpenseList: Dispatch<SetStateAction<Expense[]>>;
