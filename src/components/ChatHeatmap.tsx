import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { format } from 'date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const generateMockData = () => {
  const data = [];
  const now = new Date();
  for (let i = 0; i < 60; i++) {
    data.push({
      timestamp: new Date(now.getTime() - (60 - i) * 60000),
      messageCount: Math.floor(Math.random() * 100)
    });
  }
  return data;
};

export const ChatHeatmap: React.FC = () => {
  const chatData = generateMockData();

  const data = {
    labels: chatData.map(d => format(d.timestamp, 'HH:mm')),
    datasets: [
      {
        label: 'Messages per Minute',
        data: chatData.map(d => d.messageCount),
        fill: true,
        borderColor: 'rgb(147, 51, 234)',
        backgroundColor: 'rgba(147, 51, 234, 0.1)',
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chat Activity Heatmap'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Line data={data} options={options} />
    </div>
  );
};