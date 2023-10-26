export const AudiencePoll = () => {
  // Async function to handle the create button click
  const saveName = async () => {};
  return (
    <>
      <main className="w-full max-w-md mx-auto mt-10">
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Welcome to poll !!!
              </h1>
            </div>

            <div className="mt-5">
              <form>
                <div className="grid gap-y-4">
                  <div>
                    <label className="block text-sm mb-2 dark:text-white">
                      Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        className="py-3 px-4 mb-5 block w-full border-solid border-2 border-gray-200  rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        placeholder="Name"
                        // value="value"
                        // onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    onClick={saveName}>
                    continue
                  </button>
                  <p className="mt-5 mb-2 text-sm leading-2 text-gray-600 text-center">
                    OR
                  </p>
                  <a
                    className=" mb-5 text-sm leading-4 text-gray-800 text-center"
                    href="">
                    Continue as anonymous
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
