import { FaPlus, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex p-4 items-center list-none shadow-md sticky top-0 justify-between uppercase text-blue-950 z-100 bg-blue-50 w-full">
      <Link to="/">
        <li className="font-mono font-bold  bg-linear-to-r from-blue-800 to-blue-950 bg-clip-text text-transparent">
          FINANCE TRACKER
        </li>
      </Link>
      <div className="flex gap-2">
        <FaUser />
        <Link to="/new">
          <FaPlus />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

{
  /* <p class="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent ..."> */
}
