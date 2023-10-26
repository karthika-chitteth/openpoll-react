import { createBrowserRouter } from "react-router-dom";
import { Home } from "./app/pages/public/home";
import { SignIn } from "./app/pages/auth/signin";
import { SignUp } from "./app/pages/auth/signup";
import { UserDashboard } from "./app/pages/user/dashboard";
import { CreatePoll } from "./app/pages/polls/create-poll";
import { PollDetails } from "./app/pages/polls/poll-details";
import { Poll } from "./app/pages/polls/poll";
import { AudienceLogin } from "./app/pages/polls/audience-login";
import { PollResult } from "./app/pages/polls/poll-result";

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
    path: "users",
    element: "",
    children: [
      {
        path: "create-poll",
        element: <CreatePoll isEdit={false} />,
      },
      {
        path: "edit-poll/:id",
        element: <CreatePoll isEdit={false} />,
      },
      {
        path: "poll-details",
        element: <PollDetails />,
      },
      {
        path: "poll-details/:id",
        element: <PollDetails />,
      },
    ],
  },
  {
    path: "poll",
    element: "",
    children: [
      {
        path: "form/:id",
        element: <Poll />,
      },
      {
        path: "result",
        element: <PollResult />,
      },
      {
        path: ":id",
        element: <AudienceLogin />,
      },
    ],
  },
]);
