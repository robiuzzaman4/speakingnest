export function NoticeBar() {
  return (
    <div className="w-full bg-neutral-900 text-neutral-300 py-2.5 px-4 text-center">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-xs sm:text-sm font-medium tracking-wide">
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
        <span>
          পরবর্তী ৬০ দিনের স্পেশালাইজড ব্যাচে এনরোলমেন্ট চলছে — <strong className="text-amber-400 font-semibold">আসন সংখ্যা সীমিত!</strong>
        </span>
      </div>
    </div>
  );
}
