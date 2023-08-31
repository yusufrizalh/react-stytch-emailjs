import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import * as stytch from "stytch";
import { initStytch, StytchProvider } from "@stytch/stytch-react";
import { BrowserRouter as Router } from "react-router-dom";

const myStytch = initStytch(
  "public-token-test-ef20f454-58c0-4865-89ab-d8f9e8cf414b"
); // public token

const root = ReactDOM.createRoot(document.getElementById("main"));
root.render(
  <React.StrictMode>
    <StytchProvider stytch={myStytch}>
      <Router>
        <App />
      </Router>
    </StytchProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
