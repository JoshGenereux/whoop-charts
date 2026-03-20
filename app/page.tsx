"use client";

import UploadCSV from "@/components/upload-csv/UploadCSV";
import styles from "./page.module.css";
import ProgressCircle from "@/components/progress-circle/ProgressCircle";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <div className={styles.circlesContainer}>
        <ProgressCircle percentage="75" progressColor="rgb(129, 188, 215)" />
        <ProgressCircle percentage="96" progressColor="rgb(85, 191, 90)" />
        <ProgressCircle percentage="52" progressColor="rgb(71, 108, 229)" />
      </div>

      <div className={styles.info}>Choose a csv folder from whoop!</div>

      <UploadCSV />
    </div>
  );
}
