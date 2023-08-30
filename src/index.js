import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router } from "react-router-dom";
import { StytchProvider, initStytch } from "@stytch/stytch-react";

const stytch = initStytch(
  "public-token-test-dfb4f080-af66-422c-9937-04ebbfe5c3f5"
);

const root = ReactDOM.createRoot(document.getElementById("main"));
root.render(
  <React.StrictMode>
    <StytchProvider stytch={stytch}>
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
