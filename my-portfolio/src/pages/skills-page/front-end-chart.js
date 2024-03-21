import React from 'react';
import Chart from 'chart.js/auto';

const FrontEndChart = () => {
    const ctx = document.getElementById('myChart').getContext('2d');
    const labels = ['Functionality', 'Usability', 'Responsiveness', 'Performance', 'Maintainability'];
    const data = {
        labels: labels,
        datasets: [{
            label: 'Front-end Development',
            data: [4.5, 4.5, 4.5, 4.5, 4.5], // Replace with your project's scores (1-5)
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            pointRadius: 5,
            pointHitRadius: 10,
            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
            pointBorderColor: 'rgba(255, 99, 132, 1)',
        }]
    };

    const config = {
        type: 'radar',
        data: data,
        options: {
            responsive: true,
            scale: {
                pointLabels: {
                    fontSize: 14,
                }
            }
        }
    };

    const myChart = new Chart(ctx, config);
    
    return (
        <canvas id="myChart"></canvas>
    );
}

export default FrontEndChart;