'use client';
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
export interface BarChartProps {
  data: {
    day: string;
    time: number;
  }[];
  className?: string;
}

const TimeSpentChart = ({ data, className }: BarChartProps) => {
  return (
    <div
      className={`w-full bg-white shadow-sm p-4 border min-w-[768px] rounded-lg ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        {/* <div className="font-bold text-lg w-1/3 md:w-[60%] text-[#17205B]">
          Time Spent
        </div> */}
        <div className="flex space-x-8  ">
          <div className=" flex space-x-2  items-center  ">
            <div className="w-3 h-3 rounded-full bg-[#97BDFF] "></div>
            <div className="text-[#414141] text-nowrap">Low Time</div>
          </div>

          <div className=" flex space-x-1 items-center">
            <div className="w-3 h-3 rounded-full bg-[#17205B]"></div>
            <div className="text-[#414141]">Complete</div>
          </div>
        </div>
        <div>
          {/* <input type='Date' className= /> */}
          {/* <Input
            type="date"
            placeholder="Date"
            inputClassName="bg-[#172058] rounded text-white"
          /> */}
        </div>
      </div>
      <div className=" w-full py-2">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <CartesianGrid stroke="#e7ebec" strokeWidth={1} vertical={false} />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              padding={{ left: 20 }}
            />

            <YAxis
              axisLine={false}
              domain={[0, 9]}
              ticks={[0, 2, 4, 6, 8]}
              tickFormatter={(tick: any) => `${tick} hr`}
              tickLine={false}
            />

            <Tooltip cursor={{ fill: 'transparent' }} />
            <Bar dataKey="time" radius={[3, 3, 0, 0]}>
              {data?.map((entry, index) => (
                <Cell
                  key={index}
                  fill={entry.time >= 8 ? '#17205B' : '#97BDFF'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TimeSpentChart;
