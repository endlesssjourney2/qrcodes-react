import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import styles from "./QrGenerator.module.css";
import { GENERATE_DATA } from "../constants";

const QrGenerator = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const onClickHandler = () => {
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");

    localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));

    setResult(value);
    setValue("");
  };

  const onChangeHandler = () => {
    setValue(event.target.value);
    setResult("");
  };

  console.log(value);
  return (
    <div className={styles.container}>
      <input
        type="text"
        value={value}
        onChange={onChangeHandler}
        className={styles.input}
        placeholder="Type text..."
      />
      <button type="button" onClick={onClickHandler} className={styles.button}>
        Generate
      </button>
      {result !== "" && (
        <QRCodeSVG value={result} size={200} className={styles.qrCode} />
      )}
    </div>
  );
};

export default QrGenerator;
