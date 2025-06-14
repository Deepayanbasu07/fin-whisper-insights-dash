
import {
  BarChart2,
  FileText,
  Search,
  BookOpen,
  FlaskConical,
  Settings,
  HelpCircle,
} from "lucide-react";

const navItems = [
  { title: "Dashboard", icon: BarChart2 },
  { title: "Transcripts", icon: FileText },
  { title: "Research", icon: Search },
  { title: "Models", icon: FlaskConical },
  { title: "Reports", icon: BookOpen },
  { title: "Settings", icon: Settings },
  { title: "Help", icon: HelpCircle },
];

export default function DashboardSidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 min-w-[220px] bg-[rgba(30,24,54,0.62)] backdrop-blur-xl border-r border-[rgba(156,163,175,0.1)] shadow-lg rounded-tr-xl rounded-br-xl py-8 px-3">
      <div className="mb-6">
        <span className="font-extrabold text-2xl tracking-wide text-white drop-shadow-lg select-none">FinWhisper</span>
      </div>
      <nav className="flex flex-col gap-2" aria-label="Main Navigation">
        {navItems.map((item) => (
          <a
            key={item.title}
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/80 hover:bg-[rgba(255,255,255,0.07)] hover:text-accent-foreground transition-colors font-medium"
          >
            <item.icon className="w-5 h-5 text-indigo-300" />
            <span>{item.title}</span>
          </a>
        ))}
      </nav>
      <div className="mt-auto flex flex-col gap-2 pt-4 border-t border-[rgba(156,163,175,0.08)]">
        {/* Future: user profile or quick settings */}
      </div>
    </aside>
  );
}
