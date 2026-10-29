"use client";

import { Frame, FramePanel } from "@/components/reui/frame";
import routineData from "@/data/routine.json";
import {
  Calendar,
  Flame,
  Search,
} from "lucide-react";
import { useMemo, useState } from "react";

function cleanTask(text: string) {
  return text.replace(/\[cite:\s*\d+\]/g, "").trim();
}

export function RoutineChart() {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = [
    { label: "Day 1–10", start: 1, end: 10 },
    { label: "Day 11–20", start: 11, end: 20 },
    { label: "Day 21–30", start: 21, end: 30 },
    { label: "Day 31–40", start: 31, end: 40 },
    { label: "Day 41–50", start: 41, end: 50 },
    { label: "Day 51–60", start: 51, end: 60 },
  ];

  const currentTab = tabs[selectedTab];

  // Filter schedule based on active 10-day tab or search
  const displayedSchedule = useMemo(() => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return routineData.schedule.filter((item) => {
        return (
          item.day.toLowerCase().includes(q) ||
          cleanTask(item.hour_1).toLowerCase().includes(q) ||
          cleanTask(item.hour_2).toLowerCase().includes(q) ||
          cleanTask(item.hour_3).toLowerCase().includes(q) ||
          cleanTask(item.hour_4).toLowerCase().includes(q) ||
          cleanTask(item.hour_5).toLowerCase().includes(q)
        );
      });
    }

    return routineData.schedule.slice(currentTab.start - 1, currentTab.end);
  }, [currentTab, searchQuery]);

  return (
    <section
      id="routine"
      className="py-16 sm:py-24 bg-neutral-950 text-neutral-100 border-t border-neutral-800 relative overflow-hidden scroll-mt-14 sm:scroll-mt-16"
    >
      {/* Dark Subtle Micro Grid Pattern matching Hero */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-25" />

      {/* Atmospheric Soft Amber Glow matching Hero */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950 border border-amber-800 text-amber-400 text-xs font-semibold tracking-wide mb-4">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>DAILY STUDY BLUEPRINT • ৩০০ ঘণ্টার সুনির্দিষ্ট প্ল্যান</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-2">
            IELTS 60-Day{" "}
            <span className="font-serif italic font-normal text-amber-400">
              Candidate's Routine
            </span>
          </h2>
        </div>

        {/* Compact Days Tabs & Search Strip */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3.5 mb-5">
          {/* 6 Modern Pill Tabs in Segmented Control Bar */}
          <div className="inline-flex p-1 rounded-xl sm:rounded-full bg-neutral-900/90 border border-neutral-800 backdrop-blur-sm overflow-x-auto max-w-full">
            {tabs.map((tab, idx) => {
              const active = selectedTab === idx && !searchQuery;
              return (
                <button
                  type="button"
                  key={tab.label}
                  onClick={() => {
                    setSelectedTab(idx);
                    setSearchQuery("");
                  }}
                  className={`px-3.5 sm:px-4 py-1.5 rounded-lg sm:rounded-full text-xs font-semibold whitespace-nowrap transition-all ${active
                    ? "bg-amber-500 text-neutral-950 font-bold shadow-md shadow-amber-500/20"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-800/60"
                    }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Search Input with Pill Design */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="টপিক বা দিন সার্চ করুন (যেমন: Mock)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-900/90 border border-neutral-800 rounded-full pl-10 pr-8 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500/80 focus:ring-1 focus:ring-amber-500/50 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Status Line */}
        <div className="flex items-center gap-2 text-xs text-neutral-400 mb-3 px-1">
          <span className="font-semibold text-neutral-200">
            {searchQuery ? "সার্চ ফলাফল" : currentTab.label}
          </span>
          <span>•</span>
          <span>{displayedSchedule.length} দিনের রুটিন দেখানো হচ্ছে</span>
        </div>

        {/* Modern Tabular Routine using Frame Component from @reui/frame */}
        {displayedSchedule.length === 0 ? (
          <Frame className="bg-neutral-950/70 border-neutral-800 shadow-2xl rounded-2xl p-1.5 backdrop-blur-sm overflow-hidden">
            <FramePanel className="bg-neutral-900/90 border-neutral-800/80 p-12 text-center text-neutral-400 text-sm rounded-xl">
              কোনো ফলাফল পাওয়া যায়নি। অন্য কোনো কীওয়ার্ড লিখে সার্চ করুন।
            </FramePanel>
          </Frame>
        ) : (
          <Frame className="bg-neutral-950/70 border-neutral-800 shadow-2xl rounded-2xl p-1.5 backdrop-blur-sm overflow-hidden">
            <FramePanel className="bg-neutral-900/90 border-neutral-800/80 p-0 overflow-hidden rounded-lg">
              <div className="overflow-x-auto rounded-xl">
                <table className="w-full text-left border-separate border-spacing-0 text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-neutral-950 text-amber-400 font-bold uppercase text-[11px] sm:text-xs tracking-wider">
                      <th className="py-3.5 px-4 w-28 shrink-0 border-b border-neutral-800">দিন (Day)</th>
                      <th className="py-3.5 px-4 min-w-42.5 border-b border-neutral-800">১ম ঘণ্টা (Hour 1)</th>
                      <th className="py-3.5 px-4 min-w-42.5 border-b border-neutral-800">২য় ঘণ্টা (Hour 2)</th>
                      <th className="py-3.5 px-4 min-w-42.5 border-b border-neutral-800">৩য় ঘণ্টা (Hour 3)</th>
                      <th className="py-3.5 px-4 min-w-42.5 border-b border-neutral-800">৪র্থ ঘণ্টা (Hour 4)</th>
                      <th className="py-3.5 px-4 min-w-45 border-b border-neutral-800">৫ম ঘণ্টা (Hour 5)</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs sm:text-[13px]">
                    {displayedSchedule.map((item, index) => {
                      const isMockDay =
                        cleanTask(item.hour_1).toUpperCase().includes("MOCK") ||
                        cleanTask(item.hour_2).toUpperCase().includes("MOCK") ||
                        cleanTask(item.hour_3).toUpperCase().includes("MOCK");
                      const isLastRow = index === displayedSchedule.length - 1;

                      return (
                        <tr
                          key={item.day}
                          className={`transition-colors ${isMockDay
                            ? "bg-amber-950/30 hover:bg-amber-950/50"
                            : "hover:bg-neutral-800/40 even:bg-neutral-950/25"
                            }`}
                        >
                          {/* Day Column */}
                          <td
                            className={`py-3.5 px-4 font-bold whitespace-nowrap ${!isLastRow ? "border-b border-neutral-800/60" : ""
                              }`}
                          >
                            {isMockDay ? (
                              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500 text-neutral-950 font-black text-xs shadow-sm shadow-amber-500/20">
                                <span>{item.day}</span>
                                <Flame className="w-3.5 h-3.5 text-neutral-950 shrink-0" />
                              </div>
                            ) : (
                              <span className="font-mono px-2.5 py-1 rounded-full bg-neutral-800 text-amber-400 font-semibold border border-neutral-700/80 text-xs">
                                {item.day}
                              </span>
                            )}
                          </td>

                          {/* Hour 1 */}
                          <td
                            className={`py-3.5 px-4 text-neutral-300 leading-relaxed font-normal ${!isLastRow ? "border-b border-neutral-800/60" : ""
                              }`}
                          >
                            {cleanTask(item.hour_1)}
                          </td>

                          {/* Hour 2 */}
                          <td
                            className={`py-3.5 px-4 text-neutral-300 leading-relaxed font-normal ${!isLastRow ? "border-b border-neutral-800/60" : ""
                              }`}
                          >
                            {cleanTask(item.hour_2)}
                          </td>

                          {/* Hour 3 */}
                          <td
                            className={`py-3.5 px-4 text-neutral-300 leading-relaxed font-normal ${!isLastRow ? "border-b border-neutral-800/60" : ""
                              }`}
                          >
                            {cleanTask(item.hour_3)}
                          </td>

                          {/* Hour 4 */}
                          <td
                            className={`py-3.5 px-4 text-neutral-300 leading-relaxed font-normal ${!isLastRow ? "border-b border-neutral-800/60" : ""
                              }`}
                          >
                            {cleanTask(item.hour_4)}
                          </td>

                          {/* Hour 5 */}
                          <td
                            className={`py-3.5 px-4 text-neutral-300 leading-relaxed font-normal ${!isLastRow ? "border-b border-neutral-800/60" : ""
                              }`}
                          >
                            {cleanTask(item.hour_5)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </FramePanel>
          </Frame>
        )}

        {/* Bottom CTA Banner matching Pricing Frame radius (rounded-2xl p-1.5, rounded-xl panel) */}
        <Frame className="mt-10 bg-neutral-950/70 border-neutral-800 shadow-xl rounded-2xl p-1.5 backdrop-blur-sm overflow-hidden">
          <FramePanel className="bg-neutral-900/90 border-neutral-800/80 p-6 sm:p-8 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-1.5">
                সম্পূর্ণ ৬০ দিনের এই রুটিন মেন্টরদের সাথে শেষ করতে চান?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300">
                সুমাইয়া জেরিন ও জাফরিন এলিয়েন-এর প্রত্যক্ষ তদারকিতে প্রতিটি দিনের টাস্ক শেষ করুন।
              </p>
            </div>
            <a
              href="https://wa.me/8801521435603?text=Hello%20Speaking%20Nest!%20I%20am%20interested%20in%20the%20IELTS%2060-Day%20Full%20Course%20(5500%20Tk)%20routine."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-amber rounded-full px-7 py-3 text-sm font-bold tracking-wide shrink-0 whitespace-nowrap shadow-none hover:shadow-none"
            >
              কোর্সে যুক্ত হয়ে রুটিন শুরু করুন
            </a>
          </FramePanel>
        </Frame>
      </div>
    </section>
  );
}
