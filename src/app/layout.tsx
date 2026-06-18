import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const googleSans = localFont({
  src: [
    {
      path: './fonts/ProductSans-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/ProductSans-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-google-sans',
  display: 'swap',
});
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://redlinesystems.in"),
  title: {
    default: "Redline Systems | Workstations, Servers, NAS & AI Infrastructure",
    template: "%s | Redline Systems"
  },
  description: "Redline Systems designs and deploys workstations, NAS, servers, AI infrastructure, and private storage solutions for businesses, studios, educational institutions, and professionals across India.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Redline Systems | Workstations, Servers, NAS & AI Infrastructure",
    description: "Redline Systems designs and deploys workstations, NAS, servers, AI infrastructure, and private storage solutions for businesses, studios, educational institutions, and professionals across India.",
    url: "https://redlinesystems.in",
    siteName: "Redline Systems",
    images: [
      {
        url: 'https://redlinesystems.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Redline Systems',
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Redline Systems | Workstations, Servers, NAS & AI Infrastructure",
    description: "Redline Systems designs and deploys workstations, NAS, servers, AI infrastructure, and private storage solutions for businesses, studios, educational institutions, and professionals across India.",
    images: ['https://redlinesystems.in/og-image.jpg'],
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
      className="h-full antialiased"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Redline Systems",
                "url": "https://redlinesystems.in",
                "logo": "https://redlinesystems.in/logo.png",
                "description": "Redline Systems designs and deploys workstations, NAS, servers, AI infrastructure, and private storage solutions for businesses, studios, educational institutions, and professionals across India.",
                "sameAs": [
                  "https://www.instagram.com/redline_systems/"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Redline Systems",
                "image": "https://redlinesystems.in/logo.png",
                "url": "https://redlinesystems.in",
                "address": {
                  "@type": "PostalAddress",
                  "addressRegion": "Maharashtra",
                  "addressCountry": "IN"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Redline Systems",
                "url": "https://redlinesystems.in/"
              }
            ])
          }}
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZW4MNFZ9RE"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZW4MNFZ9RE');
            `
          }}
        />
      </head>
      <body className={`min-h-full flex flex-col bg-background text-foreground selection:bg-primary/30 selection:text-white ${googleSans.variable}`}>
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
