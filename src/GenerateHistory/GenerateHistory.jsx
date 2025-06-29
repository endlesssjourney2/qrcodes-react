import { GENERATE_DATA } from "../constants";
import styles from "./GenerateHistory.module.css";
import Modal from "react-modal";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    height: 300,
    overflow: "hidden",
  },
};

const GenerateHistory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedText, setSelectedText] = useState("");

  function openModal(text) {
    setSelectedText(text);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");

  return (
    <div className={styles.container}>
      {data.map((text, index) => (
        <div
          className={styles.historyItem}
          onClick={() => openModal(text)}
          key={index}
        >
          <span className={styles.historyText}>{text}</span>
          <QRCodeSVG className={styles.qrCode} value={text} size={50} />
        </div>
      ))}
      <Modal
        className={styles.modal}
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="QR Modal"
      >
        <div className={styles.modalContainer}>
          <button className={styles.closeButton} onClick={closeModal}>
            X
          </button>
          <QRCodeSVG value={selectedText} size={200} />
          <h2 className={styles.modalTitle}>Scan: {selectedText}</h2>
        </div>
      </Modal>
    </div>
  );
};

export default GenerateHistory;
