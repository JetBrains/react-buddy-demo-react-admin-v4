import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DevSupport } from "@react-buddy/ide-toolbox";
import { ComponentPreviews } from "./dev";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DevSupport ComponentPreviews={ComponentPreviews}>
      <App />
    </DevSupport>
  </React.StrictMode>
);
