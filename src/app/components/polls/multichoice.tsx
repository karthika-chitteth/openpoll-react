import { useEffect, useState } from "react";
import { createPoll, getPoll, updatePoll } from "../../services/poll.service";
import {
  CreatePollPayload,
  QuestionsPayload,
} from "../../models/payload/polls/polls.payload.model";
import { useNavigate, useParams } from "react-router-dom";

export const MultiChoice = ({ isEdit }: { isEdit: boolean }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [optionCount, setOptionCount] = useState(1);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([""]);
  const [errorMessage, setErrorMessage] = useState("");
  const addOption = () => {
    setOptionCount(optionCount + 1);
    setOptions([...options, ""]);
  };

  useEffect(() => {
    const fetchPoll = async () => {
      try {
        const response = await getPoll(Number(id));
        if (response) {
          const pollData = response.data;

          if (pollData) {
            setQuestion(pollData.questions[0]?.title);

            const optionTitles =
              pollData.questions[0]?.options.map((option) => option.title) ||
              [];
            setOptions(optionTitles);

            setOptionCount(optionTitles.length);
          }
        }
      } catch (error) {
        console.error("Error fetching poll:", error);
      }
    };

    fetchPoll();
  }, [id]);

  const removeOption = () => {
    if (optionCount > 0) {
      setOptionCount(optionCount - 1);
      const updatedOptions = [...options];
      updatedOptions.pop();
      setOptions(updatedOptions);
    }
  };

  const clearErrorMessage = () => {
    setErrorMessage("");
  };
  const validateFields = () => {
    const errors = [];

    if (question.trim() === "") {
      errors.push("Question field is empty");
    }

    if (options.some((option) => option.trim() === "")) {
      errors.push("One or more options are empty");
    }

    if (errors.length > 0) {
      setErrorMessage(errors.join(", "));
      return false;
    }

    setErrorMessage("");
    return true;
  };

  const handleCreateClick = async () => {
    try {
      const isValid = validateFields();
      if (!isValid) {
        return;
      }

      const questions: QuestionsPayload[] = [
        {
          title: question,
          questionType: 0,
          options: options.map((label) => ({
            title: label,
          })),
        },
      ];

      const data: CreatePollPayload = {
        title: "Your Poll Title",
        questions: questions.map((label) => ({
          title: label.title,
          questionType: 0,
          options: label.options.map((label) => ({ title: label.title })),
        })),
      };

      let response;

      if (isEdit) {
        response = await updatePoll(data, Number(id));
      } else {
        response = await createPoll(data);
      }

      console.log(`Poll ${isEdit ? "edited" : "created"}:`, response);

      setQuestion("");
      setOptions([""]);
      setOptionCount(0);
      navigate("/users");
    } catch (error) {
      console.error("Error creating/editing poll:", error);
    }
  };

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
          clearErrorMessage();
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
          onChange={(e) => {
            setQuestion(e.target.value);
            clearErrorMessage();
          }}
        />

        <h2 className="mt-2 mb-5 text-lg  text-gray-900 font-bold">Options</h2>

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
        {errorMessage && (
          <div className="text-red-500 mt-3 mb-3">{errorMessage}</div>
        )}
        <div className="flex justify-end">
          <button
            type="button"
            className="w-[15rem] h-[3rem] mt-5 py-1 px-1 inline-flex justify-center relative flex items-end  items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            onClick={handleCreateClick}
          >
            {isEdit ? "Save" : "Create Poll"}
          </button>
        </div>
      </div>
    </>
  );
};
