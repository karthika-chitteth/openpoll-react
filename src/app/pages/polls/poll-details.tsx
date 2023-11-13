import { PollDetailsContent } from "../../components/polls/poll-details-content";
import { TopBar } from "../../components/users/topbar";

export const PollDetails = () => {
  const token = localStorage.getItem("value");

  return token !== null ? (
    <>
      <TopBar />
      <PollDetailsContent />
    </>
  ) : (
    <>
      <TopBar />
      <div className="max-w-[85rem] w-full mx-auto px-4 mt-5 flex flex-col">
        <h1 className="mt-5 bg-red-500 text-sm text-white rounded-md p-4">
          Not accessible
        </h1>
      </div>
    </>
  );
};
