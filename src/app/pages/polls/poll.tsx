import { AudiencePoll } from "../../components/polls/audience-poll";
import { TopBar } from "../../components/users/topbar";

export const Poll = () => {
  const submited = sessionStorage.getItem("openpoll-submitted");

  return submited == null ? (
    <>
      <div className=" h-[100vh]">
        <TopBar />
        <AudiencePoll />
      </div>
    </>
  ) : (
    <>
      <TopBar />
      <div className="max-w-[85rem] w-full mx-auto px-4 mt-5 flex flex-col">
        <h1 className="mt-5 bg-green-500 text-sm text-white rounded-md p-4">
          Already submitted thank You.
        </h1>
      </div>
    </>
  );
};
