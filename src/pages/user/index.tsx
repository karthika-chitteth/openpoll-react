import { Outlet } from "react-router-dom";

export const UserIndex = () => {
  return (
    <>
      <h1>user layout</h1>
      <hr />
      <div>
        <Outlet />
      </div>
    </>
  );
};
