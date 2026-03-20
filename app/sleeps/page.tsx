"use client";

import { useFiles } from "@/context/FileContext";
import styles from "./sleeps.module.css";

export default function Sleeps() {
  const { files } = useFiles();
  console.log(files);

  return (
    <div className={styles.sleepsContainer}>
      <div></div>
    </div>
  );
}
