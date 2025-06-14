
import React, { createContext, useContext, useState, ReactNode } from "react";

export type UploadedPDF = {
  name: string;
  file: File;
  text?: string;
  id: string;
};

type TranscriptContextType = {
  pdfs: UploadedPDF[];
  setPdfs: React.Dispatch<React.SetStateAction<UploadedPDF[]>>;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};

const TranscriptContext = createContext<TranscriptContextType | undefined>(undefined);

export function TranscriptProvider({ children }: { children: ReactNode }) {
  const [pdfs, setPdfs] = useState<UploadedPDF[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <TranscriptContext.Provider value={{ pdfs, setPdfs, activeIndex, setActiveIndex }}>
      {children}
    </TranscriptContext.Provider>
  );
}

export function useTranscript() {
  const ctx = useContext(TranscriptContext);
  if (!ctx) throw new Error("useTranscript must be used within a TranscriptProvider");
  return ctx;
}
