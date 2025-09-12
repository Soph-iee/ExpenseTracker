import { FaCalendar, FaMinus, FaPlus } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import type { ButtonsItem } from "../type";

const Buttons: ButtonsItem[] = [
  { id: 1, value: 7, label: 7 },
  { id: 2, value: 8, label: 8 },
  { id: 3, value: 9, label: 9 },
  { id: 4, value: "date", label: FaCalendar },
  { id: 5, value: 4, label: 4 },
  { id: 6, value: 5, label: 5 },
  { id: 7, value: 6, label: 6 },
  { id: 8, value: "+", label: FaPlus },
  { id: 9, value: 1, label: 1 },
  { id: 10, value: 2, label: 2 },
  { id: 11, value: 3, label: 3 },
  { id: 12, value: "-", label: FaMinus },
  { id: 13, value: ".", label: "." },
  { id: 14, value: 0, label: 0 },
  { id: 15, value: "delete", label: FaDeleteLeft },
  { id: 16, value: "action", label:'action' },
];
export default Buttons;
