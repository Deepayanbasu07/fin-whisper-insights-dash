
import { User } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="sticky top-0 w-full z-50 bg-[rgba(30,24,54,0.6)] backdrop-blur-md border-b border-[rgba(156,163,175,0.08)] flex items-center px-8 py-5">
      <div className="flex-1 flex items-center gap-3">
        <img
          src="https://lovable.dev/opengraph-image-p98pqg.png"
          alt="FinWhisper Logo"
          className="w-10 h-10 rounded-lg ring-2 ring-indigo-400/40"
        />
        <span className="text-2xl font-bold text-white tracking-tight drop-shadow select-none">
          FinWhisper Insights Dash
        </span>
        <span className="ml-3 py-1 px-3 rounded-full bg-gradient-to-r from-indigo-500/80 to-fuchsia-600/80 text-xs font-semibold text-white/90 shadow">
          AI Financial Analyst
        </span>
      </div>
      <div className="flex items-center gap-6">
        <button className="relative group focus:outline-none">
          <User className="w-6 h-6 text-indigo-200" />
          <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-sm text-white bg-black/70 px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition">
            Profile (coming soon)
          </span>
        </button>
      </div>
    </header>
  );
}
