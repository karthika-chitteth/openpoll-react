import { useLocation } from "react-router-dom";
import { Title } from "../../components/polls/Title";
import { MultiChoice } from "../../components/polls/multichoice";
import { Type } from "../../components/polls/type";
import { TopBar } from "../../components/users/topbar";
interface CreatePollProps {
  isEdit: boolean;
}
export const CreatePoll: React.FC<CreatePollProps> = () => {
  const { pathname } = useLocation();
  const isEdit = pathname.includes("/users/edit-poll/");
  return (
    <>
      <TopBar />
      <Title isEdit={isEdit} />
      <Type />
      <MultiChoice isEdit={isEdit} />
    </>
  );
};
