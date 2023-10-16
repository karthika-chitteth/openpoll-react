import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/public/home";
import { UserDashboard } from "./pages/user/dashboard";
import { SignUp } from "./pages/auth/signup";
import { SignIn } from "./pages/auth/signin";


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
]);
