import HomeCard from "./HomeCard";

const TotalExpense = ({ expenseList }) => {
  const Total = expenseList.reduce((sum, item) => sum + Number(item.amount), 0);
  return (
    <section className="p-8  bg-gradient-to-bl fromblue-50  to-blue-100 flex gap-6  justify-center items-center ">
      <HomeCard title="savings" amount="300" />
      <HomeCard
        title="expense"
        amount={Total}
        bg="bg-blue-800"
        text="text-blue-100"
      />
      <HomeCard title="money" amount="30,000" />
    </section>
  );
};

export default TotalExpense;
 