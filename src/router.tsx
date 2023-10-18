import { createBrowserRouter } from "react-router-dom";
import { Home } from "./app/pages/public/home";
import { SignIn } from "./app/pages/auth/signin";
import { SignUp } from "./app/pages/auth/signup";
import { UserDashboard } from "./app/pages/user/dashboard";
import { CreatePoll } from "./app/pages/user/create-poll";

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
    path: "user",
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
    ],
  },
]);
