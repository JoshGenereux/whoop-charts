"use client";

import { useFiles } from "@/context/FileContext";
import styles from "./sleeps.module.css";
import { getFileByName } from "@/utils/fileParser";

export default function Sleeps() {
  const { files } = useFiles();
  // console.log(files);

  const sleepCSV = getFileByName(files, "sleeps");
  console.log(sleepCSV);

  return (
    <div className={styles.sleepsContainer}>
      <div></div>
    </div>
  );
}
