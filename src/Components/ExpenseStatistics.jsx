import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import myaxios from "../utils/MyAxios";

const ExpenseStatistics = () => {
  const [expence, setExpence] = useState({});
  const [chartData, setChartData] = useState({
    series: [],
    labels: [],
  });

  // Function to load data from API
  const loadData = () => {
    myaxios
      .get("/expense-list")
      .then((response) => {
        const data = response.data.data; // Extracting 'data' object
        setExpence(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  // Update chart data after fetching expence
  useEffect(() => {
    if (expence && Object.keys(expence).length > 0) {
      const categories = Object.values(expence).slice(1); // Extracting values (excluding 'id')
      const labels = Object.keys(expence).slice(1); // Extracting keys (excluding 'id')

      setChartData({
        series: categories,
        labels: labels,
      });
    }
  }, [expence]);

  const chartOptions = {
    chart: {
      type: "pie",
    },
    labels: chartData.labels, // Set labels dynamically
    colors: ["#1E275D", "#FF7F00", "#FF00FF", "#007FFF"],
    legend: {
      show: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["#ffffff"],
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        colors: ["#ffffff"],
      },
      formatter: function (val, opts) {
        const label = opts.w.globals.labels[opts.seriesIndex];
        return `${label}  ${val.toFixed(2)}%`;  // Show dynamic label with percentage
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 2,
        opacity: 0.7,
      },
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: (val, opts) => {
          const label = opts.w.globals.labels[opts.seriesIndex];
          return `${label} ${val.toFixed(2)}%`; // Tooltip with label and percentage
        },
      },
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        offsetX: 0,
        offsetY: 10,
        customScale: 1.05,
        dataLabels: {
          offset: -10,
        },
        donut: {
          size: "0%",
        },
      },
    },
  };

  return (
    <Chart
      options={chartOptions}
      series={chartData.series}
      type="pie"
      width={320}
    />
  );
};

export default ExpenseStatistics;
