
import {
  FaCar,
  FaHospital,
  FaMobile,
  FaShoppingCart,
  FaUtensils,
} from "react-icons/fa";
import { FaHouse, FaPeopleGroup, FaShirt } from "react-icons/fa6";
import type { CategoryItem } from "../type";
const Category: CategoryItem[] = [
  { category: "food", icon: FaUtensils, id: 1 },
  { category: "shopping", icon: FaShoppingCart, id: 2 },
  { category: "calls&Data", icon: FaMobile, id: 3 },
  { category: "Housing", icon: FaHouse, id: 4 },
  { category: "Friends", icon: FaPeopleGroup, id: 5 },
  { category: "health", icon: FaHospital, id: 6 },
  { category: "Transportation", icon: FaCar, id: 7 },
  { category: "clothing", icon: FaShirt, id: 8 },
  //   { category: "food", icon: FaUtensils, id: 9 },
];

export default Category;
