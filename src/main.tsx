import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { DevSupport } from "@react-buddy/ide-toolbox";
import { ComponentPreviews } from "./dev";
import { Admin } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Admin dataProvider={dataProvider}>
      <DevSupport ComponentPreviews={ComponentPreviews}>
        <App />
      </DevSupport>
    </Admin>{" "}
  </React.StrictMode>
);
