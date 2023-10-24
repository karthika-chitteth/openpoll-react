import poll from "../../assets/1.svg";
export const PollDetailsContent = () => {
  return (
    <>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-4 lg:px-4 mt-5">
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center mt-5">
          <div className="lg:col-span-3">
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white mb-5">
              Poll 1
            </h1>
            <a className="mt-5 text-lg text-gray-800 dark:text-gray-400">
              https://example.com/poll/67qwe2343432d
            </a>

            <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
              <a
                className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                href="">
                Live
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 mt-10 lg:mt-0">
            <img
              className="w-full rounded-xl"
              src={poll}
              alt="Image Description"
            />
          </div>
        </div>
      </div>
    </>
  );
};
