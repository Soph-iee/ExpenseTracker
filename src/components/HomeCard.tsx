import { FaWallet } from "react-icons/fa";
import { FaNairaSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
type Cardprops = {
  title: string;
  amount: string;
  bg?: string;
  text?: string;
  link:string
};
const HomeCard = ({
  title,
  amount,
  bg = "bg-white",
  text = "text-blue-950",
  link,
}: Cardprops) => {
  return (
    <Link to={link}>
      <div
        className={`p-6 ${bg} shadow-lg capitalize flex flex-col items-center rounded-xl flex-1 ${text} cursor-pointer hover:scale-105 transition-all duration-300`}
      >
        <FaWallet />
        <p>{title}</p>
        <h3 className="flex items-center font-bold text-lg">
          <FaNairaSign />
          {amount}
        </h3>
      </div>
    </Link>
  );
};

export default HomeCard;
