import BarChart from "../../components/polls/barchart";
import { TopBar } from "../../components/users/topbar";

export const PollResult = () => {
  return (
    <>
      <div className=" h-[100vh]">
        <TopBar />
        <BarChart />
      </div>
    </>
  );
};
