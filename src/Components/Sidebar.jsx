import React from "react";
import { TiHome } from "react-icons/ti";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa6";
import { TbZoomMoney } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-white max-lg:hidden">
      <div className="flex gap-[9px] p-[23px] border-b-1 ">
        
        <img src="./titel_icon.png" alt="" />
        <h1 className="text-[25px] font-[900] text-[#343C6A]">BankDash</h1>
      </div>
      <div>
        <ul className="mt-[33px] text-[#777c83]" >
          <li className="flex gap-[26px] p-[21px]  items-center text-[#2D60FF] ">
            <TiHome className="w-[25px] h-[25px]" />
            <span className="text-[18px] font-[500] ">Dashboard</span>
          </li>
          <li className="flex gap-[26px] p-[21px]  items-center ">
            <FaMoneyBillTransfer  className="w-[25px] h-[25px]" />
            <span className="text-[18px] font-[500] ">Transactions</span>
          </li>
          <li className="flex gap-[26px] p-[21px]  items-center ">
            <FaUser  className="w-[25px] h-[25px]" />
            <span className="text-[18px] font-[500] ">Accounts</span>
          </li>
          <li className="flex gap-[26px] p-[21px]  items-center ">
            <TbZoomMoney className="w-[25px] h-[25px]" />
            <span className="text-[18px] font-[500] ">Investments</span>
          </li>
          <li className="flex gap-[26px] p-[21px]  items-center ">
            <BsCreditCard2FrontFill className="w-[25px] h-[25px]" />
            <span className="text-[18px] font-[500] ">Credit Cards</span>
          </li>
          <li className="flex gap-[26px] p-[21px]  items-center ">
            <FaHandHoldingDollar  className="w-[25px] h-[25px]" />
            <span className="text-[18px] font-[500] ">Loans</span>
          </li>
          <li className="flex gap-[26px] p-[21px]  items-center ">
            <FaTools className="w-[25px] h-[25px]" />
            <span className="text-[18px] font-[500] ">Services</span>
          </li>

          <li className="flex gap-[26px] p-[21px]  items-center ">
            <FaLightbulb className="w-[25px] h-[25px]" />
            <span className="text-[18px] font-[500] ">My Privileges</span>
          </li>
          <li className="flex gap-[26px] p-[21px]  items-center ">
            <IoMdSettings className="w-[25px] h-[25px]" />
            <span className="text-[18px] font-[500] ">Setting</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};
