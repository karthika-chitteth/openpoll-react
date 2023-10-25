import { useEffect, useState } from "react";
import { listPoll } from "../../services/poll.service";
import { CreatePollResponse } from "../../models/response/polls/polls.response";
import { useNavigate } from "react-router-dom";

export const TableList = () => {
  const [polls, setPolls] = useState<CreatePollResponse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const pollData = await listPoll();
      // Update the state with the fetched data
      // setPolls(pollData);

      if (pollData && Array.isArray(pollData.data)) {
        console.log("pollData", pollData);
        // Assuming pollData is an array of CreatePollResponse
        setPolls(pollData.data);
      }
    };
    console.log("iiiiiiiiiiiii", polls);
    fetchData();
  }, []);

  console.log("uuuuuuuu", polls);
  const navigate = useNavigate();
  const handleEditClick = async (id: number) => {
    // const response = await getPoll(id);
    // console.log("Poll created:", response);

    navigate("/user/edit-poll/" + id);
  };

  return (
    <>
      <div className="max-w-[85rem] w-full mx-auto px-4 mt-5 flex flex-col">
        <h2 className="block text-xl font-bold text-gray-800 sm:text-2xl md:text-3xl lg:text-4xl dark:text-white">
          Your Polls
        </h2>
        <div className="-m-1.5 overflow-x-auto mt-5">
          <div className="p-1.5 min-w-full inline-block align-middle mt-5">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 table-auto">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      Polls
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {polls.map((poll, index) => (
                    <tr
                      key={index}
                      className="odd:bg-white text-left even:bg-gray-100 dark:odd:bg-slate-900 dark:even:bg-slate-800"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                        {poll.questions.map((question, questionIndex) => (
                          <div key={questionIndex}>{question.title}</div>
                        ))}
                      </td>
                      <td className="px-6 py-4 text-center whitespace-nowrap text-red-600	text-sm font-medium text-gray-800 dark:text-gray-200">
                        {poll.isActive ? "Active" : "In Active"}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                        <button
                          type="button"
                          className="py-2 px-3 mx-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                        >
                          {poll.isActive ? "Deactivate" : "Activate"}
                        </button>
                        <button
                          type="button"
                          className="py-2 px-3 mx-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                          onClick={async () => {
                            await handleEditClick(poll.id);
                          }}
                        >
                          {"Edit"}
                        </button>
                        <button
                          type="button"
                          className="py-2 px-3 mx-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                          // onClick={handleDeleteClick}
                        >
                          {"Delete"}
                        </button>
                      </td>
                    </tr>
                  ))}
                  {/* <tr className="odd:bg-white even:bg-gray-100 dark:odd:bg-slate-900 dark:even:bg-slate-800">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                      Are you familiar with no code platforms?
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap text-green-600	text-sm font-medium text-gray-800 dark:text-gray-200">
                      Active
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        type="button"
                        className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-600 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                      >
                        Inactivate
                      </button>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
