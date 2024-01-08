import {useEffect, useState} from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import {Bar} from "react-chartjs-2";
import {useParams} from "react-router-dom";
import {pollResults} from "../../services/poll.service";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart() {
  const {id} = useParams();
  const [data, setData] = useState<number[] | null>();
  const [labels, setLabels] = useState<string[] | null>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await pollResults(Number(id));
        const pollResult = response?.data?.answers[0].multipleChoiceAnswers.map(
          (answer) => answer.total
        );
        const labels = response?.data?.answers[0].multipleChoiceAnswers.map(
          (answer) => answer.title
        );
        setData(pollResult);
        setLabels(labels);
        console.log("pollResult", pollResult, "response", response);
      } catch (error) {
        console.error("Error fetching data from the API:", error);
      }
    };

    fetchData();
  }, [id]);

  const options: ChartOptions<"bar"> = {
    responsive: true,
    indexAxis: "x",
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "", // Update the chart title
      },
    },
  };

  // const labels = ["option1", "option2", "option3", "option4"];

  const chartData = {
    labels: labels || [],
    datasets: [
      {
        label: "Votes",
        data: data,
        backgroundColor: "#3b82f6",
        categoryPercentage: 1, // Adjust this value as needed
        barPercentage: 0.3, // Adjust this value as needed
      },
    ],
  };

  return (
    <>
      <div className="max-w-[85rem] w-full mx-auto px-4 mt-5 flex flex-col">
        <h1 className="text-center block text-5xl font-bold text-gray-800  dark:text-white mb-5">
          Poll Result
        </h1>
        <div>
          <a
            className="inline-flex items-center gap-x-1 text-sm text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-500"
            href={"/users/poll-details/" + id}
          >
            <svg
              className="flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to poll
          </a>
        </div>
        <Bar data={chartData} options={options} />
      </div>
    </>
  );
}
