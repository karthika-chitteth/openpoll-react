import { TopBar } from "../../components/users/topbar";

export const Success = () => {
  return (
    <>
      <TopBar />
      <div className="max-w-[85rem] w-full mx-auto px-4 mt-5 flex flex-col">
        <h1 className="mt-5 bg-green-500 text-sm text-white rounded-md p-4">
          Thank you. Your answer submitted successfully!!!
        </h1>
      </div>
    </>
  );
};
