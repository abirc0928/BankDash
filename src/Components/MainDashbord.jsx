import React, { useState, useEffect } from "react";
import WeeklyChartShow from "./WeeklyChartShow";
import ExpenseStatistics from "./ExpenseStatistics";
import myaxios from "../utils/MyAxios";
import MyCard from "./MyCard";
import RecentTransaction from "./RecentTransaction";
import QuickTransfer from "./QuickTransfer";
import BalanceHistory from "./BalanceHistory";

const MainDashbord = () => {
  const [cardData, setCardData] = useState([]);
  const [transactionData, setTransactionData] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showAll, setShowAll] = useState(false); // State to toggle visibility

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to load data from API
  const cardLoadData = () => {
    myaxios
      .get("/card-list")
      .then((response) => {
        setCardData(response.data.data || []);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const transactionLoadData = () => {
    myaxios
      .get("/recent-transactions-list")
      .then((response) => {
        setTransactionData(response.data.data || []);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    cardLoadData();
    transactionLoadData();
  }, []);

  return (
    <main className="font-inter">
      <div className="mx-[40px] max-sm:mx-[25px] my-[24px] max-sm:my-[27px]">
        <div className="grid grid-cols-3 gap-[30px]">
          <div className="max-lg:col-span-3 col-span-2">
            <div className="flex justify-between mb-[20px] items-center">
              <h1
                className="text-[#343C6A] text-[22px] font-semibold"
                style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              >
                My Cards
              </h1>
              {cardData.length > 2 && (
                <button
                  className="text-[#343C6A] text-[17px] font-[600] text-base cursor-pointer"
                  onClick={() => setShowAll(!showAll)}
                >
                  {showAll ? "Show Less" : "See All"}
                </button>
              )}
            </div>

            <div className="grid max-md:grid-cols-1 grid-cols-2 gap-[30px] font-lato">
              {cardData.length > 0 ? (
                cardData
                  .slice(0, showAll ? cardData.length : 2) // Toggle between all or 2 items
                  .map((item, index) => <MyCard key={index} index={index} item={item} />)
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>

          <div className="max-lg:col-span-3 col-span-1">
            <h1
              className="text-[#343C6A] text-[22px] font-semibold mb-[20px]"
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            >
              Recent Transactions
            </h1>
            <div className="h-[235px] bg-[#FFFFFF] rounded-[25px] py-[24px] px-[26px]">
              {transactionData.length > 0 ? (
                transactionData.map((item, index) => (
                  <RecentTransaction key={index} item={item} />
                ))
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-[30px] my-[20px]">
          <div className="max-lg:col-span-3 col-span-2 flex flex-col">
            <h1
              className="text-[#343C6A] text-[22px] font-semibold my-[20px]"
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            >
              Weekly Activity
            </h1>
            <div className="bg-white px-[30px] py-[10px] rounded-[25px] flex-grow">
              <WeeklyChartShow />
            </div>
          </div>
          <div className="flex flex-col max-lg:col-span-3">
            <h1
              className="text-[#343C6A] text-[22px] font-semibold my-[20px]"
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            >
              Expense Statistics
            </h1>
            <div className="bg-white p-[33px] rounded-[25px] flex items-center justify-center flex-grow">
              <ExpenseStatistics />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-8 gap-[30px]">
          <div className="col-span-3 max-lg:col-span-8 flex flex-col">
            <h1
              className="text-[#343C6A] text-[22px] font-semibold my-[20px]"
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            >
              Quick Transfer
            </h1>
            <div className="flex-grow">
              <QuickTransfer />
            </div>
          </div>
          <div className="col-span-5 max-lg:col-span-8 flex flex-col">
            <h1
              className="text-[#343C6A] text-[22px] font-semibold my-[20px]"
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            >
              Balance History
            </h1>
            <div className="bg-white rounded-[25px] p-[30px] flex-grow">
              <BalanceHistory />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainDashbord;
