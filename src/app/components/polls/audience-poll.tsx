import { getQuestion } from "../../services/poll.service";
import { PollQuestionResponse } from "../../models/response/polls/polls.response";
// import * as yup from "yup";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import { LoginSchema } from "../../schemas/auth/login.schema";

export const AudiencePoll = () => {
  const { id } = useParams();
  const [data, setData] = useState<PollQuestionResponse | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | undefined>(
    undefined
  ); // Change initial state to undefined

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

  // const [formData, setFormData] = useState({
  //   pollId: "",
  //   questionId: "",
  //   questionType: "",
  //   answer1: "",
  //   voterName: "",
  // });
  // const [formErrors, setFormErrors] = useState({
  //   pollId: null,
  //   questionId: "",
  //   questionType: "",
  //   answer1: "",
  //   voterName: "",
  // });
  // console.log(formErrors);

  // // const navigate = useNavigate();

  // async function handleSubmitClick(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();

  //   try {
  //     await LoginSchema.validate(formData, { abortEarly: false });
  //     //   const response = await register({
  //     // const response = await vote({
  //     //   pollId: formData.pollId,
  //     //   questionId: formData.email,
  //     //   questionType: 0,
  //     //   answer1: 0,
  //     //   voterName: "",
  //     // });
  //   } catch (error: unknown) {
  //     console.error(error);
  //     if (error instanceof yup.ValidationError) {
  //       error.inner.forEach((err: yup.ValidationError) => {
  //         const propertyName = err.path?.toString() as string; // Use type assertion
  //         setFormErrors((prevErrors) => ({
  //           ...prevErrors,
  //           [propertyName]: err.message,
  //         }));
  //       });
  //     } else {
  //       // Handle other types of errors (e.g., network errors)
  //       console.error(error);
  //     }
  //   }
  // }

  // // function handleChange(e: ChangeEvent<HTMLInputElement>): void {
  // //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // // }

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
                      name="selectedOption"
                      type="radio"
                      value={optionIndex}
                      checked={selectedOption === optionIndex}
                      // onChange={(e) => handleChange(e)}
                      onChange={() => setSelectedOption(optionIndex)}
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

          {/* {formErrors && (
            <div className="text-red-500">{formErrors.answer1}</div>
          )} */}

          <button
            type="button"
            className="w-[15rem] h-[3rem] mt-5 py-1 px-1 inline-flex justify-center relative  items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            // onClick={handleSubmitClick}
          >
            Submit
          </button>
        </div>
      )}
    </>
  );
};
