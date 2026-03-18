import { createContext, useRef, useState } from "react";
import styles from "./uploadCsv.module.css";

export const fileContext = createContext(File);

export default function UploadCSV() {
  const [folderName, setFolderName] = useState<string>("Whoop folder...");
  const [files, setFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const parseCSV = (file: File) => {
    console.log(file);
    let folder = file.webkitRelativePath.split("/")[0];
    setFolderName(folder);
  };

  const handleFolder = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;

    if (!fileList) return;

    const filesArray = Array.from(fileList);
    setFiles(filesArray);

    for (const file of filesArray) {
      parseCSV(file);
    }
  };

  const handleClear = () => {
    setFiles([]);
    setFolderName("Whoop folder...");

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className={styles.uploadContainer}>
      <label className={styles.button}>
        Choose CSV Folder
        <input
          ref={inputRef}
          type="file"
          multiple
          //@ts-ignore
          webkitdirectory="true"
          directory="true"
          onChange={handleFolder}
        />
      </label>

      <div className={styles.fileBox}>{folderName}</div>

      <button className={styles.clear} type="button" onClick={handleClear}>
        Clear Folder
      </button>
    </div>
  );
}
