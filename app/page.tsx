"use client";

import UploadCSV from "@/components/upload-csv/UploadCSV";
import styles from "./page.module.css";
import ProgressCircle from "@/components/progress-circle/ProgressCircle";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <div className={styles.circlesContainer}>
        <ProgressCircle />
        <ProgressCircle />
        <ProgressCircle />
      </div>
      <UploadCSV />
    </div>
  );
}
