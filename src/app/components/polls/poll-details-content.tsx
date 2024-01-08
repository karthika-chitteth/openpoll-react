import { useLocation, useParams } from "react-router-dom";

import QRCodeGenerator from "./QRCodeGenerator";
import { useEffect, useState } from "react";
import { getPoll } from "../../services/poll.service";
import { CreatePollResponse } from "../../models/response/polls/polls.response";

export const PollDetailsContent = () => {
  const location = useLocation();
  const pollTitle = location.state?.actiivatePoll.data?.title;
  const { id } = useParams();

  const [poll, setPoll] = useState<CreatePollResponse>();

  const getPollDetails = async (id: number | undefined) => {
    if (id) {
      const poll = await getPoll(id);
      setPoll(poll.data);
    }
  };

  useEffect(() => {
    getPollDetails(id ? +id : undefined);
  }, [id]);

  return (
    <>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-4 lg:px-4 mt-5">
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center mt-5">
          <div className="lg:col-span-12">
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white mb-5">
              {pollTitle}
            </h1>
            <a
              className="inline-flex items-center gap-x-1 text-sm text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-500"
              href={"/users/"}
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
              Back to dashboard
            </a>
            <div>
              <a
                className="mt-5 text-lg text-blue-500 dark:text-blue-100 "
                href={"/poll/" + poll?.uniqueId}
              >
                Poll here
              </a>
            </div>
            <div className="my-3 max-w-xs w-full inline-flex gap-x-2">
              <input
                type="hidden"
                id="poll-url-input"
                value={"/poll/" + poll?.uniqueId}
              />

              <button
                type="button"
                className="js-clipboard [--is-toggle-tooltip:false] hs-tooltip relative py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-clipboard-target="#poll-url-input"
                data-clipboard-action="copy"
                data-clipboard-success-text="Copied"
              >
                {window.location.origin + "/poll/" + poll?.uniqueId}
                <span className="border-s ps-3.5 dark:border-gray-700">
                  <svg
                    className="js-clipboard-default w-4 h-4 group-hover:rotate-6 transition"
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
                    <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  </svg>

                  <svg
                    className="js-clipboard-success hidden w-4 h-4 text-blue-600 rotate-6"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-sm dark:bg-slate-700"
                  role="tooltip"
                >
                  <span className="js-clipboard-success-text">Copy</span>
                </span>
              </button>
            </div>

            <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
              <p className="py-2 px-3 mb-5 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                Live
              </p>
            </div>
          </div>

          <div className="lg:col-span-12 mt-10 lg:mt-0">
            <QRCodeGenerator />
          </div>
          <a
            className="py-2 px-3 my-5 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            href={"/poll/result/" + id}
          >
            Result
          </a>
        </div>
      </div>
    </>
  );
};
