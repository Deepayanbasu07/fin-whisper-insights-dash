
import { Search } from "lucide-react";

export default function MarketIntelligenceCard() {
  return (
    <div className="rounded-2xl shadow-2xl bg-[rgba(32,26,53,0.65)] backdrop-blur-lg border border-[rgba(152,136,255,0.07)] p-6 glassmorph-card flex flex-col min-h-[210px]">
      <div className="flex items-center gap-3 mb-2">
        <Search className="w-5 h-5 text-blue-300" />
        <h2 className="font-semibold text-lg text-white">Market Intelligence</h2>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <input
          type="text"
          placeholder="Enter ticker (e.g. AAPL)"
          className="bg-[rgba(35,29,83,.35)] border border-indigo-600/30 rounded-lg px-5 py-2 text-white/90 mb-2 outline-none focus:ring-2 focus:ring-blue-600/30 w-full text-center"
          disabled
        />
        <button className="bg-gradient-to-r from-blue-600/90 to-fuchsia-600/80 text-white font-medium py-2 px-7 rounded-lg shadow hover:scale-105 transition" disabled>
          Get Market Insights
        </button>
        <span className="text-xs text-blue-400/60 mt-3">[Real-time market insights coming soon]</span>
      </div>
    </div>
  )
}
