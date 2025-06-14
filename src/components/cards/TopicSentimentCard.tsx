
import { Flame } from "lucide-react";

export default function TopicSentimentCard() {
  return (
    <div className="rounded-2xl shadow-2xl bg-[rgba(32,26,53,0.72)] backdrop-blur-lg border border-[rgba(152,136,255,0.07)] p-6 min-h-[160px] glassmorph-card">
      <div className="flex items-center gap-3 mb-2">
        <Flame className="w-5 h-5 text-orange-400" />
        <h2 className="font-semibold text-lg text-white">Topic Sentiment Heatmap</h2>
      </div>
      <div className="flex flex-col items-center justify-center h-16">
        <span className="text-orange-300/60 text-sm">[Topic sentiment heatmap soon]</span>
      </div>
    </div>
  )
}
