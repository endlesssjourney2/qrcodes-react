import { Route, Routes } from "react-router";
import Navigation from "./Navigation/Navigation";
import QrCodeScanner from "./qrCodeScanner/qrCodeScanner";
import QrGenerator from "./qrGenerator/QrGenerator";
import ScanHistory from "./ScanHistory/ScanHistory";
import GenerateHistory from "./GenerateHistory/GenerateHistory";

const Layout = () => {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/generate" element={<QrGenerator />} />
        <Route path="/scan" element={<QrCodeScanner />} />
        <Route path="/historyGenerate" element={<GenerateHistory />} />
        <Route path="/historyScan" element={<ScanHistory />} />
      </Routes>
    </div>
  );
};

export default Layout;
