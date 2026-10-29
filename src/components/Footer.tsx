import { FacebookIcon } from "@/components/icons/FacebookIcon";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="space-y-3.5">
            <Link href="/" className="group flex items-center">
              <span className="font-extrabold text-xl tracking-tight text-white uppercase font-sans group-hover:text-amber-400 transition-colors">
                Speaking Nest
              </span>
            </Link>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-xs">
              সুমাইয়া জেরিন ও জাফরিন এলিয়েন-এর স্পেশালাইজড IELTS মেন্টরশিপ প্ল্যাটফর্ম। ৬০ দিনের সুনির্দিষ্ট রুটিন ও নিবিড় গাইডলাইন।
            </p>
            <div className="pt-1 flex items-center gap-2.5">
              <a
                href="https://www.facebook.com/speakingnestbysumaiyazerin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-amber-400 hover:border-amber-500 transition-colors"
                aria-label="Facebook Page"
              >
                <FacebookIcon className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://wa.me/8801521435603"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-amber-400 hover:border-amber-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="mailto:zerinsafa04@gmail.com"
                className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-amber-400 hover:border-amber-500 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              ন্যাভিগেশন
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-amber-400 transition-colors">
                  হোমপেজ
                </a>
              </li>
              <li>
                <a href="#routine" className="hover:text-amber-400 transition-colors">
                  ৬০ দিনের স্টাডি রুটিন
                </a>
              </li>
              <li>
                <a href="#plans" className="hover:text-amber-400 transition-colors">
                  কোর্স ও ফি (5,500৳)
                </a>
              </li>
              <li>
                <a href="#criteria" className="hover:text-amber-400 transition-colors">
                  স্ট্যান্ডার্ড ও কমিটমেন্ট
                </a>
              </li>
              <li>
                <a href="#results" className="hover:text-amber-400 transition-colors">
                  সফল শিক্ষার্থীদের স্কোর
                </a>
              </li>
            </ul>
          </div>

          {/* Course Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              কোর্স ফিচারস
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-white font-semibold">
                  IELTS 60-Day Full Course (5,500৳)
                </span>
              </li>
              <li>
                <span className="text-neutral-400">১-অন-১ স্পিকিং টেস্ট মেন্টরশিপ</span>
              </li>
              <li>
                <span className="text-neutral-400">লাইন-বাই-লাইন রাইটিং অডিট</span>
              </li>
              <li>
                <span className="text-neutral-400">ক্যামব্রিজ ফুল মক টেস্ট ভল্ট</span>
              </li>
            </ul>
          </div>

          {/* Official Contacts */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              অফিশিয়াল যোগাযোগ
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="tel:+8801521435603" className="hover:text-white font-medium">
                  +880 1521435603
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a
                  href="https://wa.me/8801521435603"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-medium"
                >
                  WhatsApp: +880 1521435603
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a
                  href="mailto:zerinsafa04@gmail.com"
                  className="hover:text-white break-all"
                >
                  zerinsafa04@gmail.com
                </a>
              </li>
              <li className="pt-1">
                <a
                  href="https://www.facebook.com/groups/speakingnestbysumaiyazerin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-amber-400 hover:underline font-semibold"
                >
                  <span>ফ্রি ফেসবুক গ্রুপে জয়েন করুন</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-5 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <div>
            © 2026 Speaking Nest. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-neutral-400">
            <span>Designed &amp; Developed by</span>
            <a
              href="https://github.com/robiuzzaman4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1 transition-colors"
            >
              <span>robiuzzaman4</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
