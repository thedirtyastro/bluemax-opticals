import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { siteUrl } from "@/lib/constants";
import { localBusinessSchema } from "@/lib/schema";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bluemax Opticals Whitefield | Eyewear, Sunglasses & Eye Care",
    template: "%s | Bluemax Opticals",
  },
  description:
    "Bluemax Opticals is an optical and eyewear destination in Whitefield, Bengaluru — eyeglasses, sunglasses, contact lenses and eye-care guidance. Call, WhatsApp or visit our Nallurahalli store.",
  keywords: [
    "Bluemax Opticals Whitefield",
    "optical shop Whitefield",
    "optician Whitefield",
    "optical store near Whitefield",
    "eyewear Whitefield",
    "sunglasses Whitefield",
    "contact lenses Whitefield",
    "eye care Whitefield",
    "optical shop Nallurahalli",
    "optical store near Palm Meadows",
  ],
  openGraph: {
    title: "Bluemax Opticals Whitefield | Eyewear, Sunglasses & Eye Care",
    description:
      "A modern optical and eyewear destination in Whitefield, Bengaluru. Eyeglasses, sunglasses, contact lenses and eye-care guidance.",
    url: siteUrl,
    siteName: "Bluemax Opticals",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bluemax Opticals Whitefield",
    description:
      "Eyewear, sunglasses, contact lenses and eye-care guidance in Whitefield, Bengaluru.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        {children}
      </body>
    </html>
  );
}
