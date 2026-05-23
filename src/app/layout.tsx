import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://redlinesystems.in"),
  title: {
    default: "Redline Systems | Server & Storage Infrastructure",
    template: "%s | Redline Systems"
  },
  description: "Redline Systems designs and deploys workstation, server, storage, and GPU infrastructure for engineering teams, studios, educational institutes, and businesses across Maharashtra.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Redline Systems | Server & Storage Infrastructure",
    description: "Redline Systems designs and deploys workstation, server, storage, and GPU infrastructure for engineering teams, studios, educational institutes, and businesses across Maharashtra.",
    url: "https://redlinesystems.in",
    siteName: "Redline Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Redline Systems | Server & Storage Infrastructure",
    description: "Redline Systems designs and deploys workstation, server, storage, and GPU infrastructure for engineering teams, studios, educational institutes, and businesses across Maharashtra.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/30 selection:text-white">
        <SmoothScroll>
          <Navigation />
          <main className="flex-grow flex flex-col">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </SmoothScroll>
      </body>
    </html>
  );
}
