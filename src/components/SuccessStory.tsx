import { Frame, FramePanel } from "@/components/reui/frame";
import { Star } from "lucide-react";

export function SuccessStory() {
  const column1 = [
    {
      name: "নাফিস ইকবাল",
      score: "Band 8.0",
      detail: "Speaking: 8.0 | Overall: 8.0",
      text: "সুমাইয়া ম্যামের সাথে ১-অন-১ মক টেস্টে আমার ফ্লুয়েন্সি পজ সমস্যা দূর হয় এবং আসল টেস্টে ৮.০ স্কোর অর্জন করি!",
    },
    {
      name: "ফারহানা করিম",
      score: "Band 7.5",
      detail: "Writing: 7.5 | Overall: 7.5",
      text: "জাফরিন ম্যামের লাইন-বাই-লাইন এসে রিভিউতে রাইটিং স্ট্রাকচার নিখুঁত হওয়ায় আমার ব্যান্ড ৭.৫ নিশ্চিত হয়েছে।",
    },
  ];

  const column2 = [
    {
      name: "সাব্বির হোসেন",
      score: "Band 7.5",
      detail: "Reading: 8.5 | Overall: 7.5",
      text: "রিডিংয়ে ট্রু/ফলস/নট গিভেনে স্পিকিং নেস্টের স্ক্যানিং মেথডোলজি আসল টেস্টে আমার ১৫ মিনিট সময় বাঁচিয়েছে।",
    },
    {
      name: "আনিকা তাসনিম",
      score: "Band 8.0",
      detail: "Speaking: 8.0 | Overall: 8.0",
      text: "ডেইলি প্র্যাকটিস পার্টনার সিস্টেমের কারণে কোনো দ্বিধা ছাড়াই আত্মবিশ্বাসের সাথে স্পিকিংয়ে ৮.০ পেয়েছি।",
    },
  ];

  return (
    <section
      id="results"
      className="py-16 sm:py-24 bg-neutral-950 text-neutral-100 border-t border-neutral-800 relative overflow-hidden scroll-mt-14 sm:scroll-mt-16"
    >
      {/* Dark Subtle Micro Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-20" />

      {/* Atmospheric Soft Amber Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-2 block">
            VERIFIED SCORECARDS
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2.5">
            সফল শিক্ষার্থীদের অভিজ্ঞতা
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
            কানাডা, যুক্তরাজ্য, অস্ট্রেলিয়া ও আমেরিকার শীর্ষ প্রতিষ্ঠানে সফল আমাদের শিক্ষার্থীরা।
          </p>
        </div>

        {/* Single Frame Component containing 2-Column Grid */}
        <Frame className="relative bg-neutral-950/70 border-neutral-800 shadow-2xl rounded-2xl p-1.5 backdrop-blur-md">
          <FramePanel className="p-0 bg-neutral-900/90 border-neutral-800/80 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-800/80">
              {/* Column 1 */}
              <div className="flex flex-col divide-y divide-neutral-800/80">
                {column1.map((r) => (
                  <div
                    key={r.name}
                    className="p-6 sm:p-7 transition-colors hover:bg-neutral-800/40 text-left flex-1 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-3.5">
                        <div className="flex items-center gap-1 text-amber-400">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-950 text-amber-400 text-xs font-bold border border-amber-800/80">
                          {r.score}
                        </span>
                      </div>

                      <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6 font-normal">
                        "{r.text}"
                      </p>
                    </div>

                    <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-white">
                          {r.name}
                        </h4>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          {r.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="flex flex-col divide-y divide-neutral-800/80">
                {column2.map((r) => (
                  <div
                    key={r.name}
                    className="p-6 sm:p-7 transition-colors hover:bg-neutral-800/40 text-left flex-1 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-3.5">
                        <div className="flex items-center gap-1 text-amber-400">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-950 text-amber-400 text-xs font-bold border border-amber-800/80">
                          {r.score}
                        </span>
                      </div>

                      <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6 font-normal">
                        "{r.text}"
                      </p>
                    </div>

                    <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-white">
                          {r.name}
                        </h4>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          {r.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FramePanel>
        </Frame>
      </div>
    </section>
  );
}
