import { Route, Routes } from "react-router";
import Navigation from "./Navigation/Navigation";
import QrGenerator from "./qrGenerator/QrGenerator";
import ScanHistory from "./ScanHistory/ScanHistory";
import GenerateHistory from "./GenerateHistory/GenerateHistory";
import QrCodeScanner from "./QrCodeScanner/QrCodeScanner";

const Layout = () => {
  return (
    <div className="page">
      <Navigation />
      <main className="content">
        <Routes>
          <Route path="/generate" element={<QrGenerator />} />
          <Route path="/scan" element={<QrCodeScanner />} />
          <Route path="/historyGenerate" element={<GenerateHistory />} />
          <Route path="/historyScan" element={<ScanHistory />} />
        </Routes>
      </main>
      <footer className="footer">© 2025 QrCodes. endlesssjourney</footer>
    </div>
  );
};

export default Layout;
