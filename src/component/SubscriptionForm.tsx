//@ts-nocheck
"useclient";
import React from "react";
import dynamic from "next/dynamic";
import DropDown from "./DropDown";
import Dropdown from "./DropDown";
// import { CalanderSvg } from '../icon/Calander';
// import MultiSelectDatePicker from '../calandar/Calandar';

// const Input = dynamic(() => import('../Input'), { ssr: false });
// const Button = dynamic(() => import('../Button'), { ssr: false });
interface Props {
  className: string;
  Coupons: string;
}

const Coupons: React.FC<Props> = ({ Coupons, className }) => {
  const data = [
    {
      label: "Basic Plan",
      Value: "Basic Plan",
    },
    {
      label: "Primuim Plan",
      Value: "Primuim Plan",
    },
    {
      label: "Standard Plan",
      Value: "Standard Plan",
    },
  ] as any;
  return (
    <div className={`${className} w-full pb-3 lg:pb-3 xl:pb-10`}>
      <div className="w-full items-center flex">
        <p className="mb-3 sm:mb-1 font-bold text-xs sm:text-base md:text-[18px]">
          {Coupons}
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col py-0 md:py-1">
          <label className="mb-0 md:mb-1 mt-2 text-lg font-semibold">
            First Name
          </label>
          <input
            type={""}
            className="text-[6px] py-2 px-2 sm:text-sm border border-[#D0D0D2]"
            placeholder="Enter First Name"
          />
        </div>
        <div className="flex flex-col py-0 md:py-1">
          <label className="mb-1 text-lg mt-2 font-semibold">Last Name</label>
          <input
            type={""}
            className="text-[6px] py-2 px-2 sm:text-sm border border-[#D0D0D2]"
            placeholder="Enter Last Name"
          />
        </div>

        <label className="mb-1 text-lg font-semibold mt-2">Plans</label>
        <Dropdown
          options={data}
          bodyClassName="w-full  sm:!-left-[px]"
          Button={
            <div className="flex justify-between border cursor-pointer bg-gray-50 items-center px-2 gap-2">
              <p className="text-lg font-medium py-1 ">Selcet Plane</p>
              <span className="mt-1">{/* <Downarrow /> */}aa</span>
            </div>
          }
        />
      </div>
      <div className="flex justify-center mt-2">
        <button
          className="bg-[#0052CC] text-white text-lg font-medium rounded-[3px] px-4 py-2 mt-6"
          aria-label="genrateCoupons"
        >
          <p>Genrated</p>
        </button>
      </div>
    </div>
  );
};

export default Coupons;
