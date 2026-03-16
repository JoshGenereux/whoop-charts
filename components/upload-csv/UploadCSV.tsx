import { useState } from "react";
import styles from "./uploadCsv.module.css";

export default function UploadCSV() {
  const [fileName, setFileName] = useState<string>("Whoop CSV file name...");

  const handleFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    let file = event?.target?.files?.[0];
    let text = await file?.text();

    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className={styles.uploadContainer}>
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
