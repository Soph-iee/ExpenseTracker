type Itemprops = {
  item: {
    date: string;
    category: string;
    amount: string;
    description: string;
  };
};

const itemDetails = ({ item }: Itemprops) => {
  return (
    <div className="flex flex-col items-center justify-between gap-3 txet-lg text-gray-600">
      <p>
        <span> Date:</span>
        {item.date}
      </p>
      <p>
        <span> Catgory:</span>
        {item.category}
      </p>
      <p>
        <span> Amount:</span>
        {item.amount}
      </p>
      <p>
        <span> Description:</span>
        {item.description}
      </p>
    </div>
  );
};

export default itemDetails;
