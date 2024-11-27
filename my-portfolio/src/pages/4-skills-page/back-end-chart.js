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

const BackEndChart = () => {
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
    const labels = ['Programming Languages', 'Databases', 'Server-Side Development', 'APIs', 'Security', 'Version Control'];
    const data = {
        labels: labels,
        datasets: [{
            label: 'Back-end Development',
            data: [8, 7, 7, 8, 6, 8.5], 
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

export default BackEndChart;