import { farmTypeColors } from "./eums";

export type FarmType = {
  name: string;
  location: string;
  type: "poultry" | "crop";
};
