import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Layout from "./Layout";
import "./main.css";
import QrCodeScanner from "./qrCodeScanner/qrCodeScanner";
import QrGenerator from "./qrGenerator/QrGenerator";
import Navigation from "./Navigation/Navigation";
import Layout from "./Layout";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </StrictMode>
);
