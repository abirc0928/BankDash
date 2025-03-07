import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { GrSend } from "react-icons/gr";
const QuickTransfer = () => {
  return (
    <div className="col-span-3 bg-white rounded-[25px] pt-[30px]">
      <div className="flex justify-between items-center px-[40px] max-sm:px-[23px] max-sm:py-[20px]">
        <div className="flex flex-col justify-center items-center ">
          <img
            src="./1.png"
            alt=""
            className="rounded-full shadow-2xl mb-[15px]"
          />
          <h1 className="mb-[5px] text-[#232323] text-[16px] max-sm:text-[12px] font-[600]">
            Livia Bator
          </h1>
          <small className="text-[#718EBF] text-[15px] max-sm:text-[12px]  font-[400]">
            CEO
          </small>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <img
            src="./2.png"
            alt=""
            className="rounded-full shadow-2xl mb-[15px]"
          />
          <h1 className="mb-[5px] text-[#232323] text-[16px] max-sm:text-[12px] font-[400]">
            Randy Press
          </h1>
          <small className="text-[#718EBF] text-[15px] max-sm:text-[12px]  font-[400]">
            Director
          </small>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <img
            src="./3.png"
            alt=""
            className="rounded-full shadow-2xl mb-[15px]"
          />
          <h1 className="mb-[5px] text-[#232323] text-[16px] max-sm:text-[12px] font-[400]">
            Workman
          </h1>
          <small className="text-[#718EBF] text-[15px] max-sm:text-[12px] font-[400]">
            Designer
          </small>
        </div>
        <div className="w-[50px] h-[50px] rounded-full shadow-2xl flex items-center justify-center">
          <FaAngleRight className="text-[#718EBF] font-bold" />
        </div>
      </div>
      <div className=" p-[30px] flex justify-between px-[50px] max-sm:px-[25px] items-center">
        <h1 className="text-[#718EBF] text-[16px] max-sm:text-[12px] ">
          Write Amount
        </h1>
        <div className=" text-[#718EBF] bg-[#EDF1F7] rounded-[50px] ">
          <h1 className="flex justify-between gap-[50px] items-center pl-[16px] max-sm:text-[13px]">
            525.50
            <span className="flex justify-center items-center text-white text-[16px] max-sm:text-[13px] font-[500] bg-[#1814F3] px-[15px] py-[16px] max-sm:py-[12px] rounded-[50px] gap-[11px]">
              Send
              <span>
                <GrSend className="w-[40px] max-sm:w-[30px] h-[23px] max-sm:h-[15px]" />
              </span>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
