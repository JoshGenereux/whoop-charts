import { useState } from "react";
import styles from "./uploadCsv.module.css";

export default function UploadCSV() {
  const [fileName, setFileName] = useState<string>("Whoop CSV file name...");

  const handleFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event?.target?.files?.[0]);
    let file = event?.target?.files?.[0];
    let text = await file?.text();

    console.log(text);

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
