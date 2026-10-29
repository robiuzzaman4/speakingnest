import { Frame, FramePanel } from "@/components/reui/frame";
import {
  Calendar,
  Clock,
  MessageCircle,
  PhoneCall,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

export function PricingPlans() {
  return (
    <section
      id="plans"
      className="py-16 sm:py-24 bg-neutral-950 text-neutral-100 border-t border-neutral-800 relative overflow-hidden scroll-mt-14 sm:scroll-mt-16"
    >
      {/* Dark Subtle Micro Grid Pattern matching Hero */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-30" />

      {/* Atmospheric Soft Amber Glow matching Hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Frame Component from @reui/frame for concentric modern card framing */}
        <Frame className="relative bg-neutral-950/70 border-neutral-800 shadow-2xl rounded-2xl p-1.5 backdrop-blur-md">
          <FramePanel className="bg-neutral-900/90 border-neutral-800/80 text-center px-4 py-6 sm:p-10 lg:p-12">
            {/* Badge: Special Intake / Limited Seats */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-amber-950 border border-amber-800 text-amber-400 text-[11px] sm:text-xs font-semibold tracking-wide mb-4 max-w-full">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
              <span className="leading-tight text-center">
                স্পেশাল ইনটেক • পরবর্তী ৬০ দিনের ব্যাচে ভর্তি চলছে
              </span>
            </div>

            {/* Punchy Headline with Hero's signature Serif Italic Accent */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
              IELTS 60-Day{" "}
              <span className="font-serif italic font-normal text-amber-400">
                Full Course
              </span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl mx-auto mb-8 font-normal">
              মাসের পর মাস অনিশ্চয়তায় না থেকে সুমাইয়া জেরিন ও জাফরিন এলিয়েন-এর নিবিড় ১-অন-১ মেন্টরশিপে ৬০ দিনে নিশ্চিত করুন আপনার কাঙ্ক্ষিত{" "}
              <strong className="text-amber-400 font-bold">Band 7.5+</strong> প্রস্তুতি।
            </p>

            {/* Pricing Highlight Box */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 px-6 py-4 rounded-2xl bg-neutral-950/80 border border-neutral-800 mb-8 shadow-inner">
              <div className="flex items-baseline gap-3">
                <span className="text-lg sm:text-xl line-through text-neutral-500 font-medium">
                  8,000৳
                </span>
                <span className="text-4xl sm:text-6xl font-black text-white tracking-tight">
                  5,500৳
                </span>
              </div>

              <div className="h-5 w-px bg-neutral-800 hidden sm:block" />

              <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-amber-400 font-semibold bg-amber-950 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-amber-800 text-center">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>সীমিত সময়ের জন্য বিশেষ ছাড়</span>
              </div>
            </div>

            {/* Primary & Secondary Action Triggers - Pill shaped matching Hero, Guaranteed zero text wrapping */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-8 max-w-xl mx-auto">
              {/* WhatsApp Primary Action Button */}
              <a
                href="https://wa.me/8801521435603?text=Hello%20Speaking%20Nest!%20I%20want%20to%20enroll%20in%20the%20IELTS%2060-Day%20Full%20Course%20(5500%20Tk)."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-amber w-full sm:w-auto px-8 py-3.5 rounded-full text-center inline-flex items-center justify-center gap-2.5 text-sm font-bold shrink-0 whitespace-nowrap shadow-none hover:shadow-none"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">হোয়াটসঅ্যাপে ভর্তি নিশ্চিত করুন</span>
              </a>

              {/* Direct Phone Call Button */}
              <a
                href="tel:+8801521435603"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/80 text-neutral-200 hover:text-white text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-2.5 transition-all shrink-0 whitespace-nowrap"
              >
                <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="whitespace-nowrap">ফোন করুন: +880 1521435603</span>
              </a>
            </div>

            {/* Bottom Trust & Meta Strip - Modern Pill Indicators */}
            <div className="pt-6 border-t border-neutral-800/80 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-neutral-300">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-neutral-950/70 border border-neutral-800 text-center max-w-full">
                <Users className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="leading-tight">
                  মেন্টরশিপ: <strong className="text-white">সুমাইয়া জেরিন</strong> ও{" "}
                  <strong className="text-white">জাফরিন এলিয়েন</strong>
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-neutral-950/70 border border-neutral-800 text-center max-w-full">
                <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="leading-tight">ক্লাস শুরু: পরবর্তী ব্যাচ দ্রুত শুরু হচ্ছে</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-800 text-amber-400 font-medium text-center">
                <Zap className="w-3.5 h-3.5 shrink-0" />
                <span>তাৎক্ষণিক কনফার্মেশন</span>
              </div>
            </div>
          </FramePanel>
        </Frame>
      </div>
    </section>
  );
}
