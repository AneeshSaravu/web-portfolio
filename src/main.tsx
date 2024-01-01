import React from "react";
import ReactDOM from "react-dom/client";
import App from "./portfolioApp";

import "./styles/styles.scss";

const rootDOM = document.getElementById("root");
if (rootDOM)
  ReactDOM.createRoot(rootDOM).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
