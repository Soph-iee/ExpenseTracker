import { FaWallet } from "react-icons/fa";
import { FaNairaSign } from "react-icons/fa6";
type Cardprops = {
  title: string;
  amount: string;
  bg?: string;
  text?: string;
};
const HomeCard = ({
  title,
  amount,
  bg = "bg-white",
  text = "text-blue-950",
}: Cardprops) => {
  return (
    <div
      className={`p-6 ${bg} shadow-lg capitalize flex flex-col items-center rounded-xl flex-1 ${text}`}
    >
      <FaWallet />
      <p>{title}</p>
      <h3 className="flex items-center font-bold text-lg">
        <FaNairaSign />
        {amount}
      </h3>
    </div>
  );
};

export default HomeCard;
