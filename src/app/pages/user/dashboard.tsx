import { HeroSection } from "../../components/users/hero-section";
import { TableList } from "../../components/users/table-list";
import { TopBar } from "../../components/users/topbar";

export const UserDashboard = () => {
  return (
    <>
      <TopBar />
      <HeroSection />
      <TableList />
    </>
  );
};
