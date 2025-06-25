import { GENERATE_DATA } from "../constants";
import styles from "./GenerateHistory.module.css";
import { QRCodeSVG } from "qrcode.react";
const GenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");

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

export default GenerateHistory;
