export const MultiChoice = () => {
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
        <div className="flex inline-flex">
          <input
            type="text"
            className="py-3 px-5 block w-full border-solid border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            placeholder="Add options"
          />
        </div>
        <div className="flex inline-flex">
          <input
            type="text"
            className="py-3 px-5 block w-full border-solid border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            placeholder="Add options"
          />
        </div>
        <button
          type="button"
          className="w-[10rem] mt-5 py-1 px-1 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
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
        <button
          type="button"
          className="w-[10rem] h-[2.5rem] mt-5 py-1 px-1 inline-flex justify-center relative flex items-end w-full items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
        >
          Create
        </button>
      </div>
    </>
  );
};
