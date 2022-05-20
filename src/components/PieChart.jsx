import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import JSdata from '../data/reactExperience.json'

ChartJS.register(ArcElement, Tooltip, Legend);


export function PieChart({year}) {    
    
    
    const dataChart = {
        labels: year.facets[0].buckets.map((bucket)=>(bucket.id)),
        datasets: [
          {
            label: "# of Votes",
            data: year.facets[0].buckets.map((bucket)=>(bucket.count)),
            backgroundColor: [
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      };
  return <div className="circlechart"><h1>{year.year}</h1><Pie data={dataChart} /></div>;
}
