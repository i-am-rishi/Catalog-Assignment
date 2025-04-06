import { useState } from "react";

import "./index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  filters,
  endPrice,
  actionBar,
  startPrice,
  listOfContents,
  percentageChange,
  priceChangeString,
} from "../static-assets/constants";

import {
  Area,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function App() {
  const [selectedFilter, setSelectedFilter] = useState("3d");
  const [selectedContent, setSelectedContent] = useState("Chart");

  const chartData = [
    { name: "Day 1", price: startPrice },
    ...Array.from({ length: 18 }, (_, i) => ({
      name: `Day ${i + 2}`,
      price: Math.floor(Math.random() * 50000) + 10000,
    })),
    { name: "Day 20", price: endPrice },
  ];

  return (
    <div className="">
      {/* Price */}
      <div className="absolute text-[#1a243a]">
        <div className="absolute w-[269px] h-[89px] left-[60px] font-circular font-normal text-[48px]">
          {endPrice.toLocaleString("en-US", {
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
          })}
        </div>{" "}
        <span className="absolute w-[49px] h-[30px] left-[260px] top-[10px] font-circular font-normal text-[12px] leading-[30px] text-[#bdbebf]">
          USD
        </span>
        <span className="absolute w-[141px] h-[23px] left-[60px] top-[60px] font-circular font-normal text-[10px] leading-[23px] text-[#67bf6b]">
          {priceChangeString}({percentageChange})%
        </span>
      </div>

      {/* Content List */}
      <div className="absolute top-[100px] left-[60px] w-[300px] flex justify-between items-center ">
        {listOfContents.map((content) => (
          <div
            onClick={() => setSelectedContent(content)}
            className={`text-[10px] font-circular cursor-pointer pb-1 border-b-2 text-gray-500 ${
              content === selectedContent
                ? " border-blue-600"
                : " border-transparent"
            }`}
            key={content}
          >
            {content}
          </div>
        ))}
      </div>

      <div className="absolute top-[90px] space-x-4 mt-6 border-b w-full border-gray-200 pb-2"></div>

      {/* Actions and Filters */}
      <div className="absolute top-[130px] left-[60px]  w-[480px] flex justify-between">
        {/* Actions */}
        <div className="text-sm text-gray-500 flex items-start space-x-2">
          {actionBar.map((action) => (
            <div
              key={action.id}
              className="relative group cursor-pointer w-[70px] flex justify-start items-center rounded-[5px] h-[20px] top-0 left-0 space-x-2"
            >
              {/* Icon with Tooltip */}
              <FontAwesomeIcon
                icon={action.icon}
                className="text-[#1a243a] text-[8px]"
              />
              {/* Action Name */}
              <div className="text-[8px]">{action.name}</div>

              {/* Tooltip */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mb-1 hidden group-hover:flex bg-blue-600 text-white text-[5px] rounded shadow-lg w-[80px] justify-center items-center">
                Coming Soon
              </div>
            </div>
          ))}
        </div>
        {/* Filters */}
        {selectedContent === "Chart" && (
          <div className="text-sm text-gray-500 flex items-start space-x-2">
            {filters.map((filter) => (
              <div
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`cursor-pointer w-[25px] flex justify-center items-center rounded-[5px] h-[20px] top-0 left-0 ${
                  selectedFilter === filter
                    ? "bg-blue-600 text-white"
                    : " text-gray-700"
                }`}
              >
                <div className="text-[8px]">{filter}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Charts */}
      {selectedContent === "Chart" ? (
        <div className="absolute top-[180px] left-[60px] h-60 w-[550px] border border-grey-500 rounded-[5px] ">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#5B3DF9" stopOpacity={0.5} />
                  <stop offset="95%" stopColor="#5B3DF9" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" hide />
              <YAxis domain={[60000, 66000]} hide />
              <Tooltip
                content={({ payload }) => {
                  if (!payload || !payload.length) return null;
                  return (
                    <div className="bg-black text-white text-xs px-2 py-1 rounded">
                      ${payload?.[0]?.value?.toLocaleString() ?? "N/A"}
                    </div>
                  );
                }}
              />
              <Area
                type="monotone"
                dataKey="price"
                stroke="#5B3DF9"
                fillOpacity={1}
                fill="url(#colorPrice)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="absolute top-[180px] left-[60px] h-60 w-[550px] border border-grey-500 rounded-[5px] flex justify-center items-center text-gray-400">
          <div>Coming Soon</div>
        </div>
      )}
    </div>
  );
}

export default App;
