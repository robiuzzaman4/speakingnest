import type { Metadata, Viewport } from "next";
import { Hind_Siliguri, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const hindSiliguri = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali", "latin"],
  variable: "--font-hind-siliguri",
  display: "swap",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const viewport: Viewport = {
  themeColor: "#060B13",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://speakingnest.com"),
  title: {
    default:
      "Speaking Nest | Master IELTS in 60 Days with Sumaiya Zerin & Jafrin Ellien",
    template: "%s | Speaking Nest",
  },
  description:
    "Join Speaking Nest's intensive 60-Day IELTS Challenge. Personalized mentoring by Sumaiya Zerin & Jafrin Ellien, 1-on-1 speaking drills, writing task evaluations, and proven strategies to score Band 7.5+. Enroll today!",
  keywords: [
    "IELTS course Bangladesh",
    "IELTS 60 days challenge",
    "Speaking Nest",
    "Sumaiya Zerin IELTS",
    "Jafrin Ellien IELTS",
    "IELTS speaking preparation",
    "IELTS writing evaluation",
    "IELTS online coaching BD",
    "IELTS Band 7.5+",
    "IELTS live classes",
  ],
  authors: [{ name: "Sumaiya Zerin" }, { name: "Jafrin Ellien" }],
  creator: "Speaking Nest",
  publisher: "Speaking Nest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://speakingnest.com",
    siteName: "Speaking Nest",
    title: "Speaking Nest | Achieve Your Dream IELTS Band in 60 Days",
    description:
      "Transform your Speaking, Writing, Reading & Listening skills with dual mentors Sumaiya Zerin & Jafrin Ellien. Live classes, 1-on-1 feedback, and complete mock tests.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Speaking Nest - IELTS 60 Days Challenge with Sumaiya Zerin & Jafrin Ellien",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Speaking Nest | IELTS 60-Day Challenge",
    description:
      "Master IELTS with dual expert mentors Sumaiya Zerin & Jafrin Ellien. 1-on-1 speaking feedback and band-score writing evaluations.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [{ url: "/icon.jpg" }],
    apple: [{ url: "/apple-icon.jpg", sizes: "180x180" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://speakingnest.com/#organization",
      name: "Speaking Nest",
      url: "https://speakingnest.com",
      email: "zerinsafa04@gmail.com",
      telephone: "+8801521435603",
      sameAs: [
        "https://www.facebook.com/speakingnestbysumaiyazerin",
        "https://www.facebook.com/groups/speakingnestbysumaiyazerin",
      ],
      founder: [
        {
          "@type": "Person",
          name: "Sumaiya Zerin",
          jobTitle: "Lead Speaking Mentor & Co-Founder",
        },
        {
          "@type": "Person",
          name: "Jafrin Ellien",
          jobTitle: "Lead Writing & Reading Strategist & Co-Founder",
        },
      ],
    },
    {
      "@type": "Course",
      "@id": "https://speakingnest.com/#course",
      name: "IELTS Full Course: 60 Days Challenge",
      description:
        "Comprehensive 60-day intensive IELTS preparation covering all four modules (Speaking, Writing, Reading, Listening) with personalized 1-on-1 speaking mocks and line-by-line essay evaluations.",
      provider: {
        "@type": "Organization",
        name: "Speaking Nest",
        url: "https://speakingnest.com",
      },
      instructor: [
        {
          "@type": "Person",
          name: "Sumaiya Zerin",
        },
        {
          "@type": "Person",
          name: "Jafrin Ellien",
        },
      ],
      timeRequired: "P60D",
      courseMode: "Online",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="bn"
      className={cn(
        "h-full scroll-smooth antialiased dark",
        hindSiliguri.variable,
        playfair.variable,
        inter.variable,
      )}
    >
      <head>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </head>
      <body className="min-h-full flex flex-col bg-neutral-950 text-neutral-100 selection:bg-amber-500 selection:text-neutral-950 font-sans">
        {children}
      </body>
    </html>
  );
}
