import React from "react";
import { PiCards } from "react-icons/pi";
const RecentTransaction = ({ item }) => {
  return (
    <div className="flex items-center justify-between mb-[10px]">
      <div className="flex gap-[25px] bg-white rounded-[25px] items-center justify-center">
        <div className="w-[55px] h-[55px] rounded-full bg-[#FFF5D9] flex items-center justify-center">
          <img
            src={`http://inertia-pos.manirul.xyz/images/${item.image}`}
            className="w-[45px] h-[45px] rounded-full"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-[16px] max-sm:text-[14px] font-[500]">{item.name}</h1>
          <small className="text-[15px] max-sm:text-[12px] font-[400] text-[#718EBF]">
            {item.date}
          </small>
        </div>
      </div>

      <h1 className="text-[16px] max-sm:text-[11px] font-[500] font-inter text-[#41D4A8]">
        +${item.amount}
      </h1>
    </div>
  );
};

export default RecentTransaction;
