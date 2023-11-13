export const Type = () => {
  return (
    <>
      <div className="max-w-[85rem] w-full mx-auto px-4 mt-5 flex flex-col">
        <select
          className="max-w-sm py-3 px-4 pr-9 block w-full border-solid border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
          // onChange={(e) => onSelectType(e.target.value)}
        >
          <option defaultValue={""}>Multiple choice</option>
          <option>word cloud</option>
        </select>
      </div>
    </>
  );
};
