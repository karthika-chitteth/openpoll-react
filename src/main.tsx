import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ProfileWrapper } from "./app/context/profile.context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProfileWrapper>
      <App />
    </ProfileWrapper>
  </React.StrictMode>
);
