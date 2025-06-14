
export default function DashboardFooter() {
  return (
    <footer className="w-full px-8 py-4 border-t border-[rgba(156,163,175,0.08)] bg-[rgba(30,24,54,0.55)] backdrop-blur text-sm text-gray-300 flex flex-wrap justify-between items-center z-40">
      <span>
        &copy; {new Date().getFullYear()} FinWhisper. All rights reserved.
      </span>
      <div className="flex gap-5">
        <a href="#" className="hover:text-white transition text-muted-foreground">Terms</a>
        <a href="#" className="hover:text-white transition text-muted-foreground">Privacy</a>
        <a href="#" className="hover:text-white transition text-muted-foreground">Security</a>
        <a href="#" className="hover:text-white transition text-muted-foreground">Status</a>
        <a href="#" className="hover:text-white transition text-muted-foreground">Docs</a>
      </div>
    </footer>
  );
}
