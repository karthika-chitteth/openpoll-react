import { getQuestion, vote } from "../../services/poll.service";
import { PollQuestionResponse } from "../../models/response/polls/polls.response";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import { PollSchema } from "../../schemas/poll/poll.schema";

export const AudiencePoll = () => {
  const { id } = useParams();
  const [data, setData] = useState<PollQuestionResponse | null>(null);
  const [formErrors, setFormErrors] = useState({
    selectedOption: null, // Initialize with null or an empty string
    voterName: null, // Initialize with null or an empty string
  });
  const navigate = useNavigate();
  sessionStorage.setItem("openpoll-submitted", "1");

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
  useEffect(() => {
    if (data) {
      setFormData({
        pollId: data.id || 0,
        questionId: data.questions[0]?.id || 0,
        questionType: data.questions[0]?.questionType || 0,
        selectedOption: 0,
        voterName: "",
      });
    }
  }, [data]);
  console.log(".....data", data, data?.id);
  const [formData, setFormData] = useState({
    pollId: data?.id || 0,
    questionId: data?.questions[0]?.id || 0,
    questionType: data?.questions[0]?.questionType || 0,
    selectedOption: 0,
    voterName: "",
  });

  async function handleSubmitClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    try {
      await PollSchema.validate(formData, { abortEarly: false });
      const response = await vote({
        pollId: formData.pollId,
        questionId: formData.questionId,
        questionType: formData.questionType,
        answer1: formData.selectedOption, // Use the selected option
        voterName: formData.voterName,
      });
      localStorage.clear();
      navigate("/poll/success");

      console.log("Response:", response);
    } catch (error: unknown) {
      console.error(error);
      if (error instanceof yup.ValidationError) {
        error.inner.forEach((err: yup.ValidationError) => {
          const propertyName = err.path ? err.path.toString() : "";
          setFormErrors((prevErrors) => ({
            ...prevErrors,
            [propertyName]: err.message,
          }));
        });
      } else {
        console.error(error);
      }
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    // Parse the input value as a number, and use a default value (e.g., 0) if parsing fails
    const numberValue = parseFloat(value) || 0;

    setFormData({ ...formData, [name]: numberValue });
  }

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
            {data.questions[0].options.map((option) => (
              <li
                className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px"
                key={option.id} // Use the 'id' of the option as the key
              >
                <div className="relative flex items-start w-full">
                  <div className="flex items-center h-5">
                    <input
                      id={`option-${option.id}`} // Use the 'id' of the option as the input ID
                      name="selectedOption"
                      type="radio"
                      value={option.id} // Use the 'id' of the option as the value
                      checked={formData.selectedOption === option.id} // Compare with the 'id' of the selected option
                      onChange={(e) => handleChange(e)}
                      className="border-gray-200 rounded dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <label
                    htmlFor={`option-${option.id}`} // Use the 'id' of the option as the label's 'for' attribute
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
          {formErrors.selectedOption && (
            <div className="text-red-500">{formErrors.selectedOption}</div>
          )}
        </div>
      )}
    </>
  );
};
