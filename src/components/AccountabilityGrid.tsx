import { Frame, FramePanel } from "@/components/reui/frame";
import {
  CalendarCheck2,
  Clock,
  FileCheck2,
  GraduationCap,
  MessageSquareCheck,
  ShieldCheck,
} from "lucide-react";

export function AccountabilityGrid() {
  const column1 = [
    {
      icon: Clock,
      title: "প্রতিদিন ৩–৪ ঘণ্টা প্র্যাকটিস",
      desc: "নির্ধারিত হোমওয়ার্ক প্রতিদিন সম্পন্ন করার মানসিকতা।",
    },
    {
      icon: FileCheck2,
      title: "বাধ্যতামূলক হোমওয়ার্ক ট্র্যাকিং",
      desc: "প্রতি সপ্তাহের এসে ও কিউ কার্ড নিয়মিত সাবমিট করা।",
    },
    {
      icon: MessageSquareCheck,
      title: "মেন্টরদের ফিডব্যাক গ্রহণ",
      desc: "ভুল সংশোধন করে ব্যান্ড স্কোর বাড়ানোর ইতিবাচক মনোভাব।",
    },
  ];

  const column2 = [
    {
      icon: CalendarCheck2,
      title: "পাঙ্কচুয়ালিটি ও টাইম ডিসিপ্লিন",
      desc: "১-অন-১ মক টেস্ট ও লাইভ সেশনে সময়মতো উপস্থিতি।",
    },
    {
      icon: ShieldCheck,
      title: "ক্যামব্রিজ এক্সাম সিমুলেশন",
      desc: "কঠোর সময়সীমার মধ্যে টেস্ট সম্পন্ন করার মানসিকতা।",
    },
    {
      icon: GraduationCap,
      title: "টেস্টের দিন পর্যন্ত মেন্টরিং",
      desc: "পরীক্ষার আগের দিন পর্যন্ত প্রস্তুতি ধরে রাখার গাইডলাইন।",
    },
  ];

  return (
    <section
      id="criteria"
      className="py-16 sm:py-24 bg-neutral-950 text-neutral-100 border-t border-neutral-800 relative overflow-hidden scroll-mt-14 sm:scroll-mt-16"
    >
      {/* Dark Subtle Micro Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-20" />

      {/* Atmospheric Soft Amber Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-amber-400 text-xs font-bold tracking-widest uppercase block mb-2">
            STANDARDS & COMMITMENT
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2.5">
            কাদের জন্য স্পিকিং নেস্টের এই চ্যালেঞ্জ?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
            প্যাসিভ ভিডিও দেখার কোর্স এটা নয় — প্রতিটি সেশনে অ্যাক্টিভ প্র্যাকটিস ও জবাবদিহিতা নিশ্চিত করা হয়।
          </p>
        </div>

        {/* Single Frame Component containing 2-Column Grid */}
        <Frame className="relative bg-neutral-950/70 border-neutral-800 shadow-2xl rounded-2xl p-1.5 backdrop-blur-md">
          <FramePanel className="p-0 bg-neutral-900/90 border-neutral-800/80 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-800/80">
              {/* Column 1 */}
              <div className="flex flex-col divide-y divide-neutral-800/80">
                {column1.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div
                      key={c.title}
                      className="p-5 sm:p-6 transition-colors hover:bg-neutral-800/40 text-left flex-1 flex flex-col justify-center"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-9 h-9 rounded-lg bg-amber-950 text-amber-400 border border-amber-800/80 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                            {c.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mt-1 font-normal">
                            {c.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Column 2 */}
              <div className="flex flex-col divide-y divide-neutral-800/80">
                {column2.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div
                      key={c.title}
                      className="p-5 sm:p-6 transition-colors hover:bg-neutral-800/40 text-left flex-1 flex flex-col justify-center"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-9 h-9 rounded-lg bg-amber-950 text-amber-400 border border-amber-800/80 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                            {c.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mt-1 font-normal">
                            {c.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </FramePanel>
        </Frame>
      </div>
    </section>
  );
}
