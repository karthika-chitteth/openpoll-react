import { Title } from "../../components/polls/Title";
import { MultiChoice } from "../../components/polls/multichoice";
import { Type } from "../../components/polls/type";
import { TopBar } from "../../components/users/topbar";

export const CreatePoll = () => {
  return (
    <>
      <TopBar />
      <Title />
      <Type />
      <MultiChoice />
    </>
  );
};
