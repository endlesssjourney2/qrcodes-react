import React from "react";
import { Link } from "react-router";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.container}>
      <Link className={styles.link} to="/generate">
        Generate Qr Code
      </Link>
      <Link className={styles.link} to="scan">
        Scan Qr Code
      </Link>
      <Link className={styles.link} to="/historyGenerate">
        History Generate
      </Link>
      <Link className={styles.link} to="/historyScan">
        History Scan
      </Link>
    </nav>
  );
};

export default Navigation;
