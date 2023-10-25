import "./App.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { useEffect } from "react";
import { useProfileContext } from "./app/context/profile.context";

function App() {
  const { setValue } = useProfileContext();

  useEffect(() => {
    console.log("abcd", localStorage.getItem("value"));

    const storedValue = localStorage.getItem("value");
    if (storedValue) {
      const parsedValue = JSON.parse(storedValue);
      setValue(parsedValue);
    }
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
