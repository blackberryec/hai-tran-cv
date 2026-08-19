import type { Metadata } from "next";
import { IBM_Plex_Mono, Newsreader, Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hai-tran-cv.vercel.app"),
  title: {
    default: "Hai Tran (Jeff) — Senior Software Engineer & Solutions Architect",
    template: "%s — Hai Tran (Jeff)",
  },
  description:
    "Senior software engineer and solutions architect building AWS serverless platforms, AI-enabled systems and production software.",
  openGraph: {
    title: "Hai Tran (Jeff) — Senior Software Engineer & Solutions Architect",
    description:
      "AWS serverless architecture, AI-enabled systems, product engineering and selected field notes.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} ${newsreader.variable} ${plexMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
