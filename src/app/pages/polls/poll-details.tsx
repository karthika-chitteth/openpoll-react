import BarChart from "../../components/polls/barchart";
import { PollDetailsContent } from "../../components/polls/poll-details-content";
import { TopBar } from "../../components/users/topbar";

export const PollDetails = () => {
  return (
    <>
      <TopBar />
      <PollDetailsContent />
      <BarChart />
    </>
  );
};
