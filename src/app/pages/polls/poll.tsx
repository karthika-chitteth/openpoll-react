import { AudiencePoll } from "../../components/polls/audience-poll";
import { TopBar } from "../../components/users/topbar";

export const Poll = () => {
  return (
    <>
      <div className=" h-[100vh]">
        <TopBar />
        <AudiencePoll />
      </div>
    </>
  );
};
