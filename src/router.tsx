import { createBrowserRouter } from "react-router-dom";
import { Home } from "./app/pages/public/home";
import { SignIn } from "./app/pages/auth/signin";
import { SignUp } from "./app/pages/auth/signup";
import { UserDashboard } from "./app/pages/user/dashboard";
import { CreatePoll } from "./app/pages/polls/create-poll";
import { PollDetails } from "./app/pages/polls/poll-details";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
  },
  {
    path: "auth",
    children: [
      {
        path: "signin",
        element: <SignIn />,
      },
    ],
  },
  {
    path: "auth",
    children: [
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "users",
    element: "",
    children: [
      {
        path: "",
        element: <UserDashboard />,
      },
    ],
  },
  {
    path: "user",
    element: "",
    children: [
      {
        path: "create-poll",
        element: <CreatePoll />,
      },
      {
        path: "poll-details",
        element: <PollDetails />,
      },
      {
        path: "edit-poll/:id",
        element: <CreatePoll />,
      },
    ],
  },
]);
