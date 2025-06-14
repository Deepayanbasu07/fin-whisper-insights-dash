
import { MessageSquare } from "lucide-react";

export default function ChatBotCard() {
  return (
    <div className="rounded-2xl shadow-2xl bg-[rgba(32,26,53,0.65)] backdrop-blur-lg border border-[rgba(152,136,255,0.06)] p-7 min-h-[410px] glassmorph-card flex flex-col">
      <div className="flex items-center gap-3 mb-3">
        <MessageSquare className="w-6 h-6 text-fuchsia-300" />
        <h2 className="text-xl font-semibold text-white">AI Financial Q&A Chatbot</h2>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <p className="text-fuchsia-100/70 text-base italic mb-2">Chat with an AI analyst about your transcript! (feature coming soon)</p>
        <div className="w-2/3 h-12 bg-gradient-to-r from-fuchsia-500/40 to-indigo-600/30 rounded-xl blur-[2px] pointer-events-none"></div>
      </div>
    </div>
  )
}
