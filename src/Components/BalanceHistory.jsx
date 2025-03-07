import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const AreaChart = () => {
  const [chartHeight, setChartHeight] = useState(200);

  useEffect(() => {
    const handleResize = () => {
      setChartHeight(window.innerWidth <= 640 ? 280 : 200);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const options = {
    series: [
      {
        name: "Sales",
        data: [0, 240, 330, 780, 210, 580, 220],
      }
    ],
    chart: {
      height: chartHeight,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["#1814F3"],
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 1,
        opacityFrom: 0.25,
        opacityTo: 0,
        stops: [0, 100],
        colorStops: [
          { offset: 0, color: "rgba(45, 96, 255, 0.25)", opacity: 1 },
          { offset: 100, color: "rgba(45, 96, 255, 0.00)", opacity: 0 }
        ]
      }
    },
    xaxis: {
      type: "category",
      categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    },
    tooltip: {
      x: {
        format: "MMM",
      },
    },
  };

  return <Chart options={options} series={options.series} type="area" height={chartHeight} />;
};

export default AreaChart;
