import type { Metadata } from "next";
import { Fraunces, Manrope, Italiana } from "next/font/google";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import MarbleBackground from "./_components/MarbleBackground";
import "./globals.css";
import { LOUNGE_INTRO, MANIFESTO, TAGLINE } from "@/lib/copy";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
});

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-italiana",
  display: "swap",
});

export const metadata: Metadata = {
  title: `Hemings Group — ${TAGLINE}`,
  description: `${LOUNGE_INTRO.slice(0, 155)}…`,
  metadataBase: new URL("https://hemingsgroup.com"),
  openGraph: {
    title: `Hemings Group — ${TAGLINE}`,
    description: MANIFESTO,
    url: "https://hemingsgroup.com",
    siteName: "Hemings Group",
    images: [
      {
        url: "/venue-about.jpg",
        width: 2048,
        height: 1536,
        alt: "Hemings bar — crystal chandeliers and gold-trimmed elegance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} ${italiana.variable}`}
    >
      <body>
        {/* Fixed full-page marble — persists across all pages */}
        <MarbleBackground />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
