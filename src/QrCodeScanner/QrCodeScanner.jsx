import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import styles from "./QrCodeScanner.module.css";
import { SCAN_DATA } from "../constants";

const QrCodeScanner = () => {
  const [scanned, setScanned] = useState("");

  const scanHandler = (result) => {
    setScanned(result[0].rawValue);

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");

    localStorage.setItem(
      SCAN_DATA,
      JSON.stringify([...prevData, result[0].rawValue])
    );
  };

  return (
    <div className={styles.container}>
      <Scanner
        onScan={scanHandler}
        sound={false}
        components={{
          finder: false,
        }}
        styles={{
          container: {
            width: 600,
            height: 500,
            position: "relative",
            bottom: 100,
          },
        }}
      />
      <p className={styles.result}>{scanned}</p>
    </div>
  );
};

export default QrCodeScanner;
