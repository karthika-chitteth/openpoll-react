import "./App.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { useEffect } from "react";
import { useProfileContext } from "./app/context/profile.context";

function App() {
  const { setValue } = useProfileContext();
  useEffect(() => {
    console.log("abcd", setValue(localStorage.getItem("value")));

    setValue(localStorage.getItem("value"));
  });
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
