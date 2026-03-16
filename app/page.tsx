"use client";

import UploadCSV from "@/components/upload-csv/UploadCSV";
import styles from "./page.module.css";
import ProgressCircle from "@/components/progress-circle/ProgressCircle";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <div className={styles.circlesContainer}>
        <ProgressCircle percentage="75" progressColor="lightBlue" />
        <ProgressCircle percentage="82" progressColor="green" />
        <ProgressCircle percentage="67" progressColor="blue" />
      </div>
      <UploadCSV />
    </div>
  );
}
