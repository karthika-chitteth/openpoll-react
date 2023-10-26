import { getQuestion } from "../../services/poll.service";
import { PollQuestionResponse } from "../../models/response/polls/polls.response";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const AudiencePoll = () => {
  const { id } = useParams();
  const [data, setData] = useState<PollQuestionResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getQuestion(String(id));
        if (response && response.data) {
          setData(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleSubmitClick = async () => {
    // Implement your submit logic here
  };

  return (
    <>
      {data && (
        <div className="max-w-[85rem] w-full mx-auto px-4 mt-5 flex flex-col">
          <>
            <h2 className="mt-2 mb-5 text-lg text-gray-900 font-bold">
              {data.questions[0].title}
            </h2>
          </>

          <ul className="max-w-sm flex flex-col">
            {data.questions[0].options.map((option, optionIndex) => (
              <li
                className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px"
                key={optionIndex}
              >
                <div className="relative flex items-start w-full">
                  <div className="flex items-center h-5">
                    <input
                      id={`option-${optionIndex}`}
                      name={`option-${optionIndex}`}
                      type="checkbox"
                      className="border-gray-200 rounded dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <label
                    htmlFor={`option-${optionIndex}`}
                    className="ml-3.5 block w-full text-sm text-gray-600 dark:text-gray-500"
                  >
                    {option.title}
                  </label>
                </div>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="w-[15rem] h-[3rem] mt-5 py-1 px-1 inline-flex justify-center relative  items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            onClick={handleSubmitClick}
          >
            Submit
          </button>
        </div>
      )}
    </>
  );
};
