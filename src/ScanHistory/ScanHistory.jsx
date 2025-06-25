import React from "react";
import { SCAN_DATA } from "../constants";
import { QRCodeSVG } from "qrcode.react";
import styles from "./ScanHistory.module.css";

const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");

  return (
    <div className={styles.container}>
      {data.map((text, index) => (
        <div className={styles.historyItem} key={index}>
          <span className={styles.historyText}>{text}</span>
          <QRCodeSVG className={styles.qrCode} value={text} size={50} />
        </div>
      ))}
    </div>
  );
};

export default ScanHistory;
