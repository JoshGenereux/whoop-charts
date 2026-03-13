"use client";

import UploadCSV from "@/components/upload-csv/UploadCSV";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <UploadCSV />
    </div>
  );
}
