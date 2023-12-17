import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/globals.css";
import "./styles/reset.css";
import "./styles/framework.css";
import "./styles/typography.css";

const rootDOM = document.getElementById("root");
if (rootDOM)
  ReactDOM.createRoot(rootDOM).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
