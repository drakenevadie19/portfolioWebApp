import React from 'react';
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

const FrontEndChart = () => {
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
    const labels = ['HTML & CSS', 'Programming Languages', 'UI/UX Design', 'Responsiveness', 'Performance Optimization', 'Front-End Testing'];
    const data = {
        labels: labels,
        datasets: [{
            label: 'Front-end Development',
            data: [9, 8, 8.5, 8, 8, 7], 
            backgroundColor: 'rgba(183, 39, 245, 0.4)', //
            borderColor: 'rgba(183, 39, 245, 0.8)',
            pointRadius: 5,
            pointHitRadius: 10,
            pointBackgroundColor: 'rgba(183, 39, 245, 0.8)',
            pointBorderColor: 'rgba(183, 39, 245, 0.8)',
        }]
    };
    
    return (
        <>
            <Radar data={data} />
        </>
    );
}

export default FrontEndChart;