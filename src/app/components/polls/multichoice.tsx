import { useState } from "react";
import { createPoll } from "../../services/poll.service";
import {
  CreatePollPayload,
  QuestionsPayload,
} from "../../models/payload/polls/polls.payload.model";

export const MultiChoice = () => {
  const [optionCount, setOptionCount] = useState(1);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([""]);
  const addOption = () => {
    setOptionCount(optionCount + 1); // Increase the count when adding an option
    setOptions([...options, ""]);
  };

  const removeOption = () => {
    if (optionCount > 0) {
      setOptionCount(optionCount - 1); // Decrease the count when removing an option, but keep at least one option
      const updatedOptions = [...options];
      updatedOptions.pop(); // Remove the last option
      setOptions(updatedOptions);
    }
  };
  // Async function to handle the create button click
  const handleCreateClick = async () => {
    try {
      // Create the data object in the desired structure
      const questions: QuestionsPayload = {
        title: question,
        type: "Multiple choice",
        options: options.map((label) => ({
          title: label,
        })),
      };

      const data: CreatePollPayload = {
        questions: questions,
      };
      console.log(data);

      const response = await createPoll(data);

      // Handle the response if needed
      console.log("Poll created:", response);

      // Reset the form or handle success as required
      // Example: Clear input fields
      setQuestion("");
      setOptions([""]);
      setOptionCount(0);
    } catch (error) {
      // Handle errors
      console.error("Error creating poll:", error);
    }
  };

  // Render the input fields and options
  const optionInputs = options.map((option, index) => (
    <div className="flex inline-flex" key={index}>
      <input
        type="text"
        className="py-3 px-5 mr-2 mb-5 block w-full border-solid border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
        placeholder={`Option ${index + 1}`}
        value={option}
        onChange={(e) => {
          const updatedOptions = [...options];
          updatedOptions[index] = e.target.value;
          setOptions(updatedOptions);
        }}
      />
      <button
        type="button"
        className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.875rem] w-[2.875rem] rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm  dark:focus:ring-offset-gray-800"
        onClick={removeOption}
      >
        <svg
          className="w-3.5 h-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z" />
        </svg>
      </button>
    </div>
  ));
  return (
    <>
      <div className="max-w-[85rem] w-full mx-auto px-4 mt-5 flex flex-col">
        <h2 className="mt-2 mb-5 text-lg  text-gray-900 font-bold">Question</h2>
        <p className="mt-2 mb-5 text-sm leading-6 text-gray-600">
          Ask a question and let participants choose from a list of answers.
        </p>
        <input
          type="text"
          className="py-3 px-4 mb-5 block w-full border-solid border-2 border-gray-200  rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
          placeholder="Add question here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        {/* <ul className="max-w-sm flex flex-col">
          <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
            <div className="relative flex items-start w-full">
              <div className="flex items-center h-5">
                <input
                  id="hs-list-group-item-checkbox-1"
                  name="hs-list-group-item-checkbox-1"
                  type="checkbox"
                  className="border-gray-200 rounded dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  checked
                />
              </div>
              <label className="ml-3.5 block w-full text-sm text-gray-600 dark:text-gray-500">
                Yes
              </label>
            </div>
          </li>

          <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
            <div className="relative flex items-start w-full">
              <div className="flex items-center h-5">
                <input
                  id="hs-list-group-item-checkbox-2"
                  name="hs-list-group-item-checkbox-2"
                  type="checkbox"
                  className="border-gray-200 rounded dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                />
              </div>
              <label className="ml-3.5 block w-full text-sm text-gray-600 dark:text-gray-500">
                No
              </label>
            </div>
          </li>
        </ul> */}
        <h2 className="mt-2 mb-5 text-lg  text-gray-900 font-bold">Options</h2>

        {/* <div className="flex inline-flex">
          <input
            type="text"
            className="py-3 px-5 block w-full border-solid border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            placeholder="Add options"
          />
        </div> */}
        {optionInputs}
        <button
          type="button"
          className="w-[10rem] mt-5 py-1 px-1 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          onClick={addOption}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="30"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
          </svg>
          Add options
        </button>
        <div className="flex justify-end">
          <button
            type="button"
            className="w-[15rem] h-[3rem] mt-5 py-1 px-1 inline-flex justify-center relative flex items-end  items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            onClick={handleCreateClick}
          >
            Create Poll
          </button>
        </div>
      </div>
    </>
  );
};
