import React, { useRef, useState } from "react";
import { FileText, Upload, X } from "lucide-react";

type UploadedPDF = {
  name: string;
  file: File;
  text?: string;
  id: string;
};

export default function PdfUploadCard() {
  const [pdfs, setPdfs] = useState<UploadedPDF[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files) return;
    setLoading(true);

    // Simulate extraction, replace with actual backend call
    const uploads: UploadedPDF[] = [];
    for (let i = 0; i < files.length; ++i) {
      const file = files[i];
      // Stub: Simulate extraction (replace with backend API call for actual extraction)
      const text = await new Promise<string>((res) => setTimeout(() => res("Simulated extracted text sample from: " + file.name), 1000));
      uploads.push({
        name: file.name,
        file,
        text,
        id: Math.random().toString(36).slice(2),
      });
    }
    setPdfs((prev) => [...prev, ...uploads]);
    setLoading(false);
    inputRef.current && (inputRef.current.value = "");
    setActiveIndex(pdfs.length);
  }

  function removePdf(idx: number) {
    setPdfs((prev) => prev.filter((_, i) => i !== idx));
    if (idx === activeIndex && pdfs.length > 1) setActiveIndex(Math.max(0, idx - 1));
    else if (pdfs.length === 1) setActiveIndex(0);
  }

  return (
    <div className="relative rounded-2xl shadow-2xl bg-[rgba(32,26,53,0.72)] backdrop-blur-lg border border-[rgba(152,136,255,0.07)] p-7 min-h-[410px] flex flex-col glassmorph-card">
      <div className="flex items-center gap-3 mb-6">
        <FileText className="w-6 h-6 text-indigo-300" />
        <h2 className="text-xl font-semibold text-white tracking-tight">
          Upload & Preview Earnings Transcripts
        </h2>
      </div>
      <label
        htmlFor="pdf-upload"
        className="flex items-center gap-2 bg-gradient-to-r from-indigo-700/90 to-fuchsia-600/90 px-4 py-2 rounded-lg border-none text-white font-medium shadow-lg hover:scale-105 transition transform cursor-pointer w-fit mb-4"
      >
        <Upload className="w-5 h-5" />
        <span>Upload PDF{pdfs.length === 0 ? "" : "s"}</span>
        <input
          ref={inputRef}
          id="pdf-upload"
          type="file"
          accept="application/pdf"
          multiple
          className="hidden"
          onChange={handleUpload}
          disabled={loading}
        />
      </label>
      {loading && (
        <div className="text-accent-foreground flex items-center gap-2 mb-3">
          <span className="animate-pulse">Extracting PDF...</span>
        </div>
      )}
      {pdfs.length > 0 ? (
        <>
          <div className="flex mb-3 gap-2 overflow-x-auto pb-1">
            {pdfs.map((pdf, i) => (
              <button
                key={pdf.id}
                className={`px-4 py-2 rounded-lg bg-[rgba(55,44,84,.7)] border font-medium text-sm shadow ${
                  i === activeIndex
                    ? "border-indigo-400 text-indigo-100"
                    : "border-[rgba(156,163,175,0.14)] text-gray-300 hover:border-indigo-300 hover:bg-[rgba(84,64,112,0.54)]"
                } mr-1 flex items-center gap-1`}
                onClick={() => setActiveIndex(i)}
              >
                <FileText className="w-4 h-4 text-indigo-200" />
                {pdf.name}
                <X
                  className="w-4 h-4 text-red-400 hover:scale-125 cursor-pointer ml-1"
                  onClick={e => {
                    e.stopPropagation();
                    removePdf(i);
                  }}
                />
              </button>
            ))}
          </div>
          {/* Preview the extracted text */}
          <div className="flex-1 overflow-y-auto p-4 rounded-xl bg-[rgba(38,32,56,0.70)] border border-[rgba(156,163,175,0.10)] text-sm text-indigo-100 max-h-44 shadow-inner min-h-[96px]">
            <pre style={{whiteSpace: 'pre-wrap'}}>{pdfs[activeIndex]?.text || "No extracted text."}</pre>
          </div>
        </>
      ) : (
        <div className="text-indigo-100/70 italic mt-16 flex flex-col items-center">
          <span>No transcripts uploaded yet.</span>
          <span className="text-[10px] text-indigo-400 mt-2">PDF upload is local-only for now. Will connect backend API next!</span>
        </div>
      )}
    </div>
  );
}
