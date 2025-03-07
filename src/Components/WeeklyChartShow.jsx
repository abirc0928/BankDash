import React, { useState, useEffect } from "react";
import myaxios from "../utils/MyAxios";
import WeeklyChart from "react-apexcharts";

const WeeklyChartShow = () => {
    const [weeklyData, setWeeklyData] = useState([]);

    const [chartData, setChartData] = useState({
        series: [
            {
                name: "Deposit",
                data: [],
                color: '#16DBCC'
            },
            {
                name: "Withdraw",
                data: [],
                color: '#1814F3'
            },
        ],
        options: {
            chart: {
                type: "bar",
                height: 350,
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: false,
                },
                animations: {
                    enabled: true,
                    easing: "easeinout",
                    speed: 800,
                },
            },

            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "20%",
                    endingShape: "rounded",
                    dataLabels: {
                        position: "top",
                    },
                    barHeight: "100%",
                },
            },
            dataLabels: {
                enabled: false,
            },
            xaxis: {
                categories: [],
            },
            yaxis: {

            },
            fill: {
                opacity: 1,
            },
            tooltip: {
                y: {
                    formatter: (val) => `$${val}K`,
                },
            },
            legend: {
                position: "top",
                horizontalAlign: "right",
            },
        },
    });
    const loadData = () => {

        myaxios.get("/weekly-activity-list")
            .then((response) => {
                setWeeklyData(response.data);
            })
            .catch((error) => {
                console.log(error)
            });
    };

    useEffect(() => {
        if (weeklyData && weeklyData.data) {

            const days = [];
            const depositData = [];
            const withdrawData = [];

            weeklyData.data.forEach((item) => {
                days.push(item.days);
                depositData.push(item.deposit);
                withdrawData.push(item.withdraw);
            });


            setChartData((prevChartData) => ({
                ...prevChartData,
                series: [
                    {
                        ...prevChartData.series[0],
                        data: depositData,
                    },
                    {
                        ...prevChartData.series[1],
                        data: withdrawData,
                    },
                ],
                options: {
                    ...prevChartData.options,
                    xaxis: {
                        ...prevChartData.options.xaxis,
                        categories: days,
                    },
                },
            }));
        } else {
            console.log("weeklyData is empty or undefined");
        }
    }, [weeklyData]);

    

    useEffect(() => (
        loadData()
    ), [])
    
    return (
        <WeeklyChart options={chartData.options} series={chartData.series} type="bar" height={350} />
    )
}

export default WeeklyChartShow