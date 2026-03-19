"use client";

import { createContext, useContext, useState } from "react";

type FileContextType = {
  files: File[];
  setFiles: (files: File[]) => void;
  clearFiles: (files: File[]) => void;
};

const FileContext = createContext<FileContextType | null>(null);

export const FileProvider = ({ children }: { children: React.ReactNode }) => {
  const [files, setFiles] = useState<File[]>([]);

  const clearFiles = () => {
    setFiles([]);
  };

  return (
    <FileContext.Provider value={{ files, setFiles, clearFiles }}>
      {children}
    </FileContext.Provider>
  );
};

export const useFiles = () => {
  const context = useContext(FileContext);

  if (!context) {
    throw new Error("useFiles must be used inside FileProvider");
  }

  return context;
};
