import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

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
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
