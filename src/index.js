import React from "react";
import ReactDOM from "react-dom";

import { JobContextProvider } from "./components/JobContext";

import App from "./App";

ReactDOM.render(
  <JobContextProvider>
    <App />
  </JobContextProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
