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
    default: "Hai Tran (Jeff) — Product & Business Architect | Cloud Solutions Architect",
    template: "%s — Hai Tran (Jeff)",
  },
  description:
    "Product- and business-oriented architect turning strategy into customer outcomes, scalable platforms and measurable value.",
  openGraph: {
    title: "Hai Tran (Jeff) — Product & Business Architect | Cloud Solutions Architect",
    description:
      "Business architecture, product outcomes, platform transformation and selected field notes.",
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
