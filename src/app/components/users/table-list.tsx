import {useEffect, useState} from "react";
import {
  activatePoll,
  deactivatePoll,
  deletePoll,
  listPoll,
} from "../../services/poll.service";
import {CreatePollResponse} from "../../models/response/polls/polls.response";
import {useNavigate} from "react-router-dom";

export const TableList = () => {
  const [polls, setPolls] = useState<CreatePollResponse[]>([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedPollId, setSelectedPollId] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const pollData = await listPoll();
      if (pollData && Array.isArray(pollData.data)) {
        setPolls(pollData.data);
      }
    };
    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleEditClick = async (id: number) => {
    navigate("/users/edit-poll/" + id);
  };

  const handleDeleteClick = async (id: number) => {
    const response = await deletePoll(id);
    if (response.message === "Success") {
      const updatedPollData = await listPoll();
      if (updatedPollData && Array.isArray(updatedPollData.data)) {
        setPolls(updatedPollData.data);
      }
    }
  };

  const handleActivateClick = async (id: number, isActivate: boolean) => {
    const actiivatePoll = isActivate
      ? await deactivatePoll(id)
      : await activatePoll(id);
    if (!isActivate) {
      navigate(`/users/poll-details/${id}`, {
        state: {actiivatePoll},
      });
    }
    if (actiivatePoll.message === "Success") {
      const updatedPollData = await listPoll();
      if (updatedPollData && Array.isArray(updatedPollData.data)) {
        setPolls(updatedPollData.data);
      }
    }
  };

  const showDeleteConfirmation = (id: number) => {
    setSelectedPollId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (selectedPollId !== null) {
      await handleDeleteClick(selectedPollId);
      setShowDeleteModal(false);
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setSelectedPollId(null);
  };

  return (
    <>
      {showDeleteModal && (
        <div className="hs-overlay" id="delete-modal">
          <div className="hs-overlay-open">
            <div className="absolute w-96 mx-auto left-0 right-0 flex flex-col bg-white border shadow-sm rounded-xl overflow-hidden dark:bg-gray-800 dark:border-gray-700">
              <div className="p-4 sm:p-10">
                <div className="flex gap-x-4 md:gap-x-7">
                  <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] sm:w-[62px] sm:h-[62px] rounded-full border-4 border-red-50 bg-red-100 text-red-500 dark:bg-red-700 dark:border-red-600 dark:text-red-100">
                    <svg
                      className="flex-shrink-0 w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                  </span>
                  <div className="grow">
                    <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-200">
                      Delete Poll
                    </h3>
                    <p className="text-gray-500">
                      Are you sure to delete poll?
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end items-center gap-x-2 py-3 px-4 bg-gray-50 border-t dark:bg-gray-800 dark:border-gray-700">
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  onClick={cancelDelete}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  onClick={confirmDelete}
                >
                  Delete Poll
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="max-w-[85rem] w-full mx-auto px-4 mt-5 flex flex-col">
        <h2 className="block text-xl font-bold text-gray-800 sm:text-2xl md:text-3xl lg:text-4xl dark:text-white">
          Your Polls
        </h2>
        <div className="-m-1.5 overflow-x-auto mt-5">
          <div className="p-1.5 min-w-full inline-block align-middle mt-5">
            <div className="overflow-hidden">
              {polls && polls.length > 0 ? (
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
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
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
                          {poll.isActive ? (
                            <a href={`/users/poll-details/${poll.id}`}>
                              {poll.questions.map((question, questionIndex) => (
                                <div key={questionIndex}>{question.title}</div>
                              ))}
                            </a>
                          ) : (
                            poll.questions.map((question, questionIndex) => (
                              <div key={questionIndex}>{question.title}</div>
                            ))
                          )}
                        </td>
                        <td
                          className={`px-6 py-4 text-left whitespace-nowrap 	text-sm font-medium text-gray-800 dark:text-gray-200 ${
                            poll.isActive ? "text-green-500" : "text-red-500"
                          } `}
                        >
                          {poll.isActive ? "Active" : "In Active"}
                        </td>

                        <td className="w-80 px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                          <button
                            type="button"
                            className={`w-40 py-2 px-3 mx-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold ${
                              poll.isActive ? "bg-red-500" : "bg-green-500"
                            } text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800`}
                            onClick={async () => {
                              await handleActivateClick(poll.id, poll.isActive);
                            }}
                          >
                            {poll.isActive ? "Deactivate" : "Activate"}
                          </button>
                          {poll.isActive ? (
                            ""
                          ) : (
                            <button
                              type="button"
                              className="w-40 py-2 px-3 mx-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                              onClick={async () => {
                                await handleEditClick(poll.id);
                              }}
                            >
                              {"Edit"}
                            </button>
                          )}
                          <button
                            type="button"
                            data-hs-overlay="#delete-modal"
                            className="w-40 py-2 px-3 mx-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                            onClick={async () => {
                              // await handleDeleteClick(poll.id);
                              showDeleteConfirmation(poll.id);
                            }}
                          >
                            {"Delete"}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>No Polls Created</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
