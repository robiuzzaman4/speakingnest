"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "60-Day Routine", href: "#routine" },
    { label: "Course & Fee", href: "#plans" },
    { label: "Our Standards", href: "#criteria" },
    { label: "Success Stories", href: "#results" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center">
          <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white uppercase font-sans group-hover:text-amber-400 transition-colors">
            Speaking Nest
          </span>
        </Link>

        {/* Center Pill Menu - Unified Amber Palette */}
        <nav className="hidden lg:flex items-center gap-1 bg-neutral-900 border border-neutral-800 p-1 rounded-full text-xs font-semibold">
          {navItems.map((item) => {
            const isActive = activeTab === item.label;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setActiveTab(item.label)}
                className={`px-3 py-1 rounded-full border text-xs font-semibold transition-colors duration-150 ${isActive
                  ? "bg-amber-950 text-amber-400 border-amber-800"
                  : "text-neutral-400 border-transparent hover:text-white hover:bg-neutral-800"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button with Unified Amber Theme */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://wa.me/8801521435603?text=Hello%20Speaking%20Nest!%20I%20want%20to%20enroll%20in%20the%20IELTS%2060-Day%20Full%20Course%20(5500%20Tk)."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-amber px-4 py-2 rounded-full text-xs font-bold tracking-wide flex items-center gap-1.5 shadow-none hover:shadow-none"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            ব্যাচ এনরোলমেন্ট
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-neutral-400 hover:text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-900 border-b border-neutral-800 px-4 py-4 space-y-2 shadow-xl animate-in fade-in slide-in-from-top-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.label;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActiveTab(item.label);
                  setMobileMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${isActive
                  ? "bg-amber-950 text-amber-400 border-l-2 border-amber-400"
                  : "text-neutral-300 hover:bg-neutral-800 hover:text-white border-l-2 border-transparent"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-2 border-t border-neutral-800">
            <a
              href="https://wa.me/8801521435603?text=Hello%20Speaking%20Nest!%20I%20want%20to%20enroll%20in%20the%20IELTS%2060-Day%20Full%20Course%20(5500%20Tk)."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-amber w-full py-2.5 rounded-full text-center block text-sm font-bold shadow-none hover:shadow-none"
            >
              WhatsApp এ যোগাযোগ করুন
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
