import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart({all_years}) {
    console.log(all_years)
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'State Of Js Chart',
          },
        },
      };
      
    const labels = all_years.map(data=>data.year);
    const dataChart = {
        labels,
        datasets: [
            {
                label: 'completion',
                data: all_years.map(data=>data.completion.count),
                backgroundColor: 'rgba(30, 217, 2, 0.5)',
            },  
            {
                label: 'would_use',
                data: all_years.map(data=>data.facets[0].buckets[0].count),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'would_not_use',
                data: all_years.map(data=>data.facets[0].buckets[1].count),
                backgroundColor: 'rgba(110, 51, 153, 0.5)',
            },
            {
              label: 'interested',
              data: all_years.map(data=>data.facets[0].buckets[2].count),
              backgroundColor: 'rgba(240, 123, 40, 0.5)',
            },
            {
              label: 'not_interested',
              data: all_years.map(data=>data.facets[0].buckets[3].count),
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
              label: 'nerve_heard',
              data: all_years.map(data=>data.facets[0].buckets[4].count),
              backgroundColor: 'rgba(246, 3, 3, 0.5)',
            },
            
        ],
      };
  return <div className='tablechart'><Bar options={options} data={dataChart} /></div>;
}
