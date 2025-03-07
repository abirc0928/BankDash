import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuBellDot } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";

export const Header = () => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <header className="bg-white h-auto w-full font-inter p-4">
      <div className="flex flex-wrap justify-between items-center gap-4">
        {/* Left Section */}
        <div className="max-lg:block hidden text-[#343C6A]">
          <IoMenu className="w-[40px] h-[40px]" />
        </div>
        
        <h2 className="text-[#343C6A] text-[28px] font-[600]">
          Overview
        </h2>

        <div className="pr-4 max-lg:block hidden">
            <img
              className="rounded-full w-13 h-13"
              src="./profile_img.png"
              alt="Profile"
            />
          </div>

        {/* Right Section */}
        <div className="flex gap-4 items-center flex-wrap max-lg:w-full">
          {/* Search Bar */}
          <div 
            className={`flex items-center justify-center w-[255px] h-[50px] bg-[#F5F7FA] rounded-full gap-2 transition-all border px-[30px] ${
              isFocused ? "border-sky-700" : "border-transparent"
            } max-lg:w-full`}
          >
            <CiSearch className="text-2xl" />
            <input
              type="text"
              placeholder="Search for something"
              className="w-full focus:outline-none text-[15px] text-[#8BA3CB] bg-transparent"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </div>

          {/* Icons */}
          <div className="flex gap-4 max-lg:hidden ">
            <div className="w-[50px] h-[50px] bg-[#F5F7FA] p-3 rounded-full">
              <IoSettingsOutline className="text-2xl text-gray-500" />
            </div>
            <div className="w-[50px] h-[50px] bg-[#F5F7FA] p-3 rounded-full">
              <LuBellDot className="text-2xl text-[#FE5C73]" />
            </div>
          </div>

          {/* Profile Image */}
          <div className="pr-4 max-lg:hidden block">
            <img
              className="rounded-full w-13 h-13"
              src="./profile_img.png"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
