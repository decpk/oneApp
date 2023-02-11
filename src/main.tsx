import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store, history } from "./redux/store";
import "./index.scss";
import "typeface-roboto/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App store={store} history={history} />
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
