// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getQuestion } from "../../services/poll.service";
// import { PollQuestionResponse } from "../../models/response/polls/polls.response";

// export const AudiencePoll = () => {
//   // const navigate = useNavigate();
//   // Async function to handle the create button click

//   const { id } = useParams();
//   console.log(id);
//   const [data, setData] = useState<PollQuestionResponse>({});
//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await getQuestion(String(id));
//       // Update the state with the fetched data
//       setData(data);

//       console.log(data);
//     };
//     // console.log("iiiiiiiiiiiii", polls);
//     fetchData();
//   }, []);

// const handleSubmitClick = async () => {};
//   return (
//     <>

//       <div className="max-w-[85rem] w-full mx-auto px-4 mt-5 flex flex-col">
//         <h2 className="mt-2 mb-5 text-lg  text-gray-900 font-bold">Question</h2>
//         {data.questions.map((question, questionIndex) => (
//                           <div key={questionIndex}>{question.title}</div>
//                         ))}
//         <p className="mt-2 mb-5 text-sm leading-6 text-gray-600">
//           Ask a question and let participants choose from a list of answers.
//         </p>

//         <ul className="max-w-sm flex flex-col">
//           <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
//             <div className="relative flex items-start w-full">
//               <div className="flex items-center h-5">
//                 <input
//                   id="hs-list-group-item-checkbox-2"
//                   name="hs-list-group-item-checkbox-2"
//                   type="checkbox"
//                   className="border-gray-200 rounded dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
//                 />
//               </div>
//               <label className="ml-3.5 block w-full text-sm text-gray-600 dark:text-gray-500">
//                 No
//               </label>
//             </div>
//           </li>
//         </ul>

//         <button
//           type="button"
//           className="w-[15rem] h-[3rem] mt-5 py-1 px-1 inline-flex justify-center relative  items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
//           onClick={handleSubmitClick}>
//           Submit
//         </button>
//       </div>
//     </>
//   );
// };
