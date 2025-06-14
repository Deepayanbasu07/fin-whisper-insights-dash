
import { BarChart3 } from "lucide-react";

export default function SentimentCard() {
  return (
    <div className="rounded-2xl shadow-2xl bg-[rgba(32,26,53,0.70)] backdrop-blur-md border border-[rgba(152,136,255,0.06)] p-6 min-h-[210px] glassmorph-card">
      <div className="flex items-center gap-3 mb-2">
        <BarChart3 className="w-5 h-5 text-fuchsia-300" />
        <h2 className="font-semibold text-lg text-white">Sentiment & Stock Correlation</h2>
      </div>
      <div className="flex flex-col items-center justify-center h-36">
        <span className="text-fuchsia-200/60 text-sm">[Sentiment analytics & charts coming soon]</span>
      </div>
    </div>
  );
}
