import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import Layout from "./Layout";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </StrictMode>
);
