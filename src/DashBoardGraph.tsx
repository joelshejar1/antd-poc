import React from 'react';
import { Column } from '@ant-design/plots';

export const DashboardGraph: React.FC = () => {
  // Dummy data for the graph
  const data = [
    { category: 'Jan', value: 30 },
    { category: 'Feb', value: 40 },
    { category: 'Mar', value: 35 },
    { category: 'Apr', value: 50 },
    { category: 'May', value: 49 },
    { category: 'Jun', value: 60 },
    { category: 'Jul', value: 70 },
    { category: 'Aug', value: 90 },
    { category: 'Sep', value: 60 },
    { category: 'Oct', value: 50 },
    { category: 'Nov', value: 40 },
    { category: 'Dec', value: 30 },
  ];

  const config = {
    data,
    xField: 'category',
    yField: 'value',
    color: '#52c41a', // using the green primary color
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        style: {
          fill: '#fff',
        },
      },
    },
    yAxis: {
      label: {
        style: {
          fill: '#fff',
        },
      },
    },
  };

  return <Column {...config} />;
};
