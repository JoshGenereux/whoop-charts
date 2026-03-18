import { useState } from "react";
import styles from "./uploadCsv.module.css";
import { useCSVReader } from "react-papaparse";

export default function UploadCSV() {
  const { CSVReader } = useCSVReader();
  const [fileName, setFileName] = useState<string>("Whoop CSV file name...");

  const handleFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    let file = event?.target?.files?.[0];
    let text = await file?.text();

    console.log(text);

    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <CSVReader
      onUploadAccepted={(results: any) => {
        console.log("---------------------------");
        console.log(results);
        console.log("---------------------------");
      }}
    >
      {({
        getRootProps,
        acceptedFile,
        ProgressBar,
        getRemoveFileProps,
      }: any) => (
        <>
          <div className={styles.uploadContainer}>
            <button
              className={styles.browseButton}
              type="button"
              {...getRootProps()}
            >
              Browse file
            </button>

            <div className={styles.fileName}>
              {acceptedFile && acceptedFile.name}
            </div>

            <button className={styles.removeButton} {...getRemoveFileProps()}>
              Remove
            </button>
          </div>
          <ProgressBar style={styles.progressBarBackgroundColor} />
        </>
      )}
    </CSVReader>
  );

  // return (
  //   <div className={styles.uploadContainer}>
  //     <CSVReader
  //       onUploadAccepted={(results: any) => {
  //         console.log("---------------------------");
  //         console.log(results);
  //         console.log("---------------------------");
  //       }}
  //     >
  //       <label className={styles.button}>
  //         Choose CSV
  //         <input
  //           type="file"
  //           accept=".csv"
  //           onChange={handleFile}
  //           className={styles.hiddenInput}
  //         />
  //       </label>

  //       <div className={styles.fileBox}>{fileName}</div>
  //     </CSVReader>
  //   </div>
  // );
}
