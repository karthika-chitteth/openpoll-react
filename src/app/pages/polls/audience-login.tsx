import { AudienceForm } from "../../components/polls/audience-form";

import { TopBar } from "../../components/users/topbar";

export const AudienceLogin = () => {
  return (
    <>
      <div className="bg-[#1F1C46] h-[100vh]">
        <TopBar />
        <AudienceForm />
      </div>
    </>
  );
};
