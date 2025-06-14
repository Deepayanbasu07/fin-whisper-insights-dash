
import { BookText } from "lucide-react";

export default function NarrativeCard() {
  return (
    <div className="rounded-2xl shadow-2xl bg-[rgba(32,26,53,0.70)] backdrop-blur-lg border border-[rgba(152,136,255,0.06)] p-6 glassmorph-card min-h-[175px]">
      <div className="flex items-center gap-3 mb-2">
        <BookText className="w-5 h-5 text-blue-200" />
        <h2 className="font-semibold text-lg text-white">Narrative Insights</h2>
      </div>
      <div className="flex flex-col items-center justify-center h-24">
        <span className="text-blue-300/70 text-sm">[LLM-generated summaries soon]</span>
      </div>
    </div>
  )
}
