import React, { useContext } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    RadialLinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale
    } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import "./skill-page.css";
import { ThemeContext } from "../../ThemeContext";

const FrontEndChart = () => {

    
  const { theme } = useContext(ThemeContext);

    ChartJS.register(
        CategoryScale,
        RadialLinearScale,
        PointElement,
        LineElement,
        TimeScale,
        Title,
        Tooltip,
        Legend
       );
    const labels = ['Frontend Development', 'Backend Development', 'Database Management', 'API Development and Integration', 'DevOps and Deployment', 'Version Control and Collaboration'];
    const data = {
        labels: labels,
        datasets: [{
            label: 'Fullstack Development',
            data: [9, 8.5, 8.5, 8.5, 8, 8.5], 
            backgroundColor: theme === "light-theme" ? "#4D869C" : "#32E0C4",
            borderColor: theme === "light-theme" ? "#4D869C" : "#32E0C4",
            pointRadius: 5,
            pointHitRadius: 10,
            pointBackgroundColor: theme === "light-theme" ? "#00D1FF" : "orange",
            pointBorderColor: theme === "light-theme" ? "#4D869C" : "#32E0C4",
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        }]
    };

    const options = {
        scales: {
          r: {
            beginAtZero: true,
            ticks: {
              color: "#4D869C", // Label color for the values
            },
            pointLabels: {
              color: theme === "light-theme" ? "#4D869C" : "#32E0C4", // Label color for the axis labels
              font: {
                size: 14, // Optional: Adjust font size
              },
            },
            grid: {
              color: theme === 'light-theme' ? '#4D869C' : '#0D7377', // Optional: Change grid line color
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              color: theme === 'light-theme' ? '#000' : '#FFF', // Legend text color
            },
          },
          tooltip: {
            enabled: true,
          },
        },
    };
    
    return (
        <>
            <Radar data={data} options={options} />
        </>
    );
}

export default FrontEndChart;