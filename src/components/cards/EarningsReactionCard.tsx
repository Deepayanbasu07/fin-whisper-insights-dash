
import { TrendingUp } from "lucide-react";

export default function EarningsReactionCard() {
  return (
    <div className="rounded-2xl shadow-2xl bg-[rgba(32,26,53,0.70)] backdrop-blur-lg border border-[rgba(152,136,255,0.07)] p-6 min-h-[175px] glassmorph-card">
      <div className="flex items-center gap-3 mb-2">
        <TrendingUp className="w-5 h-5 text-green-300" />
        <h2 className="font-semibold text-lg text-white">Earnings Reaction Tracker</h2>
      </div>
      <div className="flex flex-col items-center justify-center h-20">
        <span className="text-green-200/60 text-sm">[Stock reaction analysis soon]</span>
      </div>
    </div>
  )
}
