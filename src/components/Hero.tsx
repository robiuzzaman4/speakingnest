import { ArrowRight, ChevronRight, Sparkles, Users } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-neutral-950 text-neutral-100 overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-24 border-b border-neutral-800 scroll-mt-14 sm:scroll-mt-16"
    >
      {/* Dark Subtle Micro Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />

      {/* Atmospheric Soft Amber Glows - Standard Tailwind Utilities */}
      <div className="absolute top-10 right-1/4 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-amber-600/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Clean Refined Amber Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-amber-950 border border-amber-800 text-amber-400 text-[11px] sm:text-xs font-semibold tracking-wide mb-4 max-w-full">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="leading-tight">IELTS FULL COURSE • ৬০ দিনের চ্যালেঞ্জ</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-white mb-4">
              Fly High to Your <br />
              <span className="font-serif italic font-normal text-amber-400">
                Dream Band
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-6 max-w-lg font-normal">
              সুমাইয়া জেরিন ও জাফরিন এলিয়েন-এর প্রত্যক্ষ ১-অন-১ মেন্টরশিপে মাত্র ৬০ দিনে গুছিয়ে নিন আপনার কাঙ্ক্ষিত{" "}
              <strong className="text-amber-400 font-bold">Band 7.5+</strong> প্রস্তুতি।
            </p>

            {/* Standard Amber CTA Button */}
            <div className="flex flex-wrap items-center gap-3.5 mb-6">
              <a
                href="https://wa.me/8801521435603?text=Hello%20Speaking%20Nest!%20I%20want%20to%20enroll%20in%20the%20IELTS%2060-Day%20Full%20Course%20(5500%20Tk)."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-amber px-6 py-3 rounded-full text-sm font-bold tracking-wide flex items-center gap-2 shadow-none hover:shadow-none"
              >
                ৬০ দিনের ব্যাচে যুক্ত হন <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#plans"
                className="text-xs sm:text-sm font-semibold text-neutral-300 hover:text-amber-400 transition-colors flex items-center gap-1 group py-2"
              >
                <span>কোর্স রুটিন ও ফি</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-amber-400" />
              </a>
            </div>

            {/* Social Trust Proof */}
            <div className="flex items-center gap-2 text-xs text-neutral-300 font-medium bg-neutral-900 px-3.5 py-1.5 rounded-full border border-neutral-800">
              <Users className="w-4 h-4 text-amber-400" />
              <span>৫০+ শিক্ষার্থী স্পিকিং নেস্ট থেকে Band 7.0+ অর্জন করেছেন</span>
            </div>
          </div>

          {/* Right Column: 3 Sleek Dark 3D Floating Module Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-87.5 sm:min-h-105">
            <div className="relative w-full max-w-xs sm:max-w-sm h-80 sm:h-96">
              {/* Card 1: READING (Top Center) */}
              <div className="absolute top-0 right-3 sm:right-6 w-44 sm:w-48 h-40 sm:h-44 rounded-xl bg-neutral-900 border border-neutral-800 shadow-2xl p-4 flex flex-col justify-between transform -rotate-3 hover:rotate-0 hover:-translate-y-1.5 hover:border-amber-500/80 hover:shadow-amber-950/80 transition-all duration-300 z-10 group overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-amber-500/0 group-hover:via-amber-400 transition-all duration-500" />
                <div className="w-full flex-1 flex items-center justify-center">
                  <div className="w-24 h-16 bg-neutral-800 rounded-lg flex overflow-hidden border border-neutral-700">
                    <div className="w-1/2 border-r border-neutral-700 p-2 flex flex-col gap-1.5 justify-center">
                      <div className="w-full h-1 bg-amber-500 rounded-full" />
                      <div className="w-3/4 h-1 bg-amber-700 rounded-full" />
                      <div className="w-4/5 h-1 bg-amber-700 rounded-full" />
                    </div>
                    <div className="w-1/2 p-2 flex flex-col gap-1.5 justify-center">
                      <div className="w-full h-1 bg-amber-500 rounded-full" />
                      <div className="w-4/5 h-1 bg-amber-700 rounded-full" />
                      <div className="w-2/3 h-1 bg-amber-700 rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-xs font-bold text-neutral-200 tracking-wide uppercase group-hover:text-amber-300 transition-colors">
                    Reading Logic
                  </span>
                </div>
              </div>

              {/* Card 2: WRITING (Left Middle) */}
              <div className="absolute top-20 left-0 w-44 sm:w-48 h-40 sm:h-44 rounded-xl bg-neutral-900 border border-neutral-800 shadow-2xl p-4 flex flex-col justify-between transform -rotate-6 hover:rotate-0 hover:-translate-y-1.5 hover:border-amber-500/80 hover:shadow-amber-950/80 transition-all duration-300 z-20 group overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-amber-500/0 group-hover:via-amber-400 transition-all duration-500" />
                <div className="w-full flex-1 flex items-center justify-center">
                  <div className="relative w-20 h-20 bg-neutral-800 rounded-lg p-2.5 border border-neutral-700 flex flex-col gap-2">
                    <div className="w-full h-1.5 bg-amber-500 rounded-full" />
                    <div className="w-5/6 h-1 bg-amber-700 rounded-full" />
                    <div className="w-full h-1 bg-amber-700 rounded-full" />
                    <div className="w-2/3 h-1 bg-amber-700 rounded-full" />
                    <div className="absolute -bottom-1 -right-2 w-9 h-3 bg-amber-500 rounded-sm transform rotate-45 shadow-sm" />
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-xs font-bold text-neutral-200 tracking-wide uppercase group-hover:text-amber-300 transition-colors">
                    Writing Surgery
                  </span>
                </div>
              </div>

              {/* Card 3: SPEAKING (Bottom Right) */}
              <div className="absolute bottom-0 right-0 sm:right-2 w-44 sm:w-48 h-40 sm:h-44 rounded-xl bg-neutral-900 border border-neutral-800 shadow-2xl p-4 flex flex-col justify-between transform rotate-6 hover:rotate-0 hover:-translate-y-1.5 hover:border-amber-500/80 hover:shadow-amber-950/80 transition-all duration-300 z-30 group overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-amber-500/0 group-hover:via-amber-400 transition-all duration-500" />
                <div className="w-full flex-1 flex items-center justify-center">
                  <div className="relative w-20 h-14">
                    <div className="w-18 h-12 bg-linear-to-tr from-amber-600 to-amber-400 rounded-xl rounded-bl-none flex items-center justify-center gap-1.5 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-xs font-bold text-neutral-200 tracking-wide uppercase group-hover:text-amber-300 transition-colors">
                    1-on-1 Speaking
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
