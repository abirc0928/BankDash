import React from "react";

const MyCard = ({ item, index }) => {

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const [year, month] = dateString.split("-");
    return `${month}/${year.slice(-2)}`;
  };

  console.log(item.validity);
  return (
    <div
      className={`rounded-[25px]  ${
        index % 2 === 0
          ? "bg-gradient-to-r from-[#4C49ED] to-[#0A06F4] text-[#FFF]"
          : "bg-[#FFFFFF] text-[#000]"
      }`}
    >
      <div className=" py-[24px] px-[26px]">
        <div className="flex justify-between mb-[15px]">
          <div>
            <small className="text-[12px] max-sm:text-[11px] font-[400] font-lato">
              Balance
            </small>
            <h1 className="text-[20px] max-sm:text-[16px] font-[600]">
              ${item.balance.toLocaleString()}
            </h1>
          </div>
          <div>
            {index % 2 === 0 ? (
              <img src="./Chip_Card.png" alt="" />
            ) : (
              <img src="./Chip_Card_black.png" alt="" />
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 ">
          <div>
            <small className="text-[12px] max-sm:text-[10px] font-[400]">
              CARD HOLDER
            </small>
            <h1 className="text-[15px] max-sm:text-[13px] font-[600]">
              {item.name}
            </h1>
          </div>
          <div>
            <small className="text-[12px] max-sm:text-[10px] font-[400]">
              VALID THRU
            </small>
            <h1 className="text-[15px] max-sm:text-[13x] font-[600]">
              {formatDate(item.validity)}
            </h1>
          </div>
        </div>
      </div>

      <div
        className={`flex justify-between items-center py-[24px] max-sm:py-[16px] px-[26px] max-sm:px-[20px] ${
          index % 2 === 0
            ? "bg-[linear-gradient(180deg,_rgba(255,255,255,0.15)_0%,_rgba(255,255,255,0)_100%)]"
            : " border-t-1 border-[#DFEAF2]"
        } `}
      >
        <h1 className="text-[22px] max-sm:text-[15px] font-[600]">
          {item.card_number}
        </h1>
        {index % 2 === 0 ? (
          <img
            src="./Group 17.png"
            className="w-[44px] max-sm:w-[27px] h-[30px] max-sm:h-[18.5px]"
            alt=""
          />
        ) : (
          <img
            src="./Group 17 black.png"
            className="w-[44px] max-sm:w-[27px] h-[30px] max-sm:h-[18.5px]"
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default MyCard;
