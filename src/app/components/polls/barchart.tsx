import React, { useEffect, useRef } from "react";
import Chart, { ChartType } from "chart.js/auto";

const BarChart: React.FC = () => {
  const chartContainer = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<ChartType> | null>(null);

  useEffect(() => {
    if (chartContainer.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartContainer.current.getContext("2d");
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["Category A", "Category B", "Category C", "Category D"],
            datasets: [
              {
                label: "Horizontal Bar Chart",
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
                data: [12, 19, 3, 5], // Replace with your data
              },
            ],
          },
          options: {
            indexAxis: "y", // Set the indexAxis to "y" for horizontal bars
            scales: {
              x: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-4 lg:px-4 mt-5">
      <h2>Poll result</h2>
      <canvas
        ref={chartContainer}
        id="horizontalBarChart"
        width="400"
        height="200"></canvas>
    </div>
  );
};

export default BarChart;
