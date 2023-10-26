import { useLocation } from "react-router-dom";

import QRCodeGenerator from "./QRCodeGenerator";
export const PollDetailsContent = () => {
  const location = useLocation();
  const pollTitle = location.state?.actiivatePoll.data?.title;
  console.log("ttttttttttttttttttttttt", location.state?.actiivatePoll.data);

  const uniqueId = location.state?.actiivatePoll.data?.uniqueId;
  return (
    <>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-4 lg:px-4 mt-5">
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center mt-5">
          <div className="lg:col-span-12">
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white mb-5">
              {pollTitle}
            </h1>
            <a
              className="mt-5 text-lg text-blue-500 dark:text-blue-100 "
              href={"http://localhost:4001/poll/" + uniqueId}>
              Poll here
            </a>

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
            href="/poll/result">
            Result
          </a>
        </div>
      </div>
    </>
  );
};
