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

export const startPrice = Math.floor(Math.random() * 50000) + 10000;
export const endPrice = 63179.71;
export const priceChange = endPrice - startPrice;
export const percentageChange = ((priceChange / startPrice) * 100).toFixed(2);
export const priceChangeString =
  priceChange > 0 ? `+${priceChange.toFixed(2)}` : priceChange.toFixed(2);

// export const chartData = useMemo(() => [
//   { name: "Day 1", price: startPrice },
//   { name: "Day 2", price: Math.floor(Math.random() * 50000) + 10000 },
//   { name: "Day 3", price: Math.floor(Math.random() * 50000) + 10000 },
//   { name: "Day 4", price: Math.floor(Math.random() * 50000) + 10000 },
//   { name: "Day 5", price: Math.floor(Math.random() * 50000) + 10000 },
//   { name: "Day 6", price: Math.floor(Math.random() * 50000) + 10000 },
//   { name: "Day 7", price: Math.floor(Math.random() * 50000) + 10000 },
//   { name: "Day 8", price: Math.floor(Math.random() * 50000) + 10000 },
//   { name: "Day 9", price: Math.floor(Math.random() * 50000) + 10000 },
//   { name: "Day 10", price: Math.floor(Math.random() * 50000) + 10000 },
//   { name: "Day 11", price: Math.floor(Math.random() * 50000) + 10000 },
//   { name: "Day 12", price: Math.floor(Math.random() * 50000) + 10000 },
//   { name: "Day 13", price: Math.floor(Math.random() * 50000) + 10000 },
//   { name: "Day 14", price: Math.floor(Math.random() * 50000) + 10000 },
//   { name: "Day 15", price: Math.floor(Math.random() * 50000) + 10000 },
//   { name: "Day 16", price: Math.floor(Math.random() * 50000) + 10000 },
//   { name: "Day 17", price: Math.floor(Math.random() * 50000) + 10000 },
//   { name: "Day 18", price: Math.floor(Math.random() * 50000) + 10000 },
//   { name: "Day 19", price: Math.floor(Math.random() * 50000) + 10000 },
//   { name: "Day 20", price: endPrice },
// ]);
