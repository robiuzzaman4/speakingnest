import { AccountabilityGrid } from "@/components/AccountabilityGrid";
import { FloatingContact } from "@/components/FloatingContact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { NoticeBar } from "@/components/NoticeBar";
import { PricingPlans } from "@/components/PricingPlans";
import { RoutineChart } from "@/components/RoutineChart";
import { SuccessStory } from "@/components/SuccessStory";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-neutral-100 selection:bg-amber-500 selection:text-neutral-950">
      {/* 1. Header / Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section with 3D Stacked Module Cards */}
        <Hero />

        {/* 3. Urgent Batch Intake Bar */}
        <NoticeBar />

        {/* 4. 60-Day Daily Study Routine Chart */}
        <RoutineChart />

        {/* 5. Single Course Admission & Pricing (5,500৳) */}
        <PricingPlans />

        {/* 6. Commitment & Accountability ("এই কোর্স সবার জন্য না") */}
        <AccountabilityGrid />

        {/* 7. Success Stories & Real Student Reviews */}
        <SuccessStory />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* 9. Floating Contact Triggers */}
      <FloatingContact />
    </div>
  );
}
