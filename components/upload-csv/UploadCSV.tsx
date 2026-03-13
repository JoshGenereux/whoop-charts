import { useState } from "react";
import styles from "./uploadCsv.module.css";

export default function UploadCSV() {
  const [fileName, setFileName] = useState<string>("Whoop CSV file name...");

  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event?.target?.value);

    if (event?.target?.value) {
      setFileName(event.target.value);
    }
  };

  return (
    <div className={styles.uploadRow}>
      <label className={styles.button}>
        Choose CSV
        <input
          type="file"
          accept=".csv"
          onChange={handleFile}
          className={styles.hiddenInput}
        />
      </label>

      <div className={styles.fileBox}>{fileName}</div>
    </div>
  );
}
