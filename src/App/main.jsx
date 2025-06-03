import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../App/styles/scss/base/_index.scss";
import App from "../App/App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/EstateinReact">
      <App />
    </BrowserRouter>
  </StrictMode>
);
