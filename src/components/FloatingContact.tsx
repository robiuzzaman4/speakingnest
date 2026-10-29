import { MessageCircle, Phone } from "lucide-react";

export function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2">
      {/* Call button */}
      <a
        href="tel:+8801521435603"
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-neutral-900/95 backdrop-blur border border-neutral-800 text-amber-400 hover:text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all"
        aria-label="Direct Phone Call"
        title="Call +880 1521435603"
      >
        <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>

      {/* WhatsApp Floating Button with standard amber style */}
      <a
        href="https://wa.me/8801521435603?text=Hello%20Speaking%20Nest!%20I%20want%20to%20enroll%20in%20the%20IELTS%2060-Day%20Full%20Course%20(5500%20Tk)."
        target="_blank"
        rel="noopener noreferrer"
        className="btn-amber w-10 h-10 sm:w-auto sm:px-4 sm:py-2.5 rounded-full text-xs font-bold flex items-center justify-center gap-2 shadow-none hover:shadow-none"
        title="WhatsApp Us"
      >
        <MessageCircle className="w-5 h-5 sm:w-4 sm:h-4" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
