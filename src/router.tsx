import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/public/home";
import { Login } from "./pages/auth/login";
import { UserIndex } from "./pages/user";
import { UserDashboard } from "./pages/user/dashboard";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
  },
  {
    path: "auth",
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "user",
    element: <UserIndex />,
    children: [
      {
        path: "",
        element: <UserDashboard />,
      },
    ],
  },
]);
