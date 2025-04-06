import {
  faPlusCircle,
  faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";
// import { useMemo } from "react";

export const listOfContents = [
  "Summary",
  "Chart",
  "Statistics",
  "Analysis",
  "Settings",
];

export const actionBar = [
  {
    id: 1,
    name: "Full Screen",
    icon: faUpRightAndDownLeftFromCenter,
  },
  {
    id: 2,
    name: "Compare",
    icon: faPlusCircle,
  },
];

export const filters = ["1d", "3d", "1w", "1m", "6m", "1y", "max"];

export const endPrice = 63179.71;
