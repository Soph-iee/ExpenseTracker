import type { IconType } from "react-icons";

export type ButtonsItem = {
  id: number;
  value: string | number;
  label: string | number | IconType;
  type?:string
};
